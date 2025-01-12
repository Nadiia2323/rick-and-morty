import React from "react";
import MyButton from "./MyButton";

function Card({ character, callback }) {
  // console.log('callback :>> ', callback);
  return (
    <div key={character.id} className="card" id="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="card-img" src={character.image} alt="" />
        </div>
        <div className="flip-card-back">
          <h3>{character.name}</h3>
          <button onClick={()=>callback(character)}>more info</button>
          {/* <MyButton onClick={()=>callback() } /> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
