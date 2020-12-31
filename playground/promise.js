const somePromise = new Promise( ( resolve, reject ) => {
  //todo: setTimeout is Pending
  setTimeout( () => {
    //todo: fullfilled - success
    resolve( 'hey! it worked' );

    //todo: rejected - error
    // reject( 'it did not worked' );
  }, 4000 );
} );

console.log(somePromise);

somePromise
  .then( ( mess ) => {
    console.log( 'Fullfilled - success: ', mess );
  }, ( err ) => {
    console.log( 'Rejected - err: ', err );
  } );


//
somePromise
  .then( ( mess ) => {
    console.log( 'Fullfilled - success: ', mess );
  } )
  .catch( ( err ) => {
    console.log( 'Rejected - err: ', err );
  } );