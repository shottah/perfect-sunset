import axios from 'axios';

/**
 * Returns the Open Weather API response to the 
 * locale and country provided.
 * @param {String} locale 
 * @param {String} country 
 */
export const getWeatherFor = async (locale, country) => {
    const uri = process.env.REACT_APP_WEATHER_URL + locale + ',' + country + process.env.REACT_APP_WEATHER_API_KEY;
    return axios.get(uri)
        .then(res => (res.data))
        .catch(err => (err.response));
}

/**
 * Returns an integer between 1 and 5 determined 
 * by the weather data provided.
 * @param {Object} data 
 */
export const getWeatherIndex = (data) => {
    if (!data) return 0;
    return 
}