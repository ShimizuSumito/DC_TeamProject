import React from "react";
import "./Main.css";
import Home from "./Home/Home.jsx";
import Weather from "./Weather/Weather";
import Nav from "./Nav/Nav";
import{ BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import Timeline from "./Timeline/Timeline";




export default function Main() {
    return(
    <>
    <Home />
    </>
    )
}