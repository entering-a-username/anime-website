import "./styles/main.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Browse from "./components/Browse";


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
