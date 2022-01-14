import React from "react";
import "./logo.css";

function Logo() {
  let name1 = "Bing";
  let name2 = "Bong";
  return (
    <div className="logo-div">
      <h2 className="logo-name">
        {name1} {name2}
      </h2>
    </div>
  );
}

export default Logo;
