import React from "react";

const Header = (prop) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1280px",
        margin: "auto",
        padding: "15px 15px",
      }}
    >
      <h2 style={{ color: "#fff" }}>FoodCourt</h2>

      <input
        onChange={prop.fun}
        placeholder="Search..."
        style={{
          backgroundColor: "transparent",
          border: "1px solid #fff",
          height: "40px",
          padding: "0 15px",
          color: "#fff",
          borderRadius: "20px",
          width: "250px",
          outline: "0",
        }}
      />
    </div>
  );
};

export default Header;
