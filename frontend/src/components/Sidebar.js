import React from 'react'
export default function Sidebar({ className, user, logout }) {

  async function search(e) {
    e.preventDefault();

    window.location.href = `/browse?searchQuery=${encodeURIComponent(e.target.search.value)}`
  }
  
  return (
    <>
    
            <div className={`sidebar ${className}`}>
                <span className='logo-span'>Animanga</span>

                <form onSubmit={search}>
                  <div className="searchbox">
                      <input type="text" name="search" placeholder='Search...' />
                      
                  </div>
                </form>

                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/browse">Browse</a></li>
                    <li><a href="/recommend">Recommend</a></li>
                    <li><a href="/forums">Forums</a></li>
                    <li><a href="/polls">Polls</a></li>

                    {user ? (
                      <>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/settings">Settings</a></li>
                        <li><a href="/user" onClick={logout}>Logout</a></li>
                      </>
                    ) : (
                      <>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/signup">Signup</a></li>
                      </>
                    )}
                </ul>
                
            </div>
    </>
  )
}
