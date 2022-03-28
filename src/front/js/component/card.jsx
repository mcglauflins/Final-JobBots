import React from "react";

export const GenericCard = (props) => {
  return (
    <div className="col-sm-3">
      <div class="card">
        <img src={props.imgSrc} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.cardTitle}</h5>
          <p class="card-text">
            <ul>{props.cardList}</ul>
          </p>
          <a href={props.cardHREF} class="btn btn-primary">
            Learn More!
          </a>
        </div>
      </div>
    </div>
  );
};
