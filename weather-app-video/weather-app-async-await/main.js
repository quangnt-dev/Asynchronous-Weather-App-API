const yargs = require( 'yargs' );
const { getStatus } = require( './services/DarkSkyApi' );
const { getLocation } = require( './services/GoogleApi' );

const argv = yargs.options( {
  a: {
    demand: true,
    alias: 'address',
    describe: 'enter your target address',
    string: true,
  }
} ).help().alias( 'help', 'h' ).argv;

const { address } = argv;

const getWeather = async ( addr ) => {
  const location = await getLocation( addr );
  const status = await getStatus( location.lat, location.lng );
  return { location, status };
};

getWeather( address )
  .then( res => {
    console.log( res );
  } )
  .catch( err => {
    console.log( err );
  } );