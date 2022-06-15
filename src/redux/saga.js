import { all, spawn } from "redux-saga/effects";
import weatherSaga from "./weather/saga";

export function * rootSaga() {
    try {
        yield all([
            weatherSaga()
        ])
    } finally {
        // sagasLoaded = true;
    }
}