import "./styles/main.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Browse from "./components/Browse";
import Recommend from "./components/Recommend";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import AnimangaComponent from "./components/AnimangaComponent";
import Community from "./components/Community";


function App() {
  // ?????????// one /user check??
  // one user check or for every route

  const [user, setUser] = useState(null);
  

  function extractCookie(cookie) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${cookie}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  const jwt = extractCookie("jwt");
  console.log(jwt)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log("happen")
        const res = await fetch("http://localhost:3050/user", {
          method: "GET",
          credentials: "include",
          headers: {
            'Authorization': `${jwt}`,
          }
        });
        console.log(res)
        if (!res.ok) {

        } 

        const data = await res.json();
        console.log(data)

        if (data._id) {
          setUser(data._id);
        }

      } catch (err) {

      }
    }

    fetchUser();
  }, []);

  console.log(user)

  async function logout() {
    await fetch("http://localhost:3050/logout", {
      method: "GET", credentials: "include",
    }).then(res => res.json())
    .then(() => {
      setUser(null);
      window.location.href = "/";
    })
  }
  
  return (
    <>
      <Router>
        <Navbar user={user} logout={logout} />
        {/* <Header />
        <NewFeature /> */}

        <main>
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/recommend" element={<Recommend />} />
            <Route path="/community" element={<Community />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile user={user} />} />
            {/* <Route path="/profile/:username" element={<Profile />} /> */}
            <Route path="/edit-profile" element={<EditProfile user={user} />} />
            <Route path="/:type/:id" element={<AnimangaComponent /> } />

          </Routes>
          {/* <Browse /> */}

          {/* <div className="community">
            <Forums />
            <Polls />

          </div> */}

        </main>

        <Footer />
      </Router>

      {/* SCROLLER */}
      {/* ANIMANG QUIZ?> */}

    </>
  );
}

export default App;
