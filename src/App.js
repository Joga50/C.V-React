import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NavBar, Footer, Home, Contact, Portfolio } from "./components/index";

function App() {
  const [navLinkColor, setNavLinkColor] = React.useState(0);
  const [theme, setTheme] = React.useState(true);

  return (
    <>
      <Router>
        <NavBar
          theme={theme}
          setTheme={setTheme}
          navLinkColor={navLinkColor}
          setNavLinkColor={setNavLinkColor}
        />
        <Routes>
          {/* <Route path="/portfolio" element={<Portfolio theme={theme} />} /> */}
          <Route path="/contact" element={<Contact theme={theme} />} />
          <Route path="/" element={<Home theme={theme} />} />
        </Routes>
      </Router>
      <Footer navLinkColor={navLinkColor} setNavLinkColor={setNavLinkColor} />
    </>
  );
}

export default App;
