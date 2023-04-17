"use client"
import { CaretLeft, CaretRight } from "phosphor-react";
import { useState } from "react";
import "./styles.css";
import {EB_Garamond} from "next/font/google"
import bgBlur from "../../../../public/assets/Blur.svg"
import Image from "next/image";

const ebGaramond = EB_Garamond (
  {
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-ebgaramond",
    preload: false,
    subsets:["latin"]
  }
)

const Slider = () => {
  const [slides, setSlides] = useState([
    {
      imageUrl: "https://images.unsplash.com/photo-1680399524821-d4e6b225b0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "PRIMEIRO SLIDE",
      description: "slhdoashdoisahdou d uosahduosahduoh sahdsadasd sadasds adsadasdasd asdsadsads adsadsa dsadsadsadsadsad sadsadsad sadsadsada sdsadsad sadasdsad"
    },
    {
      imageUrl: "https://plus.unsplash.com/premium_photo-1676977395918-7300b6375e99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "SEGUNDO SLIDE",
      description:"SADHSADH AISDHUIASHDU ASDHUSAIHD IDHASUIDH ASUASHDUIASH DUASHD IUASHASIDUHASUDH DASHDU"
    },
    {
      imageUrl: "https://plus.unsplash.com/premium_photo-1676977395918-7300b6375e99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Segundo slide",
    },
    {
      imageUrl: "https://plus.unsplash.com/premium_photo-1676977395918-7300b6375e99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Segundo slide",
    },

  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={ebGaramond.variable}>
      <div className={"slider-container"}>
        <div
          className={`slides ${activeIndex !== 0 ? "transitioning" : ""}`}
          style={{
            transform: `translateX(-${activeIndex * (400 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
              <div className="textContainer">
                <h2 className="title">{slide.title}</h2>
                <p className="description">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="prev-button" onClick={handlePrevSlide}>
          <CaretLeft/>
        </button>
        <button className="next-button" onClick={handleNextSlide}>
        <CaretRight/>
        </button>
        <div className="dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Slider;
