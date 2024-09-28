import React from 'react'
export default function Sidebar({ className }) {
  return (
    <>
    
            <div className={`sidebar ${className}`}>
                <span className='logo-span'>Animanga</span>

                <div className="searchbox">
                    <input type="text" placeholder='Search...' />
                    <button className='search-btn'></button>
                </div>

                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/recommend">Recommend</a></li>
                    <li><a href="/forums">Forums</a></li>
                    <li><a href="/polls">Polls</a></li>
                </ul>

                
            </div>
    </>
  )
}
