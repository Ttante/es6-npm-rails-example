'use strict';

module.exports = {
  test1Log: function test1Log() {
    console.log('hello again from test1.js!');
  }
};

window.onload = function () {
  var wrap = document.querySelector('#wrap');
  wrap.innerHTML = "Text from test1.js!";
  wrap.innerHTML = "Build script is working!!";
  wrap.innerHTML = "onchange is working!!";
};