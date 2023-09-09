import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ILPlaceholderImage } from '../../assets'
import { Icon, Image } from '../../components'
import { getArtistByIdAction } from '../../services/actions'

const ArtistDetail = ({ history, match }) =>
{
    const dispatch = useDispatch()
    const { data: { artist } } = useSelector(state => state.artist_detail)

    useEffect(() =>
    {
        dispatch(getArtistByIdAction({ id: match.params.id }))
    }, [dispatch, match.params.id])

    return (
        <>
            {artist && (
                <div className="flex items-start bg-white p-6 rounded-[10px] drop-shadow-[0_3px_5px_rgba(128,128,128,0.15)]">
                    <Image
                        containerClassName="w-[150px] h-[150px] rounded-[15px] mr-5"
                        src={artist.photo ? `${process.env.REACT_APP_IMAGE_URL}/${artist.photo}` : ILPlaceholderImage}
                        alt={artist.name}
                    />
                    <div className="w-[calc(100%-170px)]">
                        <h2 className="text-2xl font-semibold text-[#555555] mb-[15px]">{artist.name}</h2>
                        <p className="mb-[15px] text-[#757575] font-light text-sm">{artist.description}</p>
                    </div>
                    <div className="flex absolute top-6 right-6">
                        <button
                            className="border border-[#eaeaea] rounded-full p-[10px] transition hover:bg-[#f5f5f5] mr-2"
                            type="button"
                            onClick={() => history.push(`/panel/artist/${artist.id}/edit`)}
                            title="Edit"
                        >
                            <Icon name="pencil" size={20} color="#bebebe" />
                        </button>
                        <button
                            className="border border-[#eaeaea] rounded-full p-[10px] transition hover:bg-[#f5f5f5]"
                            type="button"
                            title="Delete"
                        >
                            <Icon name="trash" size={20} color="#bebebe" />
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default ArtistDetail