import React from 'react';
import selfie from '../assets/images/selfie.jpg';
import './Page.css'; // A shared stylesheet for pages

const Home = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>Hi, I am Yu Hang</h1>
                <p className="subtitle">A Year 2 Computer Science student at NUS</p>
            </header>
            <img src={selfie} alt="Tan Yu Hang" className="profile-pic" />
            <p>This blog contains my journey at NUS, mod reviews and also gives tips to students doing Computer Science in NUS.</p>
        </div>
    );
};

export default Home;
