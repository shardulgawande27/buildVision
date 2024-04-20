import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const WordsSliders = ({ words }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed here (in milliseconds)
  };
  return (
    <>
      <Slider {...settings}>
        {words.map((word) => (
          <div key={word.id}>
            <h3>{word.value}</h3>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default WordsSliders;
