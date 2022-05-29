import React from 'react';
import Carousel from 'react-multi-carousel';
import Card from '../Card/Card';
import { CardTypes } from '../../Constants/constants';
import './CardCarousel.css'
import 'react-multi-carousel/lib/styles.css';

const CardCarousel = (props) => {

    const { currentTheme, setCurrentTheme } = props || {};

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
      <Carousel
        showDots={true}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        draggable={false}
        responsive={responsive}
        partialVisible={true}
      >
        {Object.keys(CardTypes).map((CardType, index) => 
          <Card 
            key={index}
            ImageLink={CardTypes[CardType]['link']} 
            Overlay={CardTypes[CardType]['overlay']} 
            Theme={CardTypes[CardType]['theme']} 
            currentTheme={currentTheme} 
            setCurrentTheme={setCurrentTheme}
          />
        )}
      </Carousel>
    )
};

export default CardCarousel;