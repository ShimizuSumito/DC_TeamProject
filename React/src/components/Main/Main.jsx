import React from "react";
import Home from "./Home/Home";
import Weather from "./Weather/Weather";
import Nav from "./Nav/Nav";
import{ BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import Timeline from "./Timeline/Timeline";




export default function Main() {
    return(
    <>
    <Nav />
            <Routes>
                <Route path="/Main/Home" element={<Home />} />
                <Route path="/Main/Weather" element={<Weather />} />
                <Route path="/Main/Timeline" element={<Timeline />} />
            </Routes>
    </>

    )
}