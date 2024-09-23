import "./styles/main.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Header />
        <NewFeature /> */}

        <Home />
        <main>
          <Routes>
            <Route path="/" element={Home} />
            

            <Route path="/about"></Route>
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
