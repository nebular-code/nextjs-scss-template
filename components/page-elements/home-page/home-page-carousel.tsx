"use client";
import { useState } from "react";
// https://react-bootstrap.netlify.app/docs/components/carousel/

import Carousel from "react-bootstrap/Carousel";

export function HomePageCarousel() {
  const data = [
    {
      image: "https://images.unsplash.com/photo-1701077136756-3b8439292118?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Caption",
      description: "Description Here",
    },
    {
      image: "https://images.unsplash.com/photo-1682686578842-00ba49b0a71a?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Caption 2",
      description: "Description Here",
    },
    {
      image: "https://images.unsplash.com/photo-1699973000822-26b36df91f4f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
