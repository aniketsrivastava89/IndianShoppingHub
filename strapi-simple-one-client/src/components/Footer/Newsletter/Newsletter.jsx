import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import {
    FaFacebookF,
    // FaSquareXTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text"></span>
                <span className="big-text">
                    Notify exciting offers
                </span>
                <div className="form">
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <div className="icon">
                        <a href="https://linkedin.com"><FaLinkedinIn size={14} /></a>
                    </div>
                    <div className="icon">
                        <a href="https://facebook.com"><FaFacebookF size={14} /></a>
                    </div>
                    <div className="icon">
                        <a href="https://twitter.com"><FaXTwitter size={14}/></a>
                    </div>
                    <div className="icon">
                        <a href="https://instagram.com"><FaInstagram size={14} /></a>
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
