function once(fn) {
  var call = true;
  return function() {
    if (call) {
      call=false;
      return fn.apply(this,arguments);
    }
  };
}
