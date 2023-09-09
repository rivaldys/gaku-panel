import axios from 'axios'
import { GET_CATALOG_TYPES, isAccessTokenExpired, refreshTheToken, setFail, setLoading, setSuccess } from '../../../../utils'

const getCatalogTypesAction = (req, res) =>
{
    if(isAccessTokenExpired()) refreshTheToken()

    return dispatch =>
    {
        dispatch(setLoading(GET_CATALOG_TYPES.ATTEMPT))

        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/catalog-types`,
            headers:
            {
                Accept: 'application/json'
            }
        })
        .then(result =>
        {
            dispatch(setSuccess(GET_CATALOG_TYPES.SUCCEED, result.data.catalogTypes))
            if(res && res.succeed) res.succeed()
        })
        .catch(error =>
        {
            console.log('Error:', error.response)
            dispatch(setFail(GET_CATALOG_TYPES.FAILED, error.response.data.errors))
            if(res && res.failed) res.failed()
        })
    }
}

export default getCatalogTypesAction