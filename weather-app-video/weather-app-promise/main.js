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

getLocation( address )
  .then( res => {
    console.log( res );
    return getStatus( res.lat, res.lng );
  } )
  .then( res => {
    console.log( res );
  } )
  .catch( err => {
    console.log( 'tach', err );
  } );

