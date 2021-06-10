const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=b27064e9d86b49ec651f114e40a08d99&query=${latitude},${longitude}`;

    request({ url, json: true }, (error, { body } = {} ) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const { weather_descriptions, temperature, feelslike, cloudcover } = body.current
            callback(undefined, `${weather_descriptions[0]}. It is currently ${temperature}C. It feels like ${feelslike}C. There is ${cloudcover}% cloud cover.`);
        }
    });
}

module.exports = forecast;