export const storeData = (key, value) =>
{
    localStorage.setItem(key, JSON.stringify(value))
}

export const getData = key =>
{
    const value = localStorage.getItem(key)
    if(value !== null) return JSON.parse(value)
}

export const removeData = key =>
{
    localStorage.removeItem(key)
}