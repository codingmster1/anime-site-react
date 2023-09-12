import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


import "./Search.css";

function Search({ searchRedirect }) {
  return (
    <div className="container">
      <div className="row">
        <form className="search__form" onSubmit={searchRedirect}>
          <input
            type="text"
            className="search__box"
            placeholder="Find Anime"
            name="search__term"
            required
          />
          <button className="search__button">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" bounce size="xl" style={{color: "#f37e12",}} 
          className="search__button--icon"/>
           
          </button>
        </form>
        </div>
    </div>
  );
}

export default Search;