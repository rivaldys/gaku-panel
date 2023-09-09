import { lazy } from 'react'

const Admin = lazy(() => import('../pages/Account/Admin'))
const Artist = lazy(() => import('../pages/Artist'))
const ArtistDetail = lazy(() => import('../pages/Artist/detail'))
const CreateArtist = lazy(() => import('../pages/Artist/create'))
const EditArtist = lazy(() => import('../pages/Artist/edit'))
const Catalog = lazy(() => import('../pages/Catalog'))
const CreateCatalog = lazy(() => import('../pages/Catalog/create'))
const Login = lazy(() => import('../pages/Login'))
const Menu = lazy(() => import('../pages/Menu'))
const Song = lazy(() => import('../pages/Song'))
const CreateSong = lazy(() => import('../pages/Song/create'))

const auth = '/auth'
const panel = '/panel'

const routes = [
    {
        component: Admin,
        name: 'Accounts',
        path: `${panel}/accounts`,
        redirect_to: false,
        sidebar:
        {
            icon: 'users',
            order: 4
        }
    },
    {
        component: Artist,
        name: 'Artists',
        path: `${panel}/artists`,
        redirect_to: false,
        sidebar:
        {
            icon: 'sparkles',
            order: 3
        },
        create_button:
        {
            destination_path: `${panel}/artist/create`
        }
    },
    {
        component: CreateArtist,
        name: 'Add New',
        path: `${panel}/artist/create`,
        redirect_to: false,
        root:
        {
            name: 'Artists',
            path: `${panel}/artists`,
        },
        sidebar: false
    },
    {
        component: EditArtist,
        name: 'Edit',
        path: `${panel}/artist/:id/edit`,
        redirect_to: false,
        root:
        {
            name: 'Artists',
            path: `${panel}/artists`,
        },
        sidebar: false
    },
    {
        component: ArtistDetail,
        name: 'Detail',
        path: `${panel}/artist/:id`,
        redirect_to: false,
        root:
        {
            name: 'Artists',
            path: `${panel}/artists`,
        },
        sidebar: false
    },
    {
        component: Catalog,
        name: 'Catalogs',
        path: `${panel}/catalogs`,
        redirect_to: false,
        sidebar:
        {
            icon: 'collection',
            order: 2
        },
        create_button:
        {
            destination_path: `${panel}/catalog/create`
        }
    },
    {
        component: CreateCatalog,
        name: 'Add New',
        path: `${panel}/catalog/create`,
        redirect_to: false,
        root:
        {
            name: 'Catalogs',
            path: `${panel}/catalogs`,
        },
        sidebar: false
    },
    {
        component: false,
        name: 'Comments',
        path: `${panel}/comments`,
        redirect_to: false,
        sidebar:
        {
            icon: 'chat',
            order: 7
        }
    },
    {
        component: Login,
        name: 'Login',
        path: `${auth}/login`,
        redirect_to: false,
        sidebar: false
    },
    {
        component: Menu,
        name: 'Menus',
        path: `${panel}/menus`,
        redirect_to: false,
        sidebar:
        {
            icon: 'view-grid',
            order: 6
        }
    },
    {
        component: false,
        name: 'Pages',
        path: `${panel}/pages`,
        redirect_to: false,
        sidebar:
        {
            icon: 'template',
            order: 5
        }
    },
    {
        component: false,
        name: 'Settings',
        path: `${panel}/settings`,
        redirect_to: false,
        sidebar:
        {
            icon: 'cog',
            order: 8
        }
    },
    {
        component: Song,
        name: 'Songs',
        path: `${panel}/songs`,
        redirect_to: false,
        sidebar:
        {
            icon: 'music-note',
            order: 1
        },
        create_button:
        {
            destination_path: `${panel}/song/create`
        }
    },
    {
        component: CreateSong,
        name: 'Add New',
        path: `${panel}/song/create`,
        redirect_to: false,
        root:
        {
            name: 'Songs',
            path: `${panel}/songs`,
        },
        sidebar: false
    },

    // Redirection
    {
        component: false,
        name: 'Redirect to Login',
        path: '/',
        redirect_to: `${auth}/login`,
        sidebar: false
    },
    {
        component: false,
        name: 'Redirect to Login',
        path: auth,
        redirect_to: `${auth}/login`,
        sidebar: false
    },
    {
        component: false,
        name: 'Redirect to Artists',
        path: `${panel}/artist`,
        redirect_to: `${panel}/artists`,
        sidebar: false
    },
    {
        component: false,
        name: 'Redirect to Songs',
        path: panel,
        redirect_to: `${panel}/songs`,
        sidebar: false
    }
]

export default routes