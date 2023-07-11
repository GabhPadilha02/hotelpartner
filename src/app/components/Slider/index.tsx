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
      imageUrl: "https://media.graphassets.com/R7YyIj5lQuii6bfrDyVv",
      title: "RESTAURANTE",
    },
    {
      imageUrl: "https://media.graphassets.com/28BSau0MQ1WLvislB3v9",
      title: "RESTAURANTE",
    },
    {
      imageUrl: "https://media.graphassets.com/0iMgQky3TZ6RcxXlD1ap",
      title: "RESTAURANTE",
    },
    {
      imageUrl: "https://media.graphassets.com/2OXo9mBTySW6GP5MpltL",
      title: "RESTAURANTE",
    },
    {
      imageUrl: "https://media.graphassets.com/dyR1mkVkSPa5XpfIAC4x",
      title: "RESTAURANTE",
    },
    {
      imageUrl: "https://media.graphassets.com/Yx705aL1SWO5vRdq1Um8",
      title: "RESTAURANTE",
    },
    {
      imageUrl: "https://media.graphassets.com/k7MmGcXZTeuWq9WMKU3k",
      title: "RESTAURANTE",
    },
    {
      imageUrl: "https://media.graphassets.com/Wp3rLE9ATRRUDBBECUn4",
      title: "QUARTOS",
    },
    {
      imageUrl: "https://media.graphassets.com/ubTmn0YFQ3SeXa0trKEJ",
      title: "QUARTOS",
    },
    {
      imageUrl: "https://media.graphassets.com/j9ejiGlWQ820CyWwuyhT",
      title: "QUARTOS",
    },
    {
      imageUrl: "https://media.graphassets.com/UrxHHYhmROTQkRzPPOfq",
      title: "QUARTOS",
    },
    {
      imageUrl: "https://media.graphassets.com/C5HGTRODQEmWHsr2sHaE",
      title: "QUARTOS",
    },
    {
      imageUrl: "https://media.graphassets.com/Oc2VAlEHRFW9t6IMz8mr",
      title: "QUARTOS",
    },
    {
      imageUrl: "https://media.graphassets.com/u9uGQhkLTR6hX6tkQgbx",
      title: "QUARTOS",
    },
    {
      imageUrl: "https://media.graphassets.com/GVskzHbvT6yR1RJcJQxC",
      title: "QUARTOS",
    },
    {
      imageUrl: "https://media.graphassets.com/ESXiFN8pQ7PsZOwsdJKq",
      title: "QUARTOS",
    },
    {
      imageUrl: "https://media.graphassets.com/4SV0354RyqFfzFCZ4f9w",
      title: "QUARTOS",
    },
    {
      imageUrl: "https://media.graphassets.com/HgB7hBFtQDu0mzHM0aPy",
      title: "PARQUE INFANTIL",
    },
    {
      imageUrl: "https://media.graphassets.com/aopPAVzvTliglrQHDSOv",
      title: "VISTA PARA PRAIA",
    },
    {
      imageUrl: "https://media.graphassets.com/SNjcqDiQSeypwBn0MaA0",
      title: "ÁREA EXTERNA",
    },
    {
      imageUrl: "https://media.graphassets.com/KeeAfwrdTp21y2FsTF8e",
      title: "ÁREA EXTERNA",
    },
    {
      imageUrl: "https://media.graphassets.com/VpekmZMgTrWPl8pg7v4n",
      title: "ÁREA EXTERNA",
    },
    {
      imageUrl: "https://media.graphassets.com/9HM0jMhxSYGjJkiU2PbU",
      title: "ÁREA EXTERNA",
    },
    {
      imageUrl: "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/GGdA7EPVSzG4oevk05lx",
      title: "ÁREA EXTERNA",
    },
    {
      imageUrl: "https://media.graphassets.com/ePBCkbDRpea4rZqZYQQl",
      title: "ÁREA EXTERNA",
    },
    {
      imageUrl: "https://media.graphassets.com/vApUrD3hSTe5xEXgy5zz",
      title: "ÁREA EXTERNA",
    },
    {
      imageUrl: "https://media.graphassets.com/OdvnoVDS7a2W8Won0oYj",
      title: "ÁREA EXTERNA",
    },
    {
      imageUrl: "https://media.graphassets.com/01VKV0wYQeOmuDKzexAF",
      title: "ÁREA EXTERNA",
    },
    {
      imageUrl: "https://media.graphassets.com/a4UfB0Td2MrJqSTeZg2x",
      title: "INSTALAÇÕES",
    },
    {
      imageUrl: "https://media.graphassets.com/s8AptOvPRraUQ7jTapup",
      title: "INSTALAÇÕES",
    },
    {
      imageUrl: "https://media.graphassets.com/PDMNBKNSwu2tjulwSZc2",
      title: "INSTALAÇÕES",
    },
    {
      imageUrl: "https://media.graphassets.com/LQHuzDpeRlSr9RJ4vo7R",
      title: "INSTALAÇÕES",
    },
    {
      imageUrl: "https://media.graphassets.com/bhFJHyUIT7LkyMOIpOEk",
      title: "PISCINA"
    },
    {
      imageUrl: "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/WGMoH3PiQgKOAedjBdWe",
      title: "PISCINA"
    },
    {
      imageUrl:"https://media.graphassets.com/tPuF5SNGQuWeAP85FOgX",
      title:"RESTAURANTE"
    },
    {
      imageUrl:"https://media.graphassets.com/YSDioKPuTS23u4v1lYtp",
      title:"RESTAURANTE"
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(slides.length)

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
            transform: `translateX(-${activeIndex * (slides.length * 100 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <a href={slide.imageUrl}><img src={slide.imageUrl} alt={`Slide ${index + 1}`} /></a>
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
