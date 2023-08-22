import React from 'react';
import avatarImage from '../assets/batmanAvatar.png';
import "../App.css";

const Avatar = () => {
    const avatarClass = `avatar about`;
    const spanClass = `shadow-overlay-about`;

    return (
        <>
            <span className={spanClass}></span>
            <img src={avatarImage} className={avatarClass} alt="avatar" />
        </>
    );
}

export default Avatar;