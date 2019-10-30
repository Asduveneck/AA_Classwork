import React from 'react';
import { Link } from "react-router-dom";

const PokemonIndexItem = (props) => {
  return(
    
    <li key={props.id}> 
      <Link to = {`/pokemon/${props.id}`} >
        {props.name} <img src={props.image_url} alt={props.name} height="69" width="69" />
      </Link>
    
    </li> //nice
    
    
    );
  }
  
  export default PokemonIndexItem