const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/397e2d873365c8df122524e26d65f886/' + latitude + ',' + longitude

    request({ url, json: true}, (error, {body}) => { 
        if (error){
            callback('Unable to connect to weather service', undefined)
        } 
        else if (body.error) {
            callback(body.error, undefined)
        }
        else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress F out. This high today is ' + body.daily.data[0].temperatureHigh + ' degree F with a low of ' + body.daily.data[0].temperatureLow + ' degree F. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast  