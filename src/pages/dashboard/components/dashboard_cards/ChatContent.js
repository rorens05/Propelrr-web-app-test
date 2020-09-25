import React from "react";

const OWN_STYLE =
  "bg-warning px-3 py-1 rounded align-text-start mx-1 own-style";
const USER_STYLE = "bg-info px-3 py-1 rounded align-text-start mx-1";

export default function ChatContent({ image, own, value, user }) {
  return (
    <div className="d-flex mt-3 ">
      {!own && (
        <img
          src={image}
          width="32px"
          height="32px"
          className="rounded-pill mx-1"
        />
      )}
      <div className={own ? OWN_STYLE : USER_STYLE} color="info" size="sm">
        <small className="text-white ">
          <b>{user}</b> {value}
        </small>
      </div>
    </div>
  );
}
