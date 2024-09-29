import React, {useState} from 'react'
import {RiSearchLine} from "@remixicon/react"

export default function Browse() {

  const [fetchedData, setFetchedData] = useState(null);



  async function fetchData(e) {
    e.preventDefault();

    const animanga = e.target.animanga.value;

    try {


      const res = await fetch('http://localhost:3050/search', {
        method: 'POST',
        body: JSON.stringify({ animanga }),
        headers: { 'Content-Type': 'application/json' },
        // credentials: "include",
      });

      const data = await res.json();

      setFetchedData(data);

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
            <form onSubmit={fetchData}>
                <div className="">
                    <input type="text" name="animanga" placeholder='Search...' />
                    <RiSearchLine className="search-icon" />
                </div>

                <button>Filter</button>    
            </form> 

            <div className="filter-div">

            </div>

            <div className="cards">


            

            </div>

        </main>
    </>
  )
}
