const axios = require( 'axios' );
const { config } = require( './../config' );

const getStatus = ( lat, lng ) => {
  return axios.get(
    `${ config.darksky.url }/${ config.darksky.key }/${ lat },${ lng }`
  )
    .then( res => {
      // console.log( res );
      // todo : fullfill - resolve - success
      return Promise.resolve( {
        temperature: res.data.currently.temperature,
        summary: res.data.currently.summary,
        icon: res.data.currently.icon,
      } );

    } )
    .catch( err => {
      if ( err.code === 'ENOTFOUND' ) {
        return Promise.reject( {
          message: `can not connect to ${ config.darksky.url }`,
          status: 500
        } );
      }
      if ( err.response.status === 400 ) {
        return Promise.reject( {
          ...err.response.data
        } );
      }
      return Promise.reject( err );
    } );
};

module.exports = { getStatus };