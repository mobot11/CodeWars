"use strict";

var once = function once(fn) {

  return fn;
};

once.o = {};

once.prototype.o.counter = 1;

console.log(once.prototype.o.counter);