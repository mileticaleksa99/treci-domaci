import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './nav/Nav.js';
import Background from "./background/Background";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
        <Router>
            <Nav />
            <Background />
            <Routes>
                <Route path="/" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </Router>
    </>
  );
}

export default App;
