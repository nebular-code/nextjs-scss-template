"use client";
import { useState } from "react";
// https://react-bootstrap.netlify.app/docs/components/carousel/

import Carousel from "react-bootstrap/Carousel";

export function HomePageCarousel() {
  const data = [
    {
      image: "/images/trees.jpg",
      caption: "This Carousel is from the react-bootstrap library",
      description: "It takes up half of the screen height (50vh)",
    },
    {
      image: "/images/trees.jpg",
      caption: "Caption 2",
      description: "Description Here",
    },
    {
      image: "/images/trees.jpg",
      caption: "Caption 3",
      description: "Description Here",
    },
  ];

  const [index, setIndex] = useState<number>(0);
  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((slide, i) => {
        return (
          <Carousel.Item key={i} className="carousel-item-dimensions">
            <img
              className=""
              src={slide.image}
              alt={slide.caption}
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
