"use client"
import { CaretLeft, CaretRight } from "phosphor-react";
import { useState } from "react";
import "./styles.css";
import {EB_Garamond} from "next/font/google"

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
      imageUrl: "https://media.graphassets.com/WQg9CezTmahFF7ydDGQh?_gl=1*irwx37*_ga*MTkyODk2MjYuMTY1OTM4NDgyNQ..*_ga_G6FYGSYGZ4*MTY4MTg2MzkyNC44Mi4xLjE2ODE4NjM5MzguNDYuMC4w",
      title: "RESTAURANTE",
    },
    {
      imageUrl: "https://media.graphassets.com/sLuSaXcQk6olYU4v4gRa?_gl=1*1ac294x*_ga*MTkyODk2MjYuMTY1OTM4NDgyNQ..*_ga_G6FYGSYGZ4*MTY4MTg2MzkyNC44Mi4xLjE2ODE4NjM5NjkuMTUuMC4w",
      title: "ÁREA EXTERNA - PISCINA",
    },
    {
      imageUrl: "https://media.graphassets.com/jzLKcEWtRV2HeDeLhhnU?_gl=1*1i1hwkb*_ga*MTkyODk2MjYuMTY1OTM4NDgyNQ..*_ga_G6FYGSYGZ4*MTY4MTg2MzkyNC44Mi4xLjE2ODE4NjM5NjkuMTUuMC4w",
      title: "PARQUE INFANTIL",
    },
    {
      imageUrl: "https://media.graphassets.com/ppKhTf0iTnSvaolTd8r2?_gl=1*ebcgyt*_ga*MTkyODk2MjYuMTY1OTM4NDgyNQ..*_ga_G6FYGSYGZ4*MTY4MTg2MzkyNC44Mi4xLjE2ODE4NjM5NjkuMTUuMC4w",
      title: "VISTA PARA PRAIA",
    },
    {
      imageUrl: "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/tldnlzJQsOTYaM3rXtyO",
      title: "RECEPÇÃO",
    },
    {
      imageUrl: "https://media.graphassets.com/VzbQ4duRqyrzM7hQiTnx?_gl=1*14zfwdl*_ga*MTkyODk2MjYuMTY1OTM4NDgyNQ..*_ga_G6FYGSYGZ4*MTY4MTg2MzkyNC44Mi4xLjE2ODE4NjU2NjMuNjAuMC4w",
      title: "HALL DE ENTRADA",
    },
    {
      imageUrl: "https://media.graphassets.com/cPq2cOJfRoivuyc9B8qv?_gl=1*bo373v*_ga*MTkyODk2MjYuMTY1OTM4NDgyNQ..*_ga_G6FYGSYGZ4*MTY4MjA5MDU1MC44My4xLjE2ODIwOTE5NTYuNDEuMC4w",
      title: "VISTA PARA O POR DO SOL"
    },
    {
      imageUrl:"https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/gSM5b8QvQV2dNrzdmYz5",
      title:"ÁREA EXTERNA"
    },
    {
      imageUrl:"https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/43cXXDrTxOwvZVsdETNE",
      title:"ÁREA EXTERNA"
    },
    {
      imageUrl:"https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/ufbdNkcSFC8VeOghm88Q",
      title:"RESTAURANTE"
    },
    {
      imageUrl:"https://media.graphassets.com/pY9C2ww4TummfAPuezU8?_gl=1*1q6tv21*_ga*MTkyODk2MjYuMTY1OTM4NDgyNQ..*_ga_G6FYGSYGZ4*MTY4MjA5MDU1MC44My4xLjE2ODIwOTE5NTYuNDEuMC4w",
      title:"QUARTO"
    },
    {
      imageUrl:"https://media.graphassets.com/lQzgQBisSTOUwx2FtHA7?_gl=1*10nh12b*_ga*MTkyODk2MjYuMTY1OTM4NDgyNQ..*_ga_G6FYGSYGZ4*MTY4MjA5MDU1MC44My4xLjE2ODIwOTE5NTYuNDEuMC4w",
      title: "POR DO SOL"
    },
    {
      imageUrl:"https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/3ZaVMkv3R32749xxAKAH",
      title:"QUARTO"
    },
    {
      imageUrl:"https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/2JjonViFRnWRoWU4bgrh",
      title:"PARQUINHO"
    },
    {
      imageUrl:"https://media.graphassets.com/khIlU8PSTdqrnp65Lylb?_gl=1*1qrb66r*_ga*MTkyODk2MjYuMTY1OTM4NDgyNQ..*_ga_G6FYGSYGZ4*MTY4MjA5MDU1MC44My4xLjE2ODIwOTI2MzMuNjAuMC4w",
      title:"HOTEL PARTNER"
    }
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
            transform: `translateX(-${activeIndex * (1500 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
              <div className="textContainer">
                <h2 className="title">{slide.title}</h2>
                {/* <p className="description">{slide.description}</p> */}
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
