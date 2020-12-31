const request = require( 'request' );

geocodeAddress = ( address, callback ) => {
  let encodedAddress = encodeURIComponent( address );
  let decodeAddress = decodeURIComponent( address );
  request( {
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s&address=${ address }`,
    json: true
  }, ( err, res, body ) => {
    /**
     * todo: handle error
     * khong ket noi toi server 
     * sai dia chi zipcode : status "ZERO_RESULTS"
     * "OK"
     */
    if ( err ) {
      callback( 'unable to connect to Google server', undefined );
    } else if ( body.status === "ZERO_RESULTS" ) {
      callback( 'address not found', undefined );
    } else if ( body.status === 'OK' ) {
      // console.log( JSON.stringify( body.results[ 0 ].formatted_address, undefined, 2 ) );
      callback( undefined, {
        'Address': body.results[ 0 ].formatted_address,
        'Latitude': body.results[ 0 ].geometry.location.lat,
        'Longitude': body.results[ 0 ].geometry.location.lng,
      } );
    }
  } );
};

module.exports.geocodeAddress = geocodeAddress;