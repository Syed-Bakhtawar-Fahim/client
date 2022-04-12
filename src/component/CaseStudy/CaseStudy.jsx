import React from "react";
import './CaseStudy.css';
import { FaFacebookF } from 'react-icons/fa'

function CaseStudy() {
    return (
        <React.Fragment>
            <section className="caseStudy__section">
                <div className="caseStudy__main__container">

                    <div className="caseStudy__main__container-logos">
                        <img src="Images/SONY-PICTURES.png" alt="logo" />
                        <img src="Images/RocketLeagueChampionship.png" alt="logo" />
                        <img src="Images/RedBull.png" alt="logo" />
                        <img src="Images/blast-esports.png" alt="logo" />
                        <img src="Images/anghami.png" alt="logo" />
                        <img src="Images/KFC.png" alt="logo" />
                        <img src="Images/spotify-logo.png" alt="logo" />
                    </div>

                    {/* Inro Box Start */}
                    <div className="caseStudy__main__container__box">
                        <div className="caseStudy__main__container__box-behind">
                            <div className="caseStudy__main__container__box__content">
                        <div className='caseStudy__hidden'></div> 

                                <div className="caseStudy__main__container__box__content-head">

                                    <div className="caseStudy__main__container__box__content-head-flex" >
                                        <img src="Images/arab-esports.png" alt="image" className="caseStudy__main__container__box__content-head-flex-img" />
                                        <div className="caseStudy__main__container__box__content-heading-flex">
                                            <h1 className="caseStudy__main__container__box__content-heading">Esports</h1>
                                            <h6 className="caseStudy__main__container__box__content-heading-h6">Event & Tournaments</h6>
                                        </div>
                                    </div>
                                    <div className="caseStudy__main__container__box__content-cirlce">
                                        <div className="caseStudy__main__container__box__content-cirlce-no">01</div>
                                    </div>
                                </div>
                                <div className="caseStudy__main__container__box__content-text">
                                    <p>Since 2020, we were honored to host and present various esports tournaments (LAN/Online), thanks to our esports broadcasting talents.</p>
                                </div>
                                {/* <div className="caseStudy__main__container__box__content-icon">
                                    <div className="caseStudy__main__container__box__content-icon-icons">
                                        <img src="Images/group.png" alt="pic1" className="caseStudy__main__container__box__content-icons-group" />
                                        <h1>hello</h1>
                                    </div>
                                </div> */}
                                {/* <div className="caseStudy__main__container__box__content-icons main__container__icon-icons">
                                    <div className="main__container__icon-icons-face"><FaFacebookF /></div>
                                    <h6 className="main__container__icon-like-h6">24k</h6>
                                </div> */}

                            </div>




                        </div>
                    </div>
                    {/* Inro Box End */}

                </div>
            </section>
        </React.Fragment>
    )
}

export default CaseStudy