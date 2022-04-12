import React from "react";
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from 'react-icons/fa'
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { ImLinkedin } from 'react-icons/im'
function Footer() {
    return (
        <React.Fragment>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">

                        <div className="footer-content pt-5 pb-5">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 mb-50">
                                    <div className="footer-widget">
                                        <div className="footer-logo">
                                            {/* <h1 className="footer-logo-h1">Islamic Cognizance</h1> */}
                                            <img src="Images/logo.png" alt="logo" />
                                        </div>
                                        <div className="footer-text">
                                            <p>Arabia E-Advertising helps brands engage and activate audiences worldwide through top Arabic influencers.</p>
                                        </div>
                                        <div className="footer-social-icon">
                                           
                                            <a href="#"><FaFacebookSquare /></a>
                                            <a href="#"><AiOutlineTwitter /></a>
                                            <a href="#"><FiInstagram /></a>
                                            <a href="#"><ImLinkedin /></a>
                                            <a href="#"><AiFillYoutube /></a>
                                            <div className="footer-text">
                                            <p>Arabia E-Advertising © 2006-2021.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                    <div className="footer-widget">
                                        <div className="footer-widget-heading">
                                            <h3>Useful Links</h3>
                                        </div>
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="about">About</Link></li>
                                            <li><Link to="learn-quran">Listen Quran</Link></li>
                                            <li><Link to="read-quran">Read Quran</Link></li>
                                            <li><Link to="al-hadees ">Al-Hadees</Link></li>
                                            <li><Link to="feedback">Feedback</Link></li>
                                            <li><Link to="privacy-policies">Privacy Policy</Link></li>
                                            <li><Link to="termsAndConditions">Terms And Condition</Link></li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                    <div className="footer-widget">
                                        <div className="footer-widget-heading">
                                            <h3>Get In Touch</h3>
                                        </div>
                                        <div className="footer-text mb-25">
                                            <p>DUBAI OFFICE.
                                                163 Shiekh Zayed Road,
                                                TECOM, Dubai, UAE</p>
                                        </div>
                               
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer