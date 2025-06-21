// src/components/PortfolioGallery.tsx

"use client"; // This is a client component because it uses hooks (useState)

import { useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Import the image data we created
import { images } from "@/data/portfolioData";

const PortfolioGallery = () => {
  // 'index' will be the index of the image we want to show in the lightbox.
  // We set it to -1 when the lightbox is closed.
  const [index, setIndex] = useState(-1);

  // Define the number of columns for different screen sizes for our masonry grid
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <section id="portfolio" className="container mx-auto px-4 py-16">
        <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-8xl font-light mb-4">My Portfolio</h2>
        <p className="text-lg max-w-3xl mx-auto text-foreground/80 pt-8">
          Here is a curated selection of my professional and personal work. Each
          project represents a unique challenge and a story of creative
          problem-solving from concept to final render.
        </p>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid flex"
        columnClassName="my-masonry-grid_column bg-clip-padding"
      >
        {images.map((image, idx) => (
          <div
            key={image.src}
            className="overflow-hidden brightness-75 saturate-90 rounded-3xl transition-all duration-600 ease-in-out hover:brightness-100 hover:saturate-100"
            onClick={() => setIndex(idx)} // Open the lightbox to this image's index
          >
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.title || "Portfolio image"}
              className="transition-transform duration-600 ease-in-out hover:scale-110"
            />
          </div>
        ))}
      </Masonry>

      {/* The Lightbox component */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images}
      />
    </section>
  );
};

export default PortfolioGallery;