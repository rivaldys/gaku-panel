export const setFail = (actionType: string, errors: boolean | object) =>
{
    return {
        type: actionType,
        payload: { errors }
    }
}

export const setLoading = (actionType: string) =>
{
    return {
        type: actionType,
        payload: { isLoading: true }
    }
}

export const setSuccess = (actionType: string, data: object | Array<object>) =>
{
    return {
        type: actionType,
        payload: { data }
    }
}