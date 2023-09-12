import React, { useEffect, useState } from "react";
import Search from "./ui/Search";
import Anime from "./ui/Anime";
import Loading from "./ui/Loading";
import mainImg from '../assets/skull-knight.gif';
import "./App.css";

function Landing({ searchRedirect }) {
  const [trendingList, setTrending] = useState([]);

  const [popularList, setPopular] = useState([]);

  const trending = "TRENDING_DESC";

  const popular = "POPULARITY_DESC";

  async function getData(option) {
    const variables = {
      page: 1,
      perPage: 8,
    };


    const query = `
    query ($id: Int, $page: Int, $perPage: Int, $search: String) {
      Page(page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media(id: $id, search: $search, type: ANIME, isAdult: false, sort: ${option}) {
          id
          title {
            english
          }
          coverImage {
            large
          }
          popularity
          trending
          description
          siteUrl
          startDate {
            year
            month
            day
          }
        }
      }
    }
    
  `;

   
    const url = "https://graphql.anilist.co";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `${query}`,
        variables: variables,
      }),
    };

    function handleResponse(response) {
      return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
      });
    }

    function handleError(error) {
      alert("Error, check console");
      console.error(error);
    }

    let data = await fetch(url, options)
      .then(handleResponse)
      .catch(handleError);

    if (option === "TRENDING_DESC") {
      setTrending(data.data.Page.media);
    } else if (option === "POPULARITY_DESC") {
      setPopular(data.data.Page.media);
    }

    return data.data.Page.media;
  }

  useEffect(() => {
    setTimeout(() => {
      getData(trending);
    }, 1000);

    setTimeout(() => {
      getData(popular);
    }, 1000);
  }, []);

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
        

        <h1 className="title">The best one-stop anime search engine.</h1>
      </div>

      <section id="search">
        <Search searchRedirect={searchRedirect} />
      </section>

      <section id="trending">
        <div className="container">
          <div className="row">
            <h2 className="subtitle">Trending now</h2>
            <div className="anime__list trending__list">
              {trendingList.length > 0 ? (
                trendingList.map((anime) => (
                  <Anime
                    title={anime.title.english}
                    cover={anime.coverImage.large}
                    url={anime.siteUrl}
                    id={anime.id}
                    key={anime.id}
                  />
                ))
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="popular">
        <div className="container">
          <div className="row">
            <h2 className="subtitle">Popular</h2>
            <div className="anime__list popular__list">
              {popularList.length > 0 ? (
                popularList.map((anime) => (
                  <Anime
                    title={anime.title.english}
                    cover={anime.coverImage.large}
                    url={anime.siteUrl}
                    id={anime.id}
                    key={anime.id}
                  />
                ))
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;