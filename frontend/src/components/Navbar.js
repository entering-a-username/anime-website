import React, { useEffect } from 'react'
import { useState } from 'react'
import {Link, useLocation} from "react-router-dom"
import Sidebar from './Sidebar'
import Login from './Login'
import Signup from './Signup'

import { RiMoonClearLine, RiSunLine, RiUserFill, RiSearch2Line, RiArrowDownSLine, RiMoonLine } from '@remixicon/react'

export default function Navbar() {
    const [navState, setNavState] = useState(false);
    function toggleNav() {
        setNavState(!navState);
    }

    const [searchState, setSearchState] = useState(false);
    function toggleSearch() {
        setSearchState(!searchState);
    }

    const [themeState, setThemeState] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        // false = light mode
        return savedTheme ? JSON.parse(savedTheme) : false;
    });
    function toggleTheme() {
        setThemeState(previousTheme => {
            const newTheme = !previousTheme;
            localStorage.setItem("theme", JSON.stringify(newTheme));
            return newTheme;
        });
    }

    useEffect(() => {
        if (themeState) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [themeState])

    // useLocation hook
    const location = useLocation();

    const links = [
        {
            name: "Home", path: "/",
        },
        {
            name: "Browse", path: "/browse",
        },
        {
            name: "Recommend", path: "/recommend",
        }
    ]

  return (
    <>
    
        <nav>
            {/* LOGO */}
            <Link to="/">
                <span className='logo-span'>Animanga</span>
            </Link>

            <ul>
                { links.map(link => (
                      <Link to={link.path} className={`nav-link ${location.pathname === link.path ? "active" : ""}`} key={link.name}>
                        <li className='nav-link'>{link.name}</li>
                      </Link>
                )) }
                

                <div className="dropdown">
                    <li className='dropdown-el'>
                        <span>Community</span>
                        <RiArrowDownSLine size={18} />
                    </li>

                    <div className='dropdown-content'>
                        <Link to="/forums" className={`${location.pathname == "/forums" ? "active" : ""}`}>Forums</Link>
                        <Link to="/polls" className={`${location.pathname == "/polls" ? "active" : ""}`}>Polls</Link>
                    </div>
                </div>
            </ul>

           

            <div className="icons">
                <div className={`searchbox ${searchState ? "active" : ""}`}>
                        <RiSearch2Line className="search-icon" onClick={toggleSearch} />
                        <input type="text" placeholder='Search...' />
                </div>

                {(localStorage.getItem("theme") == "false" ? <RiMoonLine onClick={toggleTheme} /> : <RiSunLine onClick={toggleTheme} /> )}
                
                <div className='user-div'>
                    <RiUserFill className="dropdown-el" />

                    <div className='dropdown-content'>
                        <Link to="/login" element={<Login />} className={`${location.pathname == "/login" ? "active" : ""}`}>Login</Link>
                        <Link to="/signup" element={<Signup />} className={`${location.pathname == "/signup" ? "active" : ""}`}>Signup</Link>
                    </div>
                </div>
            
            </div>

            {/* if user */}


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
