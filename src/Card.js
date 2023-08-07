import React from "react";

const Card = (props) => {
  return (
    <div
      style={{
        maxWidth: "345px",
        width: "90%",
        minHeight: "400px",
        padding: "10px",
        border: "1px solid #171717",
      }}
    >
      <div
        style={{
          width: "323.3px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "100%", height: "323.3px", objectFit: "cover" }}
          src={props.img}
          alt="not found"
        />
      </div>
      <h2>{props.data}</h2>
      <h3>Calories : {props.cal}</h3>
      <div></div>
    </div>
  );
};

export default Card;
