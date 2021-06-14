import React from 'react';
import Footbar from '../../components/Footbar/Footbar';
import Navbar from '../../components/Navbar/Navbar';

import "./Home.css";


const Home = () => {
    return (
    <div>
        <Navbar></Navbar>
        <div className="main">
            Welcome to Adrian's and Guillermo's Dental Clinic
        </div>
        <Footbar></Footbar>
    </div>
    )
}

export default Home;
