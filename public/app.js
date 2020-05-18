"use strict";

/**
 * 
 */
var continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
var helloContinents = Array.from(continents, c => "Hello ".concat(c));
var message = helloContinents.join(' ');
var element = /*#__PURE__*/React.createElement("div", {
  title: "Outer div"
}, /*#__PURE__*/React.createElement("h1", {
  className: "header"
}, " ", message, " "));
ReactDOM.render(element, document.getElementById('contents'));