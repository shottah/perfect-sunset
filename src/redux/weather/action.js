export const Actions = {
    SET_LOCATION: 'SET_LOCATION',
    SET_WEATHER: 'SET_WEATHER',
    GET_WEATHER_FAILED: 'GET_WEATHER_FAILED',
}

export const setLocation = (location) => ({
    type: Actions.SET_LOCATION,
    payload: location
})

export const setWeatherData = (data) => ({
    type: Actions.SET_WEATHER,
    payload: data
})