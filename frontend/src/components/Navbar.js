import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar'

export default function Navbar() {
    const [navState, setNavState] = useState(false);
    console.log(navState)
    function toggleNav() {

        setNavState(!navState);
        console.log(navState)
    } 

  return (
    <>
    
        <nav>
            {/* LOGO */}
            <a href="">
                <img src="" alt="" />
            </a>

            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/recommend">Recommend</a></li>

                <div className="dropdown">
                    <li className='dropdown-el'>
                        <span>Community</span>
                        {/* <i className="ri-arrow-down-s-line"></i> */}
                    </li>

                    <div className='dropdown-content'>
                        <a href="/forums">Forums</a>
                        <a href="/polls">Polls</a>
                    </div>
                </div>
            </ul>

            <div className="searchbox">
                <input type="text" placeholder='Search...' />
                <button className='search-btn'>
                    {/* <i></i> */}
                </button>
            </div>

            {/* if user */}


{/*  ${navState ? 'active' : ''} */}
            <div className={`hamburger-menu ${navState ? "active" : ""}`} onClick={toggleNav}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

        </nav>

        <Sidebar className={`${navState ? "open" : "closed"}`}  />
    </>


  )
}
