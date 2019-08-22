const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ae441cc75ea31e209a0d7b88c74d5f9c/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true }, (error, {body} ) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to finde location.', undefined)           
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' desrees out. there is a ' + body.currently.precipProbability + '% chnce of rain.')
        }

    })
}



module.exports = forecast