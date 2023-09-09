export const setFail = (actionType, errors) =>
{
    return {
        type: actionType,
        payload: { errors }
    }
}

export const setLoading = (actionType) =>
{
    return {
        type: actionType,
        payload: { isLoading: true }
    }
}

export const setSuccess = (actionType, data) =>
{
    return {
        type: actionType,
        payload: { data }
    }
}