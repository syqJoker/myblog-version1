'use strict';
//var component=require('./component.jsx');
import React from 'react';
import ReactDOM from 'react-dom';
//import RootComponent from './component.jsx';

//require('react');
var RootComponent=require('./component.jsx');
/*import {Clog} from './demo2.js';
Clog();*/
/*function main() {
    React.render(<Hello />, document.getElementById('app'));
}
main();*/
/*define(['./demo2'],function(Es){
    console.log(123);

});*/


//document.body.appendChild(component());

if(module.hot) {
    // accept update of dependency
    module.hot.accept();
    console.log('热部署开始')
}

