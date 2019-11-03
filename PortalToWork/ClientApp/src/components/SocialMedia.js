import React, { Component } from 'react';
import './SocialMedia.css';


class SocialMedia extends Component {

    render() {
        return (
            <div id="socialMedia" >
                <a href="https://www.facebook.com/JobsMoGov/" target="_blank" rel="noopener noreferrer" >
                    <i className="fab fa-facebook-square" > </i >
                </a>
                <a href="https://twitter.com/JobsMoGov" target="_blank" rel="noopener noreferrer" >             
                    <i className="fab fa-twitter-square" > </i ></a>
                <a href="https://www.youtube.com/user/moworkforce1" target="_blank" rel="noopener noreferrer" >
                    <i className="fab fa-youtube" > </i ></a>
                <a href="https://jobs.mo.gov/contact-information" target="_blank" rel="noopener noreferrer" >
                    <i className="fas fa-envelope-open" > </i ></a>
                <a href="https://public.govdelivery.com/accounts/MODHEWD/subscriber/new" target="_blank" rel="noopener noreferrer" >
                <i className="fas fa-comments" > </i ></a>
            </div >
        )
    }


} export default SocialMedia