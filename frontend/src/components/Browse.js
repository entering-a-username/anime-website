import React, {useState, useEffect} from 'react'
import {RiSearchLine, RiEditLine, RiBookmarkLine} from "@remixicon/react"
import { useLocation } from 'react-router-dom';

export default function Browse() {

  const [fetchedData, setFetchedData] = useState([]);
  const [resultName, setResultName] = useState(null);
  const [inputValue, setInputValue] = useState(null);

  const location = useLocation();

  const getQueryParams = () => {
    const params = new URLSearchParams(location.search);
    return params.get('searchQuery');
  }


  useEffect(() => {
    const searchQuery = getQueryParams();

    if (searchQuery) {
      fetchData(searchQuery);
      setInputValue(searchQuery);
      setResultName(searchQuery);
    }

  }, [location.search]);

  // loading screen until data is sent

  async function submit(e) {
    e.preventDefault();
    const animanga = e.target.animanga.value;
    fetchData(animanga);
    setInputValue(animanga);
    setResultName(animanga);
  }

  async function fetchData(animanga) {

    try {
      const res = await fetch('http://localhost:3050/search', {
        method: 'POST',
        body: JSON.stringify({ animanga }),
        headers: { 'Content-Type': 'application/json' },
        // credentials: "include",
      });

      const data = await res.json();

      await setFetchedData(data);


    } catch (err) {
      console.error(err);
    }
  }


  return (
    <>
        <main className="browse">
            <h1>Search for your favorite animanga by filtering</h1>
    
    {/* form */}
    {/* flash for adding to watchlist? */}
    {/* default cards are trenindg? */}
    {/* search icon not responsive */}
            <form onSubmit={submit}>
                <div className="">
                    <input type="text" name="animanga" placeholder={inputValue ? inputValue : "Search..."} />
                    <RiSearchLine className="search-icon" />
                </div>

                <button>Filter</button>    
            </form>

            <div className="filter-div">

            </div>

            {
              resultName && <h1>Results for {resultName}</h1>
            }


            <div className="cards">

              {

                
                fetchedData != null ?
                  fetchedData.map(item => (
                    // <h1>t</h1>

                    <div className="card" key={item.mal_id}>
                      <img src={item.img} alt={item.title} />

                      <div className="info-div">
                          <h1>{item.title}</h1>
                          <h2>{item.genres.slice(0, 3).map(genre => (
                              `${genre.name} `
                          ))}</h2>
                      </div>
                        
                      <div className="hover-card">
                          <h1>{item.title}</h1>
                          <span>{Math.round(item.score)} ★ ({Math.round(item.scoredBy / 10)})</span>
                          <p>{item.synopsis?.substring(0, 160)}...</p>
                          <div className="functional-div">
                              <RiBookmarkLine size={18} color="" />
                              <RiEditLine size={18} />
                          </div>
                      </div>
                    </div>
                  )) : "null"
              }
            

            </div>

        </main>
    </>
  )
}
