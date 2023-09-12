import React from 'react';
import PropTypes from 'prop-types';
import Avatar from "../avatar/Avatar";
import AboutMenu from "../components/AboutMenu";

const About = props => {
    return (
        <>
            <Avatar />
            <AboutMenu />
        </>
    );
};

About.propTypes = {

};

export default About;