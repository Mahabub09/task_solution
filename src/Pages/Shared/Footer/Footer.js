import React from 'react';
import './Footer.css'
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div>
            <footer>
                <div className='waves'>
                    <div className='wave' id="w1"> </div>
                    <div className='wave' id="w2"> </div>
                    <div className='wave' id="w3"> </div>
                    <div className='wave' id="w4"> </div>
                </div>
                <ul className='social-icons d-flex justify-content-center align-items-center text-white'>
                    <li><a><FaFacebook></FaFacebook></a></li>
                    <li><a><FaTwitter></FaTwitter></a></li>
                    <li><a><FaLinkedinIn></FaLinkedinIn></a></li>
                    <li><a><FaInstagram></FaInstagram></a></li>

                </ul>
                <p className='text-white text-center my-3 fs-5'>Copyright© . Mahabub Alam {year}</p>
            </footer>

        </div>
    );
};

export default Footer;