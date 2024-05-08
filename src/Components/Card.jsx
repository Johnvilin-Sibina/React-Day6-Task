import React from "react";

const Card = ({ element, index }) => {
  return (
    <div className="col-md-4 mt-5" key={index}>
      <div className="card" style={{ width: "16rem", height: "350px" }}>
        <img
          src={element.image}
          style={{ height: "150px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            <b>{element.description}</b>
          </p>
          <p className="card-text">{element.author}</p>
          <div className="d-flex justify-content-between">
            <span className="card-text">{element.date}</span>
            <span className="card-text">{element.duriation}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
