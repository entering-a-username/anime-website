import React from 'react'
import {RiSearchLine} from "@remixicon/react"

export default function Browse() {
  return (
    <>
        <main className="browse">
            <h1>Search for your favorite animanga by filtering</h1>
    
    {/* form */}
            <div className="input-div">
                <div className="">
                    <input type="text" />
                    <RiSearchLine className="search-icon" />
                </div>

                <button>Filter</button>    
            </div> 

            <div className="filter-div">

            </div>

        </main>
    </>
  )
}
