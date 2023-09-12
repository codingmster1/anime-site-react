import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../src/App.css"

function Loading() {
  return (
    <div className="loading">
      <FontAwesomeIcon icon="fa-spinner" className="fa-solid fa-spinner" />
    </div>
  );
}

export default Loading;