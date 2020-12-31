const geocode = require( './geocode/geocode' ); //todo: Google
const weather = require( './weather/weather' ); //todo: DarkSky
const yargs = require( 'yargs' );

const argv = yargs.options( {
  a: {
    demand: true,
    alias: 'address',
    describe: 'enter your target address',
    string: true,
  }
} ).help().alias( 'help', 'h' ).argv;

const { address } = argv;

geocode.geocodeAddress( address, ( error, result ) => {
  if ( error ) {
    console.log( error );
  } else {
    console.log( result );
    weather.getWeather( result.Latitude, result.Longitude, ( err, kq ) => {
      if ( err ) {
        console.log( err );
      } else {
        console.log( kq );
      }
    } );
  }
} );
