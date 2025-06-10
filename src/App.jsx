import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideosList from "./components/VideosList";
import AboutChannel from "./components/AboutChannel";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";


export default function App() {
    return (
        <div className="App bg-black">
            <Navbar />
            <Hero />
            <VideosList />
            <AboutChannel />
            <SocialLinks />
            <Footer />
        </div>
    );
}