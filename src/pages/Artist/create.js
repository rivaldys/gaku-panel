import { useDispatch, useSelector } from 'react-redux'
import { Button, ImageUploader, Input, InputGroup, TextArea } from '../../components'
import { addArtistAction } from '../../services/actions'
import { useForm } from '../../utils'

const CreateArtist = ({ history }) =>
{  
    const [form, setForm] = useForm({
        artist_name: '',
        description: '',
        photo: ''
    })

    const dispatch = useDispatch()
    const { errors } = useSelector(state => state.add_artist)

    const addArtistHandler = e =>
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
        dispatch(addArtistAction(form, res))
    }
    
    return (
        <div className="bg-white p-6 rounded-[10px] drop-shadow-[0_3px_5px_rgba(128,128,128,0.15)]">
            <form onSubmit={addArtistHandler}>
                <InputGroup className="mb-5" label="Name" labelFor="artist_name">
                    <Input
                        type="text"
                        placeholder="Enter artist name"
                        onChange={event => setForm('artist_name', event.target.value)}
                        name="artist_name"
                        id="artist_name"
                        errorMessage={errors.artist_name && errors.artist_name.msg}
                    />
                </InputGroup>
                <InputGroup className="mb-5" label="Description" labelFor="description">
                    <TextArea
                        className="resize-none"
                        placeholder="Enter description"
                        onChange={event => setForm('description', event.target.value)}
                        rows="5"
                        name="description"
                        id="description"
                        errorMessage={errors.description && errors.description.msg}
                    ></TextArea>
                </InputGroup>
                <InputGroup className="mb-9" label="Photo" labelFor="photo">
                    <ImageUploader
                        value={form.photo}
                        onChange={image => setForm('photo', image)}
                        errorMessage={errors.photo && errors.photo.msg}
                        id="photo"
                    />
                </InputGroup>
                <div className="flex">
                    <Button
                        className="mr-[10px]"
                        type="button"
                        variant="outlined"
                        onClick={() => history.replace('/panel/artists')}
                    >
                        Cancel
                    </Button>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default CreateArtist