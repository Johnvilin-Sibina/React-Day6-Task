import React from "react";

const CareerCard = ({element,index}) => {
  return (
    <>
      <div className="col-md-4 mt-5" key={index}>
        <div className="card h-100">
          <img
            src={element.image}
            style={{ height: "150px" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              <b>{element.course}</b>
            </p>
            <p className="card-text">{element.language}</p>
            <hr />
            <p className="card-text">{element.support1}</p>
            <p className="card-text">{element.support2}</p>
            <p className="card-text">{element.support3}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerCard;
