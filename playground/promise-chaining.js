const add = ( a, b ) => {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      if ( typeof a !== 'number' || typeof b !== 'number' ) {
        reject( 'Arguments must be a number' );
      } else {
        resolve( a + b );
      }
    } ), 2000;
  } );
};

// todo
add( 1, 2 )
  .then( ( result ) => {
    return add( result, 3 );
  } )
  .then( ( result ) => {
    return add( result, 4 );
  } )
  .then( ( result ) => {
    return add( result, 5 );
  } )
  .then( ( result ) => {
    return add( result, 6 );
  } )
  .then( ( result ) => {
    return add( result, 7 );
  } ).then( ( result ) => {
    return add( result, 8 );
  } ).then( ( results ) => {
    return add( results, 9 );
  } )
  .then( ( result ) => {
    console.log( result );
  } )
  .catch( ( err ) => {
    console.log( err );
  } );