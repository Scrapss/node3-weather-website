const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/34cae8c702718dcb6d09709109c5465c/'+ latitude + ',' + longitude + '?units=si'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to forecast services', undefined)
        } else if (body.error) {
            callback('Could not find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees outside. the high today is ' + body.daily.data[0].temperatureHigh + ' with a low of  ' + body.daily.data[0].temperatureLow + '. there is '+ body.currently.precipProbability + ' % chances of precipitations.')
        }
    })
}

module.exports = forecast