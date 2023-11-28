"use client";
import { useState } from "react";
// https://react-bootstrap.netlify.app/docs/components/carousel/

import Carousel from "react-bootstrap/Carousel";

export function HomePageCarousel() {
  const data = [
    {
      image: "assets/images/background-1.png",
      caption: "Caption",
      description: "Description Here",
    },
    {
      image: "assets/images/background-1.png",
      caption: "Caption 2",
      description: "Description Here",
    },
    {
      image: "assets/images/background-1.png",
      caption: "Caption 3",
      description: "Description Here",
    },
  ];

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((slide, i) => {
        return (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={slide.image}
              alt="slider image"
            />
            <Carousel.Caption>
              <h3 className="text-white">{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
