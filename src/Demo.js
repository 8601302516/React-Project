import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo = ({name}) => {
	return <div className = "maindiv_style">
         <h1> Hello Worlds {name} </h1>
         <p>welcome to my channel</p>
         </div>
}

export default Demo;