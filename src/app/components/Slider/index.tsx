"use client"
import { CaretLeft, CaretRight } from "phosphor-react";
import { useState } from "react";
import "./styles.css";
import {EB_Garamond} from "next/font/google"
import { gql, useQuery } from "@apollo/client";
import { useGetSlidesQueryQuery } from "@/graphql/generated";

const ebGaramond = EB_Garamond (
  {
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-ebgaramond",
    preload: false,
    subsets:["latin"]
  }
)



const Slider = () => {

  const {data} = useGetSlidesQueryQuery()
  
  
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
            transform: `translateX(-${activeIndex * (600 / slides.length)}%)`,
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
