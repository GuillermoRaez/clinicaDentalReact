import React from 'react';
import Footbar from '../../components/Footbar/Footbar';
import Navbar from '../../components/Navbar/Navbar';
import homepic from '../../img/pic1.jpeg';

import "./Home.css";


const Home = () => {
    return (
    <div>
        <Navbar></Navbar>
        <div className="main">
           <img className="homepic" src={homepic} alt="home1"/>
        </div>
        <Footbar></Footbar>
    </div>
    )
}

export default Home;
