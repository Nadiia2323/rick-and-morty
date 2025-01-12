import React from "react";

function Card({ character, callback }) {
  return (
    <div key={character.id} className="card" id="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="card-img" src={character.image} alt="" />
        </div>
        <div className="flip-card-back">
          <h3>{character.name}</h3>
          <button className="closebutton" onClick={() => callback(character)}>
            more info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
