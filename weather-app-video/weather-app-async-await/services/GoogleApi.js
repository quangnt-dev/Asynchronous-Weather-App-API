const axios = require( 'axios' );
const { config } = require( './../config' );

const getLocation = ( address ) => {
  return axios.get(
    `${ config.google.url }?key=${ config.google.key }&address=${ address }`
  )
    .then( res => {
      if ( res.data.status === "ZERO_RESULTS" ) {
        return Promise.reject( {
          message: "Address Not Found",
          statusCode: 404
        } );
      }

      // todo: fullfill - resolve - success
      return Promise.resolve( {
        formatted_address: res.data.results[ 0 ].formatted_address,
        lat: res.data.results[ 0 ].geometry.location.lat,
        lng: res.data.results[ 0 ].geometry.location.lng,
      } );
    } )
    .catch( err => {
      if ( err.code === 'ENOTFOUND' ) {
        return Promise.reject( {
          message: `can not connect to ${ config.google.url }`,
          status: 500
        } );
      }
      return Promise.reject( { err } );
    } );
};

module.exports = { getLocation };