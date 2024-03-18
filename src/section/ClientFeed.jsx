import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TestimonialsSection = () => {
    return (
        <section className="clients">
            <div className="container mt-5">
                <h1 className="abtus mt-4 mb-5">What our clients say</h1>
                <div className="row clienthead">
                    <div className="col-md-12">
                        <OwlCarousel id="news-slider-client" className="owl-theme owl-carousel" loop margin={10} autoplay autoplayTimeout={3000}
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
                                }
                            }}
                            center
                            autoplayHoverPause
                        >
                            <div className="item">
                                <div className="col-sm-12 d-flex">
                                    <div className="testimonial">
                                        <img src={require("../images/test2.PNG")} className="imgtest" alt="" style={{width:'90px'}}/>
                                        <h5 className="mt-4">Arjun from Bangalore</h5>
                                        <p className="description mt-4">
                                            "SimplyEnglish played a key role in my professional growth. The refined
                                            communication skills and insightful Guided Learning Prompts helped me secure
                                            a promotion. Grateful for the app's impact on my career!"
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="col-sm-12 d-flex">
                                    <div className="testimonial">
                                        <img src={require("../images/test1.PNG")} className="imgtest" alt="" style={{width:'90px'}}/>
                                        <h5 className="mt-4">Priya from Mumbai</h5>
                                        <p className="description mt-4">
                                        "Navigating Chat History on SimplyEnglish kept my learning organized and proved
                                    crucial for my important presentation
                                    preparation. Thanks to the app, I delivered with confidence and received positive
                                    feedback."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="col-sm-12 d-flex">
                                    <div className="testimonial">
                                        <img src={require("../images/test4.png")} className="imgtest" alt="" style={{width:'90px'}}/>
                                        <h5 className="mt-4">Raj from Delhi</h5>
                                        <p className="description mt-4">
                                        "SimplyEnglish's interactive learning was a game-changer for my business dealings.
                                         Personalized lessons and instant
                                       feedback through Voice-Enabled Learning significantly contributed to cracking a
                                        major business deal."
                                        </p>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="item">
                                <div className="col-sm-12 d-flex">
                                    <div className="testimonial">
                                        <img src={require("../images/test3.PNG")} className="imgtest" alt="" style={{width:'90px'}}/>
                                        <h5 className="mt-4">Aisha from Hyderabad</h5>
                                        <p className="description mt-4">
                                        "Ask Anything is my favorite feature on SimplyEnglish. It clarified my doubts during
                                    exam preparation, and the
                                    confidence gained through the app's unique features helped me clear my exam with
                                    flying colors."
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="item">
                                <div className="col-sm-12 d-flex">
                                    <div className="testimonial">
                                        <img src={require("../images/test5.png")} className="imgtest" alt="" style={{width:'90px'}}/>
                                        <h5 className="mt-4">Vikram from Chennai</h5>
                                        <p className="description mt-4">
                                        "As a content creator, SimplyEnglish was my go-to app for writing interactive
                                    website content. The fine-tuned language
                                    skills, courtesy of the app's features, made my content more engaging and
                                    impactful."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="col-sm-12 d-flex">
                                    <div className="testimonial">
                                        <img src={require("../images/test6.png")} className="imgtest" alt="" style={{width:'90px'}}/>
                                        <h5 className="mt-4">Neha from Kolkata</h5>
                                        <p className="description mt-4">
                                        "SimplyEnglish significantly impacted my exam preparation. The seamless
                                    Voice-Enabled Learning made practicing skills
                                    easy, and thanks to the app, I cleared my exam with confidence. Highly recommended!"
                                        </p>
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

export default TestimonialsSection;
