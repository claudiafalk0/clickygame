import React from "react";
import "./style.css";

function ImagesCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.changeClick(props.id)} className='image'/>
      </div>
    </div>
  );
}

export default ImagesCard;
