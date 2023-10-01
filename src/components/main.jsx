import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from "react-bootstrap/Card";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border: `1px solid #A1B7FD`,
    background: 'linear-gradient(45deg, #E8ECF9 30%, #E8ECF9 90%)',
  },
});
const Carousel = () => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
  };

  const images = [
    './assets/image1.jpg',
    './assets/image2.jpg',
    './assets/image3.jpg',
    './assets/image1.jpg',
    './assets/image2.jpg',
    './assets/image3.jpg',
    // Add more image URLs here
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <Card key={index} className={classes.root}>
          <div key={index} className="rounded-image-container">
            <img src={image} className='rounded-image' alt={`Image ${index}`}/>
          </div>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
