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


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // fetch("/user", {
    //   method: "GET",
    //   credentials: "include", // Include cookies if using sessions
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.user) {
    //       setUser(data.user);  // Set the user if authenticated
    //     }
    //   })
    const fetchUser = async () => {
      try {
        console.log("happen")
        const res = await fetch("/user")
        if (!res.ok) {

        } 

        const data = await res.json();
        console.log(data)

        if (data.user) {
          setUser(data.user);
        }
      } catch (err) {

      }
    }

    fetchUser()
  }, []);

  async function logout() {
    await fetch("/logout", {
      method: "GET", credentials: "include",
    }).then(res => res.json())
    .then(() => {
      setUser(null);
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
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/recommend" element={<Recommend />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />


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
