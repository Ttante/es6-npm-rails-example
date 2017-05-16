module.exports = {
  test1Log: function () {
    console.log('hello again from test1.js!');
  }
}

window.onload = () => {
  let wrap = document.querySelector('#wrap');
  wrap.innerHTML = "Text from test1.js!";
  wrap.innerHTML = "Build script is working!!";
  wrap.innerHTML = "onchange is working!!";
}