export default (state = {}, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'SET_LOCATION': {
            return {
                ...state,
                location: payload, 
                loading: true,
                weather: null,
            };
        }
        case 'SET_WEATHER': {
            return {
                ...state,
                loading: false,
                weather: payload,
            };
        }
        case 'GET_WEATHER_FAILED': {
            return {
                error: 'Unable to get weather data',
                loading: false,
                ...state,
            }
        }
        default:
            return {...state};
    }
}