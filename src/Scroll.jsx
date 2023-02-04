import React from "react";

export default function Scroll({ children }) {
  return (
    <div
      style={{ overflow: "scroll", border: "5px solid black", height: "800px" }}
    >
      {children}
    </div>
  );
}
