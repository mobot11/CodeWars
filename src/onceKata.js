/*Description:

You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.

Subsequent calls to the resulting function should have no effect (and should return undefined).*/

function once(fn) {
  var call = true;
  return function() {
    if (call) {
      call=false;
      return fn.apply(this,arguments);
    }
    return undefined;
  };
}
var test = once(console.log);
test('hello world');
test('hello girld');
