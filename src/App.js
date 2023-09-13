import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css";
import Results from "./pages/Results";
import { useState } from "react";
import Info from "./pages/Info";

function App() {
  const navigate = useNavigate();

  const [search, setSearch] = useState([]);

  async function searchRedirect(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form); 

   
    const searchTerm = formData.get("search__term");
    

    navigate("/results");

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
        media(id: $id, search: $search, type: ANIME, isAdult: false) {
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

    
    const variables = {
      search: `${searchTerm}`,
      page: 1,
      perPage: 5,
    };

    
    const url = "https://graphql.anilist.co";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    };

    // API code to retrieve data and handle errors
    function handleResponse(response) {
      return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
      });
    }

    function handleError(error) {
      alert("Error, check console");
      console.error(error);
    }

    // Make the HTTP Api request
    let data = await fetch(url, options)
      .then(handleResponse)
      .catch(handleError);

    setSearch(data.data.Page.media);
  }

  return (
    <div className="app">
      
        <Routes>
          <Route path="/" element={<Home searchRedirect={searchRedirect} />} />
          <Route
            path="/results"
            element={
              <Results searchRedirect={searchRedirect} search={search} />
            }
          />
          <Route
            path="/results/:id"
            element={<Info searchRedirect={searchRedirect} />}
          />
        </Routes>
     
    </div>
  );
}

export default App;
