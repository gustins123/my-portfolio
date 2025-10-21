// src/components/PortfolioGallery.tsx

"use client"; // This is a client component because it uses hooks (useState)

import { useEffect, useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Import the image data we created
import { images } from "@/data/portfolioData";

// Helper function to shuffle an array using the Fisher-Yates algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array]; // Create a shallow copy to avoid mutating the original data
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
  }
  return newArray;
};


const PortfolioGallery = () => {
  // 'index' will be the index of the image we want to show in the lightbox.
  // We set it to -1 when the lightbox is closed.
  const [index, setIndex] = useState(-1);

  // 1. Start with an empty array. This will be the same on the server and the client initially.
  const [shuffledImages, setShuffledImages] = useState<typeof images>([]);

  // 2. Use useEffect to shuffle the images ONLY after the component has mounted on the client.
  // The empty dependency array [] ensures this code runs just once.
  useEffect(() => {
    setShuffledImages(shuffleArray(images));
  }, []);

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
        <h2 className="text-7xl font-light mb-4">My Portfolio</h2>
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
        {shuffledImages.map((image, idx) => (
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
        slides={shuffledImages}
      />
    </section>
  );
};

export default PortfolioGallery;