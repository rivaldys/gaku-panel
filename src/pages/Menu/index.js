import { Image } from '../../components'

const Menus = () =>
{
    const imageCompilation = [
        {
            src: 'https://images.unsplash.com/photo-1625293961325-170b642843dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1625293961325-170b642843dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5'
        },
        {
            src: 'https://images.unsplash.com/photo-1655319492860-9efedabbea98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1655319492860-9efedabbea98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5'
        },
        {
            src: 'https://images.unsplash.com/photo-1654691517081-cb0c6d0158fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1654691517081-cb0c6d0158fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5'
        },
        {
            src: 'https://images.unsplash.com/photo-1655034646733-8a91a4708031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1655034646733-8a91a4708031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5'
        },
        {
            src: 'https://images.unsplash.com/photo-1655032827680-1c5acdc6dea4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1655032827680-1c5acdc6dea4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5'
        },
        {
            src: 'https://images.unsplash.com/photo-1625293961325-170b642843dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1625293961325-170b642843dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5'
        },
        {
            src: 'https://images.unsplash.com/photo-1655319492860-9efedabbea98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1655319492860-9efedabbea98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5'
        },
        {
            src: 'https://images.unsplash.com/photo-1654691517081-cb0c6d0158fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1654691517081-cb0c6d0158fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5'
        },
        {
            src: 'https://images.unsplash.com/photo-1655034646733-8a91a4708031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1655034646733-8a91a4708031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5'
        },
        {
            src: 'https://images.unsplash.com/photo-1655032827680-1c5acdc6dea4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1655032827680-1c5acdc6dea4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5'
        },
        {
            src: 'https://images.unsplash.com/photo-1625293961325-170b642843dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1625293961325-170b642843dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5'
        },
        {
            src: 'https://images.unsplash.com/photo-1655319492860-9efedabbea98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1655319492860-9efedabbea98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5'
        },
        {
            src: 'https://images.unsplash.com/photo-1654691517081-cb0c6d0158fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1654691517081-cb0c6d0158fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5'
        },
        {
            src: 'https://images.unsplash.com/photo-1655034646733-8a91a4708031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1655034646733-8a91a4708031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5'
        },
        {
            src: 'https://images.unsplash.com/photo-1655032827680-1c5acdc6dea4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1655032827680-1c5acdc6dea4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5'
        },
    ]

    return (
        <>
            {imageCompilation.map((image, index) => (
                <Image
                    containerClassName="mb-5 rounded-md h-[300px]"
                    src={image.src}
                    preload={image.thumbnail}
                    alt={`Wallpaper-${index+1}`}
                    key={index}
                />
            ))}
        </>
    )
}

export default Menus