import React from "react";

export default function SummaryCard({
  icon,
  title,
  subtitle,
  value,
  textStyle = "text-default",
}) {
  return (
    <div className="bg-white py-2 px-3 shadow rounded mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <span className="float-left font-weight-bold ">
          <i className={`${icon} ${textStyle} d-inline-block mr-2 `}></i>
          <span className="blue-grey-text">{title}</span>
        </span>
        <small className="float-right text-black-50">{subtitle}</small>
      </div>
      <h3 className={`${textStyle} mt-3`}>{value}</h3>
    </div>
  );
}
