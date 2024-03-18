// Features.js
import React from "react";
import {useState,useEffect} from 'react';
import FeatureSlide from "../component/FeatureSlide";

const Features = () => {
    const [activeIndex, setActiveIndex] = useState(0);

   /* useEffect(() => {
        // Automatically slide every 2 seconds
        const interval = setInterval(() => {
          setActiveIndex((activeIndex + 1) % 5);
        }, 3000);
    
        // Clear interval on component unmount
        return () => clearInterval(interval);
      }, [activeIndex]);
*/
      

  const features = [
    {
      imageSrc: require("../images/Guideprompts.png"),
      title: "Guided Learning Prompts",
      description:
        "Let our Guided Learning Prompts be your personalized language coach. Tailored to your proficiency, these prompts not only refine your English skills but also provide structured lessons, making learning on SimplyEnglish a breeze.",
    },
    {
      imageSrc: require("../images/voice.png"),
      title: "Voice Recognition",
      description:
        "Speak your questions into our SimplyEnglish app and receive instant answers! Our Voice Recognition feature not only enhances your spoken English but also allows you to effortlessly inquire about anything, eliminating the need for typing.",
    },
    {
      imageSrc: require("../images/voiceenabled.png"),
      title: "Voice-Enabled Learning",
      description:
        "Immerse yourself in interactive learning with Voice-Enabled Learning on SimplyEnglish. Speak, listen, and practice pronunciation effortlessly, taking your language skills to new heights with just your voice.",
    },
    {
      imageSrc: require("../images/chathistory.png"),
      title: "Chat History",
      description:
        "No need to worry about forgetting lessons—SimplyEnglish's Chat History feature keeps track of your progress. Revisit and review your personalized chat log to stay organized and motivated throughout your English learning journey.",
    },
    {
      imageSrc: require("../images/askanything.png"),
      title: "Ask Anything",
      description:
        "With our 'Ask Anything' feature, speaking is all you need to do. Simply use your voice to inquire about language nuances, exam strategies, or any English-related queries, and receive instant and accurate responses on SimplyEnglish.",
    },
  ];

  return (
    <section className="">
      <div className="container">
        <img
          src={require("../images/featurehead.PNG")}
          alt=""
          width="100px"
          className="img-fluid mb-3"
        />
        <h2 className="mt-3 mb-4">
          Simply English making your <br />
          communication skills your greatest asset
        </h2>
        <h5>
          Your Language Coach: Elevate speaking, writing, and interview skills
          seamlessly.
        </h5>
        <h1 className="abtus mt-5">App Features</h1>
        <div className="row mt-5 mb-5 d-flex align-items-center">
          <div id="demo" className="carousel slide w-100" data-ride="carousel">
            <ul className="carousel-indicators featureindicator">
              {features.map((feature, index) => (
                <li
                  key={index}
                  data-target="#demo"
                  data-slide-to={index}
                  className={index === activeIndex ? "active" : ""}
                ></li>
              ))}
            </ul>
            <div className="carousel-inner bgcircle">
              {features.map((feature, index) => (
                <FeatureSlide
                  key={index}
                  imageSrc={feature.imageSrc}
                  title={feature.title}
                  description={feature.description}
                  isActive={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
