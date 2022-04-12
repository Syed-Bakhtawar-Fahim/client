import React from "react";
import './Footer.css'
import { Link } from 'react-router-dom' 
function Footer() {
    return (
        <React.Fragment>
            <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Instagram</h4>
                                <span>Islamic Cognizance</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>facebook</h4>
                                <span>Islamic Cognizance</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>Islamic_cognizance@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <h1 className="footer-logo-h1">Islamic Cognizance</h1>
                            </div>
                            <div className="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            {/* <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                            </div> */}
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
                                <h3>Message</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>The Quran is the central religious text of Islam. Muslims believe the Quran is the book of divine guidance and direction of mankind. Don’t miss to Read & Listen Quran Daily.</p>
                            </div>
                            {/* <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address" />
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; Developed By: <a href="https://github.com/Syed-Bakhtawar-Fahim">Syed Bakhtawar Fahim</a></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="about">About</Link></li>
                                <li><Link to="feedback">Contact</Link></li>
                                <li><Link to="privacy-policies">Privacy</Link></li>
                                <li><Link to="termsAndConditions">Terms</Link></li>
                            </ul>
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