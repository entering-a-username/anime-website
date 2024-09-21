import "./styles/main.scss";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import NewFeature from "./components/NewFeature";
import Browse from "./components/Browse";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <NewFeature />

      <main>
        <Browse />

      </main>

      <Footer />

      {/* SCROLLER */}
      {/* ANIMANG QUIZ?> */}

    </>
  );
}

export default App;
