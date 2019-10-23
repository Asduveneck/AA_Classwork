import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.jsx'; // Is this necessary?
import Tabs from './tabs.jsx'; 
// Fill in tab title here...

const tabContent = [ // Now our props
  { title: "一", content: "FAKE NEWS BOIS" },
  { title: "二", content: "Even more FAKE NEWS BOIS" },
  { title: "三", content: "Associated Press & Reuters" }
]; 

  

function Root() {
  return (
    <div>
      <Clock/> 
      <Tabs tabContent = {tabContent}/> 
    </div>
  )
};


document.addEventListener("DOMContentLoaded",  () => {
  const root = document.getElementById("root");
  // ReactDOM.render( <h1>React is working</h1> , root );
  ReactDOM.render( <Root/> , root );

})

