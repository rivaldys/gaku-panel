import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AutoComplete, Button, Input, InputGroup, Select } from '../../components'
import { getArtistsAction, getCatalogTypesAction } from '../../services/actions'
import { useForm } from '../../utils'

const CreateCatalog = ({ history }) =>
{
    const [form, setForm] = useForm({
        catalog_name: '',
        catalog_type: '',
        main_artists: {},
        featuring_artists: {},
        release_date: ''
    })

    const [inputCount, setInputCount] = useState([
        { main_artists: '' }
    ])

    const dispatch = useDispatch()
    const { data: catalogTypes } = useSelector(state => state.catalog_types)
    const { data: { artists } } = useSelector(state => state.artists)

    const addInputHandler = () =>
    {
        setInputCount([...inputCount, { main_artists: '' }])
    }

    const removeInputHandler = index =>
    {
        const list = [...inputCount]
        list.splice(index, 1)
        setInputCount(list)
    }

    useEffect(() =>
    {
        dispatch(getCatalogTypesAction())
        dispatch(getArtistsAction())
    }, [dispatch])

    const catalogs = [
        {
            id: 1,
            title: 'Album 1'
        },
        {
            id: 2,
            title: 'Single 1'
        },
        {
            id: 3,
            title: 'Extended Play 1'
        },
    ]

    console.log('Form data:', form)

    return (
        <div className="bg-white p-6 rounded-[10px] drop-shadow-[0_3px_5px_rgba(128,128,128,0.15)]">
            <form>
                <InputGroup className="mb-5" label="Name" labelFor="catalog_name">
                    <Input
                        type="text"
                        placeholder="Enter catalog name"
                        onChange={event => setForm('catalog_name', event.target.value)}
                        name="catalog_name"
                        id="catalog_name"
                        // errorMessage={errors.catalog_name && errors.catalog_name.msg}
                    />
                </InputGroup>
                <InputGroup className="mb-5" label="Type" labelFor="catalog_type">
                    <Select
                        onChange={event => setForm('catalog_type', event.target.value)}
                        name="catalog_type"
                        id="catalog_type"
                        // errorMessage={errors.catalog_type && errors.catalog_type.msg}
                    >
                        <Select.Option value="">Select catalog type</Select.Option>
                        {catalogTypes && catalogTypes.map((item, index) => (
                            <Select.Option value={item.id} key={index}>{item.name}</Select.Option>
                        ))}
                    </Select>
                </InputGroup>
                <InputGroup className="mb-5" label="Main Artist(s)" labelFor="main_artists">
                    {inputCount.map((item, index) => (
                        <div className={index === 0 ? 'flex' : 'flex mt-3' } key={index}>
                            <AutoComplete
                                className="flex-1 mr-2"
                                suggestions={artists}
                                suggestionObjectKey="name"
                                imageKey="photo"
                                placeholder="Enter artist name and select the artist from suggestions"
                                onSelect={value => setForm('main_artists', Object.assign(form.main_artists, { [`input_${index+1}`]: value  }))}
                                emptyDataMessage="No suggestions. Before submitting catalog data please add the artist data first on Artists menu."
                                name="main_artists"
                                id="main_artists"
                            />
                            {index === 0 && (
                                <Button
                                    type="button"
                                    icon="plus"
                                    onClick={addInputHandler}
                                    disabled={inputCount.length >= 5 ? true : false}
                                />
                            )}
                            {index > 0 && (
                                <Button
                                    type="button"
                                    icon="x"
                                    variant="outlined"
                                    onClick={() => removeInputHandler(index)}
                                />
                            )}
                        </div>
                    ))}
                </InputGroup>
                <InputGroup className="mb-5" label="Featuring Artist(s)" labelFor="featuring_artists">
                    <AutoComplete
                        suggestions={catalogs}
                        suggestionObjectKey="title"
                        placeholder="Enter artist name and select the artist from suggestions"
                        onSelect={value => console.log('Selected data:', value)}
                        emptyDataMessage="No suggestions. Before submitting catalog data please add the artist data first on Artists menu."
                        name="featuring_artists"
                        id="featuring_artists"
                    />
                </InputGroup>
                <InputGroup className="mb-9" label="Release Date" labelFor="release_date">
                    <Input
                        type="date"
                        placeholder="Enter catalog release date"
                        name="release_date"
                        id="release_date"
                    />
                </InputGroup>
                <div className="flex">
                    <Button
                        className="mr-[10px]"
                        type="button"
                        variant="outlined"
                        onClick={() => history.replace('/panel/catalogs')}
                    >
                        Cancel
                    </Button>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default CreateCatalog