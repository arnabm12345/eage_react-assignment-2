import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const CaseStudy = () => {
    return (
        <section className="casestudy">
            <div className="container mt-5">
                <h1 className="abtus mt-4">Case Study</h1>
                <div className="row mt-5 mb-3">
                    <div className="col-md-12">
                        <OwlCarousel id="news-slider" className="owl-theme owl-carousel" loop margin={10} autoplay autoplayTimeout={3000}
                        responsive={{
                            0: {
                                items: 1,
                                margin: 0,
                            },
                            800: {
                                items: 2,
                                margin: 10,
                            },
                            1000: {
                                items: 3,
                                margin: 10,
                            }}}
                            autoplayHoverPause
                            center
                        >
                            <div className="">
                                <div className="col-sm-12 d-flex">
                                    <div className="">
                                        <img className="card-img-top img-fluid" src={require("../images/craft.PNG")} alt=""  />
                                        <div className="card-body">
                                            <h5 className="card-text">Craft A+ Essays: Elevate your grades with Simply English's writing expertise.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="col-sm-12 d-flex">
                                    <div className="">
                                        <img className="card-img-top img-fluid" src={require("../images/communication.PNG")} alt="" />
                                        <div className="card-body">
                                            <h5>From Lines of Code to Lines of Communication: Simply English Unleashes Your Potential</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="col-sm-12 d-flex">
                                    <div className="">
                                        <img className="card-img-top img-fluid" src={require("../images/speak.PNG")} alt="" />
                                        <div className="card-body">
                                            <h5>Speak with Heart: Simply English—Moms, speaking the language of their children with ease</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="col-sm-12 d-flex">
                                    <div className="">
                                        <img className="card-img-top img-fluid" src={require("../images/powerful.jpeg")} alt="" />
                                        <div className="card-body">
                                            <h5>Powerful Vision, Persuasive Words: Simply English for Business Leaders.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
