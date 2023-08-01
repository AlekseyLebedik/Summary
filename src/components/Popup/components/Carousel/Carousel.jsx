import React, { useEffect, useState, useRef } from "react";
import { Carousel } from "primereact/carousel";
import "./Carousel.scss";

const ProductTemplate = (product) => {
  const imageRef = useRef();
  const [hover, setHover] = useState(false);
  const [objectFit, setObjectFit] = useState("right top");
  useEffect(() => {
    function trackCursorPosition(event) {
      const rect = imageRef.current.getBoundingClientRect();
      const width = rect.width / 2;
      const height = rect.height / 2;
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;

      if (width > offsetX && height > offsetY) setObjectFit("left top");
      if (width > offsetX && height < offsetY) setObjectFit("left bottom");
      if (width < offsetX && height < offsetY) setObjectFit("right bottom");
      if (width < offsetX && height > offsetY) setObjectFit("right top");
    }

    if (hover && imageRef.current) {
      imageRef.current.addEventListener("mousemove", trackCursorPosition);
    }

    return function cleanUp() {
      imageRef.current.removeEventListener("mousemove", trackCursorPosition);
    };
  }, [hover]);

  return (
    <div
      className={`product-image ${hover ? "product-image--hover" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        ref={imageRef}
        src={product}
        alt="products-image"
        id="carousel_image"
        style={{ objectPosition: objectFit }}
      />
    </div>
  );
};

export default ({ products = [] }) => {
  return (
    <Carousel
      value={products}
      numVisible={1}
      numScroll={1}
      className="custom-carousel"
      showIndicators={false}
      itemTemplate={ProductTemplate}
    />
  );
};
