import { Actions, setWeatherData } from "./action";
import { select, call, put, spawn, takeLatest} from 'redux-saga/effects';
import { fetchWeatherByLocation } from "./api";
import { locationSelector } from "./selector";

export function * fetchWeather (action) {
    try {
        const location = yield select(locationSelector);
        const data = yield call(fetchWeatherByLocation, location);

        if (data.message) {throw new Error(data.message)}

        yield put(setWeatherData(data));
    } catch (e) {
        yield put({type: Actions.GET_WEATHER_FAILED, payload: e.message})
    }
}

export function * watchWeatherChanges () {
    yield takeLatest(Actions.SET_LOCATION, fetchWeather);
}

export default function * weatherSaga () {
    yield spawn(watchWeatherChanges);
}