import React, { Component } from 'react';
import s from '../MainContent/MainContent.module.css';
import Slider from 'react-slick';
import main from '../../images/main.jpg';
import main2 from '../../images/main2.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const photos = [
	{
		name: 'photo1',
		url: main
	},

	{
		name: 'photo2',
		url: main2
	},
]

class SliderMainImages extends Component {
  render() {
    const settings = {
    	dots: true,
    	autoplay:true,
		  infinite: true,
		  speed: 500,
		  fade: true,
		  cssEase: 'linear'
    }
    return (
      <div className={s.mainSliderBlock}>
        <Slider {...settings}>
       		{photos.map((photo) => {
       			return (
         		 <div className={s.image}><img src={photo.url} /></div>
         		)
       		})}
        </Slider>
      </div>
    );
   }
 }

 export default SliderMainImages

