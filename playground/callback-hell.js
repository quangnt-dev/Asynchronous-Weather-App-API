/**
 * 
 */

getSum = ( a, b, callback ) => {
  setTimeout( () => {
    if ( typeof a !== 'number' || typeof b !== 'number' ) {
      callback( 'syntax error', undefined );
    } else {
      callback( undefined, {
        sum: a + b
      } );
    }
  }, 1000 );
};


// !this is callback Hellllllllllllllll!
getSum( 1, 2, ( err, result ) => {
  if ( err ) {
    console.log( err );
  } else {
    getSum( result.sum, 3, ( err, result ) => {
      if ( err ) {
        console.log( err );
      } else {
        getSum( result.sum, 4, ( err, result ) => {
          if ( err ) {
            console.log( err );
          } else {
            getSum( result.sum, 5, ( err, result ) => {
              if ( err ) {
                console.log( err );
              } else {
                getSum( result.sum, 6, ( err, result ) => {
                  if ( err ) {
                    console.log( err );
                  } else {
                    getSum( result.sum, 7, ( err, result ) => {
                      if ( err ) {
                        console.log( err );
                      } else {
                        getSum( result.sum, 8, ( err, result ) => {
                          if ( err ) {
                            console.log( err );
                          } else {
                            getSum( result.sum, 9, ( err, result ) => {
                              if ( err ) {
                                console.log( err );
                              } else {
                                console.log( result );
                              }
                            } );
                          }
                        } );
                      }
                    } );
                  }
                } );
              }
            } );
          }
        } );
      }
    } );
  }
} );