import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Banner = () => {
    return (
        <div className="container mt-5 mb-4">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-12 mt-2 mb-2">
                    <div className="container1">
                        <img src={require("../images/banner1.png")} alt="banner_img_left" className="img-fluid container__image" width="55px" />
                        <div className="container__text">
                            <h4 className="mb-0">Simply English AI</h4>
                            <p>Your Gateway to Success!</p>
                        </div>
                    </div>
                    <h4 className="unl mt-4">Unlock 1 Billion Dreams <br />
                        With Our AI Driven English Learning APP
                    </h4>
                    <ul className="mt-4 mb-4 pl-4 headul">
                        <li>Elevate Your Language Skills for Interviews and Exams</li>
                        <li>Powered by Advanced AI Technology</li>
                        <li>Future of Education, Right at Your Fingertips</li>
                    </ul>
                    <a href="#"><img src={require("../images/googleplay.png")} alt="qr-img" width="" className="img-fluid" /></a>
                    <img src={require("../images/qr.png")} alt="qr-img" width="100px" className="img-fluid" />
                    <div className="social mt-4">
                        <a href="#" className='mr-1'><i className="fa fa-facebook"><FontAwesomeIcon icon={faFacebook} /></i></a>
                        <a href="#" className='mr-1'><i className="fa fa-instagram"><FontAwesomeIcon icon={faInstagram} /></i></a>
                        <a href="#"><i className="fa fa-twitter"><FontAwesomeIcon icon={faTwitter} /></i></a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12 mt-2 mb-2">
                    <img src={require("../images/banner.JPG")} alt="banner-img" className="img-fluid w-100" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
