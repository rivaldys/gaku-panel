import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ILPlaceholderImage } from '../../assets'
import { FlatList } from '../../components'
import { getArtistsAction } from '../../services/actions'

const Artist = () =>
{
    const dispatch = useDispatch()
    const { data: { artists } } = useSelector(state => state.artists)

    useEffect(() =>
    {
        dispatch(getArtistsAction())
    }, [dispatch])
    
    return (
        <>
            {artists &&
                artists.map(artist => (
                    <FlatList
                        photo={artist.photo ? `${process.env.REACT_APP_IMAGE_URL}/${artist.photo}` : ILPlaceholderImage}
                        title={artist.name}
                        desc="Unavailable total songs or albums."
                        goToDetail={`/panel/artist/${artist.id}`}
                        key={artist.id}
                    />
                ))}
        </>
    )
}

export default Artist