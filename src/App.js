import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import About from "./components/aboutUs/About";
import Membership from "./components/membership/Membership";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/join" element={<Membership />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
