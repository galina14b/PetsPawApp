import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import css from './Carousel.module.css';

import React from "react";
import Slider from "react-slick";

const Carousel = ({list}) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      {list && <Slider className={css.carousel} {...settings}>{
        list.map(item => {
          return(<div>
        <img className={css.carousel__image} src={item.url} alt=""></img>
      </div>)
        })
      }        
        
    </Slider>}
    </>
  );
}

export { Carousel };

