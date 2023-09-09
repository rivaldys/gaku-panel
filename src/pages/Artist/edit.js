import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ILPlaceholderImage } from '../../assets'
import { Button, ImageUploader, Input, InputGroup, TextArea } from '../../components'
import { getArtistByIdAction, updateArtistAction } from '../../services/actions'

const EditArtist = ({ history, match }) =>
{  
    const [form, setForm] = useState({
        artist_name: '',
        description: '',
        photo: '',
        current_photo_url: '',
        id: ''
    })

    const dispatch = useDispatch()
    const { errors } = useSelector(state => state.update_artist)

    const onChange = (formType, formValue) =>
    {
        setForm({
            ...form,
            [formType]: formValue
        })
    }

    const updateArtistHandler = e =>
    {
        e.preventDefault()
        const res = {
            succeed: message =>
            {
                history.push('/panel/artists')
                window.flash(message)
            },
            failed: error =>
            {
                if(error.message)
                {
                    if(error.message !== 'Input error.')
                    {
                        history.push('/panel/artists')
                        window.flash(error.message, 'error')
                    }
                }
                else
                {
                    history.push('/panel/artists')
                    window.flash(error, 'error')
                }
            }
        }
        dispatch(updateArtistAction(form, res))
    }

    useEffect(() =>
    {
        const res = {
            succeed: result =>
            {
                setForm({
                    artist_name: result.artist.name,
                    description: result.artist.description,
                    photo: '',
                    current_photo_url: result.artist.photo ? `${process.env.REACT_APP_IMAGE_URL}/${result.artist.photo}` : ILPlaceholderImage,
                    id: result.artist.id
                })
            }
        }

        dispatch(getArtistByIdAction({ id: match.params.id }, res))
    }, [dispatch, match.params.id])
    
    return (
        <div className="bg-white p-6 rounded-[10px] drop-shadow-[0_3px_5px_rgba(128,128,128,0.15)]">
            <form onSubmit={updateArtistHandler}>
                <InputGroup className="mb-5" label="Name" labelFor="artist_name">
                    <Input
                        type="text"
                        placeholder="Enter artist name"
                        defaultValue={form.artist_name}
                        onChange={event => onChange('artist_name', event.target.value)}
                        name="artist_name"
                        id="artist_name"
                        errorMessage={errors.artist_name && errors.artist_name.msg}
                    />
                </InputGroup>
                <InputGroup className="mb-5" label="Description" labelFor="description">
                    <TextArea
                        className="resize-none"
                        placeholder="Enter description"
                        defaultValue={form.description}
                        onChange={event => onChange('description', event.target.value)}
                        rows="5"
                        name="description"
                        id="description"
                        errorMessage={errors.description && errors.description.msg}
                    ></TextArea>
                </InputGroup>
                <InputGroup className="mb-9" label="Photo" labelFor="photo">
                    <ImageUploader
                        defaultValue={form.current_photo_url}
                        value={form.photo}
                        onChange={image => onChange('photo', image)}
                        errorMessage={errors.photo && errors.photo.msg}
                        id="photo"
                    />
                </InputGroup>
                <div className="flex">
                    <Button
                        className="mr-[10px]"
                        type="button"
                        variant="outlined"
                        onClick={() => history.goBack()}
                    >
                        Cancel
                    </Button>
                    <Button type="submit">Update</Button>
                </div>
            </form>
        </div>
    )
}

export default EditArtist