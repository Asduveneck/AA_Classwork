import React from "react";
import { Link } from "react-router-dom";

const ItemDetail = (props)=> {
  return(
    <ul>
      <li>
        {props.item.name}
      </li>
      <li>
        {props.item.price}
      </li>
      <li>
       { props.item.happiness}
      </li>
    </ul>
  );
};

export default ItemDetail;