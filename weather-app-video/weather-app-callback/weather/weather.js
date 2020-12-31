const request = require( 'request' );

getWeather = ( lat, lng, callback ) => {
  request( {
    url: `https://api.darksky.net/forecast/b8164e69c9f7fbc654f20d2d6381d1fc/${ lat },${ lng }`,
    json: true,
  }, ( err, res, body ) => {
    if ( err ) {
      callback( 'unable to connect to DarkSky server', undefined );
    } else if ( body.code === 400 ) {
      callback( 'NOT FOUND LOCATION', undefined );
    } else {
      callback( undefined, {
        "summary": body.currently.summary,
        "icon": body.currently.icon,
        "temperature": body.currently.temperature
      } );
    }
  } );
};

module.exports.getWeather = getWeather;