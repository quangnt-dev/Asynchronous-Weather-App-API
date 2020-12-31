function getData ( callback ) {
  setTimeout( () => {
    console.log( 'data is gotten' );
    callback();
  }, 2000 );
}

function showData () {
  console.log( 'show data' );
}

getData( showData );
