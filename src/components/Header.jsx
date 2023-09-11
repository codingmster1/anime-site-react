import { useRef } from "react";
import "App.css";
import mainImg from '../assets/skull-knight.gif';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header({ searchNewAnime }) {
  const searchResultRef = useRef(null);

  const handleSubmit = (e) => {
    if (e.key === "Enter" || e.type === "mousedown") {
      const inputValue = searchResultRef.current.value
      searchNewAnime(inputValue);
      
    }
  };


  const handleClick = () => {
    const inputValue = searchResultRef.current.value
    searchNewAnime(inputValue)
    console.log('clicked');
  }
  return (
    <>
    <div className="header__container">
      
        <figure className="header__img--wrapper">
          <img
            src={mainImg}
            className="header__img"
            alt=""
          />
        </figure>
      
      <h1 className="title">All The Anime, One Search Engine</h1>
    </div>

    <div className="container">
      <div className="row">
        <form className="search__form">
          <input
            type="text"
            ref={searchResultRef}
            className="search__box"
            placeholder="Find Anime"
            name="search__term"
            onKeyDown={(e) => handleSubmit(e)}
            required
          />
          <button className="search__button">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" 
          className="search__button--icon"
          onClick={handleClick}/>
           
          </button>
        </form>
        </div>
    </div>
                  


    </>
  );
}