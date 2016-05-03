'use strict';

/*module.exports=function(){
  var element=document.createElement('h1');
    element.innerHTML='Hello world';
  console.log("zhe ");
    return element;
};*/
import React from 'react';
import ReactDOM from 'react-dom';
import './css/test.css';
/*
export default class Hello extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}*/

/*require('react');
var ReactDOM=require('react-dom');
require('./css/test.css');*/


ReactDOM.render(
    <div className="wrapper">
        <h1>Hello, world@!@!!</h1>
    </div>,

    document.getElementById('example')
);