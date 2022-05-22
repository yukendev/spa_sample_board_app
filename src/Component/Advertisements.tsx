import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  {
    id: 1,
    title: "広告１",
    backgroundColor: "bg-info"
  },
  {
    id: 2,
    title: "広告２",
    backgroundColor: "bg-success"
  },
  {
    id: 3,
    title: "広告３",
    backgroundColor: "bg-secondary"
  },
]

export const Advertisements = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const renderItems = () => {
    return items.map(item => {
      return(
        <CarouselItem
          key={item.id}
        >
          <div className={`${item.backgroundColor} mx-5`}>
            <div className='text-center p-5 text-white'>{item.title}</div>
          </div>
        </CarouselItem>
      )
    });
  }

  const nextHandler = () => {
    const nextIndex = (items.length - 1) == activeIndex ? 0 : activeIndex + 1
    setActiveIndex(nextIndex);
  }

  const previousHandler = () => {
    const previousIndex = activeIndex == 0 ? items.length - 1 : activeIndex -1
    setActiveIndex(previousIndex);
  }

  return (
    <div>
      <Carousel
        activeIndex={activeIndex}
        next={nextHandler}
        previous={previousHandler}
        interval={false}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={setActiveIndex} />
        {renderItems()}
        <CarouselControl direction="next" directionText="Next" onClickHandler={nextHandler} />
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previousHandler} />
      </Carousel>
    </div>
  )

};