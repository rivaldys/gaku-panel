import { combineReducers } from 'redux'
import { addArtistReducer, getArtistByIdReducer, getArtistsReducer, updateArtistReducer } from './artist'
import { loginReducer } from './auth'
import { getCatalogTypesReducer } from './catalog'

const reducers = combineReducers({
    add_artist: addArtistReducer,
    artist_detail: getArtistByIdReducer,
    artists: getArtistsReducer,
    update_artist: updateArtistReducer,
    catalog_types: getCatalogTypesReducer,
    login: loginReducer
})

export default reducers