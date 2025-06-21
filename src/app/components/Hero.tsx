// src/components/Hero.tsx

const Hero = () => {
  return (
    // The main container is still relative and has the background image
    <section className="relative flex w-screen min-h-[1000px] items-center
    bg-hero-bg bg-cover bg-center overflow-y-auto">
        <div
        className="absolute inset-0  left-0 h-full w-[50vh] bg-gradient-to-r from-background to-transparent"
      />
      
      {/* 
        The gradient overlay div that was here has been completely removed.
      */}

      {/* Text Content Container */}
      {/* This container no longer has horizontal padding (px-8 md:px-16 is gone) */}
      <div className="relative z-10 w-full max-w-7xl pl-[10%] pr-8">
        <div className="max-w-8xl text-left">
          <p className="mb-2 text-2xl font-light text-foreground/70 md:text-8xl">
            Hello!
          </p>
          <h1 className="mb-4 text-6xl font-light tracking-tight text-white md:text-9xl">
            I'm Gustavs
          </h1>
          <p className="max-w-lg text-lg text-foreground/70 md:text-xl">
            I am a 3D artist with more than 7 years of experience creating
            beautiful and engaging visual experiences.
          </p>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-background to-transparent"
      />
    </section>
  );
};

export default Hero;