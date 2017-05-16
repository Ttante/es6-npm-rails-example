(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
'use strict';

var test1 = require('./test1');

$(document).ready(function () {
  test1.test1Log();
  console.log('hello from testLog2');
});
},{"./test1":1}]},{},[1,2]);
