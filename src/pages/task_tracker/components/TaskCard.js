import React from "react";

export default function TaskCard({
  name,
  date,
  status,
  description,
  images,
  favorite,
}) {
  return (
    <div className="bg-white py-2 px-3 shadow rounded mt-4 task-card">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="float-left font-weight-bold ">
          <span className="blue-grey-text title">{name}</span>
        </span>
        <small className="float-right text-black-50">{status}</small>
      </div>
      <p className="grey-text description">
        <small>{description}</small>
      </p>
      {images &&
        images.map((item, index) => {
          return (
            <img
              src={item}
              key={index}
              width="32px"
              height="32px"
              className="rounded-pill mx-1"
            />
          );
        })}
      <div className="mt-3 clearfix">
        <small className="text-black-50 float-left">{date}</small>
        {favorite ? (
          <i class="fas fa-star float-right yellow-text"></i>
        ) : (
          <i class="far fa-star float-right yellow-text"></i>
        )}
      </div>
    </div>
  );
}
