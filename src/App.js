import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";

import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";

function App() {
  const [width, setwidth] = useState(window.innerWidth);

  function handleResize() {
    setwidth(window.innerWidth);
  }

  useEffect(() => {
    handleResize();
  }, [width]);
  window.addEventListener("resize", handleResize);
  return (
    <Router>
      <div className="App">
        <Nav show={width > 768 ? true : false} />
        <Wrapper />
      </div>
    </Router>
  );
}

export default App;
