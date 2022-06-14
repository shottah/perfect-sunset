# Perfect Sunset

1. [Overview](#overview)
2. [Technologies](#technologies)
    1. [ReactJs](#installation)
    2. [OpenWeatherMap API](#open-weather-map)
3. [Reasoning](#reasoning)
    1. [Wind Speed](#wind-speed)
    2. [Cloud Coverage](#cloud-coverage)
4. [Environment Setup](#environment-setup)
5. [Commands](#commands)

This pet project was inspired by the need for social-minded individuals to maximize the potential of beautiful sunsets in images on Instagram, Facebook, or interpersonal sharing.

## Overview

This SPA allows a user to search for a location by City and Country name. Doing so accesses OpenWeatherMap API to retrieve the current weather for the location.

### Technologies

#### React Js

This web app is written in ReactJs using the standard Javascript flavor.

#### OpenWeatherMap API

This web app uses the OpenWeatherMap API to retrieve the current weather for a given location.

[Visit API Docs](https://openweathermap.org/current)

### Reasoning

The evaluation of the quality of a Sunset is highly opinioned and in this implementation, considers the following factors: wind speed, cloud coverage, air pollution, rainfall, and other factors.

#### Wind Speed

The wind speed is one of more higher weighted factors that is effect the evaluation of the quality of a Sunset. The Beaufort scale is used to categorize the wind speed. *A photographer may need to take many photos, and the wind's speed can drastically change the landscape*

[Read about the Beaufort Scale](https://www.rmets.org/metmatters/beaufort-scale)

#### Cloud Coverage

The cloud coverage is another important factor, since it adds variety and activity to the image. Here is where a measurable degree of opinionated evaluation is needed, for this reason, cloud coverage ranges where `0.45 < x < 0.65` are preferred.

### Environment Setup

`secret.json` is a file that contains the API key for the OpenWeatherMap API

```js
export const API_KEY = "<your-api-key>";
```

### Commands

```sh
yarn install # install dependencies
yarn start # start the app
```
