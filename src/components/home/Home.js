import React from "react";
import Video from "../video/Video";
import NewsComponent from "../news/NewsComponent";
import { Navbar } from "react-bootstrap";


const Home=() => {

    return (
        <div>
            <Navbar/>
        <h1> Introducing Youtube Clone </h1>
            <Video/>
            <NewsComponent/>
        </div>
    )
}

export default Home
