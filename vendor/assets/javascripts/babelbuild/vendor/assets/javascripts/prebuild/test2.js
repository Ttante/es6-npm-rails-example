'use strict';

var test1 = require('./test1');

$(document).ready(function () {
  test1.test1Log();
  console.log('hello from testLog2');
});