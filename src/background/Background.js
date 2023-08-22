import React from "react";
import "../App.css";
import video from "../assets/spaceBatman.mp4";
import fallbackImage from "../assets/fallback.png";

const Background = () => {
    return (
        <>
            <div className="shadow-overlay"></div>
            <video
                playsInline
                autoPlay
                muted
                loop
                preload="auto"
                id="bg"
                poster={fallbackImage}
            >
                <source src={video} type="video/mp4" />
            </video>
        </>
    );
}

export default Background;