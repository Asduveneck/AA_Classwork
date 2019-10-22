import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.jsx'; // Is this necessary?

document.addEventListener("DOMContentLoaded",  () => {
  const root = document.getElementById("root");
  // ReactDOM.render( <h1>React is working</h1> , root );
  ReactDOM.render( <Clock/> , root );

})

