import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';



interface Slide {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const slides: Slide[] = [
  {
    image: "/images/temple10.jpg",

    title: "Revolutionize Temple Management with Seva360",
    description: "Experience the future of temple operations-secure, efficient, and effortless.",
    buttonText: "Our Services",
    buttonLink: "/services",
    secondaryButtonText: "Learn More",
    secondaryButtonLink: "/about"
  },
  {
    image: "/images/temple55.jpg",
    title: "Seva, Simplified",
    description: "Seva360 empowers you to manage rituals, donations, and devotees with unmatched precision.",
    buttonText: "services",
    buttonLink: "/services#meditation"
  },
  {
    image: "/images/devarajaswami-temple.jpg",
    title: "Empowering Temples with Modern Technology",
    description: "Bring tradition and tech together for seamless seva.",
    buttonText: "Book Your Demo Now",
    buttonLink: "/services#community"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    // Start the autoplay interval
    intervalRef.current = setInterval(nextSlide, 5000);

    // Clean up the interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Pause autoplay on hover
  const pauseAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Resume autoplay on mouse leave
  const resumeAutoplay = () => {
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  return (
    <div 
      className="relative overflow-hidden h-[800px]"
      ref={sliderRef}
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      <div 
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-5xl md:text-6xl font-cinzel font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href={slide.buttonLink} className="bg-seva-gold hover:bg-yellow-600 text-white font-cinzel py-3 px-8 rounded-lg transition duration-300">
                    {slide.buttonText}
                  </a>
                  {slide.secondaryButtonText && (
                    <a href={slide.secondaryButtonLink} className="bg-transparent hover:bg-seva-red border-2 border-white hover:border-seva-red text-white font-cinzel py-3 px-8 rounded-lg transition duration-300">
                      {slide.secondaryButtonText}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Slider Controls */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full focus:outline-none"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full focus:outline-none"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Slider Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button 
            key={index}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'} transition-all`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
