import "./styles/main.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Browse from "./components/Browse";
import Recommend from "./components/Recommend";
import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {
  return (
    <>
      <Router>
        <Navbar />
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
