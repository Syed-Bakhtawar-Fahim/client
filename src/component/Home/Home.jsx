import React from "react";
import { FaFacebookF } from 'react-icons/fa'
import './Home.css';
import '../../index.css'

function Home() {
    return (
        <React.Fragment>
            <section className='Card__section'>
                <div className="main__container">
                    <div className="main__container-behind">
                        <div className="main__container-heading">
                            <h6 className="main__container-heading-h6">Sarah cole</h6>
                            <div className="main__container-heading__img">
                                <img src="Images/group.png" alt="pic1" className="main__container-heading__img-img group" />
                            </div>
                            <h6 className="main__container-heading-h6-like section__like">12.5K</h6>
                        </div>
                        <div className="main__container__img">
                            <img src="Images/man.png" alt="imageofdiv" className="main__container__img-img" />

                        </div>
                        <div className="main__container__icon">
                            <div className="main__container__icon-icons">
                                <div className="main__container__icon-icons-face"><FaFacebookF /></div>
                                <h6 className="main__container__icon-like-h6">24k</h6>
                            </div>
                            <div className="main__container__icon-icons">
                                <div className="main__container__icon-icons-face"><FaFacebookF /></div>
                                <h6 className="main__container__icon-like-h6">24k</h6>
                            </div>
                            <div className="main__container__icon-icons">
                                <div className="main__container__icon-icons-face"><FaFacebookF /></div>
                                <h6 className="main__container__icon-like-h6">24k</h6>
                            </div>
                            <div className="main__container__icon-icons">
                                <div className="main__container__icon-icons-face"><FaFacebookF /></div>
                                <h6 className="main__container__icon-like-h6">24k</h6>
                            </div>

                        </div>

                        <div className='hidden'>aa</div>

                    </div>

                </div>
                <div className="main__container">
                    <div className="main__container-behind">
                        <div className="main__container-heading">
                            <h6 className="main__container-heading-h6">Sarah cole</h6>
                            <div className="main__container-heading__img">
                                <img src="Images/group.png" alt="pic1" className="main__container-heading__img-img group" />
                            </div>
                            <h6 className="main__container-heading-h6-like section__like">12.5K</h6>
                        </div>
                        <div className="main__container__img">
                            <img src="Images/man.png" alt="imageofdiv" className="main__container__img-img" />

                        </div>
                        <div className="main__container__icon">
                            <div className="main__container__icon-icons">
                                <div className="main__container__icon-icons-face"><FaFacebookF /></div>
                                <h6 className="main__container__icon-like-h6">24k</h6>
                            </div>
                            <div className="main__container__icon-icons">
                                <div className="main__container__icon-icons-face"><FaFacebookF /></div>
                                <h6 className="main__container__icon-like-h6">24k</h6>
                            </div>
                            <div className="main__container__icon-icons">
                                <div className="main__container__icon-icons-face"><FaFacebookF /></div>
                                <h6 className="main__container__icon-like-h6">24k</h6>
                            </div>
                            <div className="main__container__icon-icons">
                                <div className="main__container__icon-icons-face"><FaFacebookF /></div>
                                <h6 className="main__container__icon-like-h6">24k</h6>
                            </div>

                        </div>

                        <div className='hidden'>a</div> 

                    </div>

                </div>
            </section>
        </React.Fragment>
    )
}

export default Home;
