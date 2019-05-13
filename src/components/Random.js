import React from "react";

const Random = ({ gifsRandom, onRandomSubmit }) => {
  return (
    <div className="ui center aligned segment" style={{ marginTop: "40px" }}>
      <h2>
        Giphy Randomizer <i className="random icon" />
      </h2>
      <button className="ui button" onClick={onRandomSubmit}>
        I'm feeling Lucky
      </button>

      <div style={{ marginTop: "20px" }}>
        <a href={gifsRandom}>
          <img
            className="ui centered medium image"
            src={gifsRandom}
            alt={gifsRandom}
          />
        </a>
      </div>
    </div>
  );
};

export default Random;
