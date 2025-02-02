var p = new Promise(function(resolve, reject) {
  foo.bar(); // foo is not defined, so error
  resolve(42);
  reject('oops');
});

p.then(
  function fulfilled(){
    // never gets here :(
  },
  function rejected(err) {
    // The JS exception that occurs from foo.bar() becomes a Promise rejection that you can catch and respond to.
    console.error(err);
  }
);
