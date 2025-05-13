import { Link } from 'wouter';
import { Search } from 'lucide-react';

interface GalleryImage {
  image: string;
  alt: string;
  link: string;
}

const galleryImages: GalleryImage[] = [
  {
    image: "https://pixabay.com/get/g37cdcf912a15fe0e51491c869056663ff2da643e506f511497fbda901eea15a78361c4d0535c778e7fe48d6991019506e766f24ab422117bd604712bf7b790c6_1280.jpg",
    alt: "Traditional Hindu ceremony",
    link: "/gallery/traditional-ceremonies"
  },
  {
    image: "https://pixabay.com/get/g47f454a4d4f87a4ca3853eb7c5d7cdf0c05ab98860548be82c3d37b66c67f9ca4b1b1dc5a174cdbbe953e8c49fec06d43c3794621f31a3080ed36505d8940dfb_1280.jpg",
    alt: "Community cultural event",
    link: "/gallery/cultural-events"
  },
  {
    image: "https://images.unsplash.com/photo-1529693662653-9d480530a697?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Group meditation session",
    link: "/gallery/meditation"
  },
  {
    image: "https://pixabay.com/get/gd0666d87ab2b27361f6939f727f722cb23303630d056057f25300a395c96cd5d06e625bc2961c65e84ba916f5bc0bb29f400ae4f9fdab7b555d554d0a4a9eec6_1280.jpg",
    alt: "Temple decorations",
    link: "/gallery/temple-decorations"
  },
  {
    image: "https://pixabay.com/get/g23fc3f9218e0045241892f63adb860b0920d058a67964192d0317177b06c1d107e2a544b3d759b72a3f6370c65f1e336e21e393bcccf4dd768e00feac5dcbf61_1280.jpg",
    alt: "Yoga class",
    link: "/gallery/yoga"
  },
  {
    image: "https://pixabay.com/get/g19d632af611161d088adc25b4815190d8a5bc98ae18616d57c12024c0ef2d4675478c4b9fd530317bf78709a29dd652aa2bfac4116393643d2be2dbf7e57a668_1280.jpg",
    alt: "Community service",
    link: "/gallery/community-service"
  },
  {
    image: "https://pixabay.com/get/gad2264cc4db93bd79ff2cac07cca70de2c34e43901ff2094a59604f9d295fd7814d24d936d4e859522b190449f293f4a261c4127d6aafae51f9f91aa4d971269_1280.jpg",
    alt: "Traditional Indian patterns",
    link: "/gallery/traditional-art"
  },
  {
    image: "https://pixabay.com/get/gff92b82f5af6ee9762e81cabe9f4641d281dd3384fdf48b417c56e892b014b632621370bcefe1f115866345eb8bdd300f8cb0fcd7ec223f75ac13fd7e383b1dc_1280.jpg",
    alt: "Spiritual ritual",
    link: "/gallery/rituals"
  }
];

const GallerySection = () => {
  return (
    <section className="py-16 bg-seva-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-cinzel font-bold text-seva-red">Our Gallery</h2>
          <div className="w-24 h-1 bg-seva-gold mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-seva-brown max-w-3xl mx-auto">Glimpses of our community events, ceremonies, and spiritual gatherings.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <Link href={image.link} className="block relative group">
                <img 
                  src={image.image} 
                  alt={image.alt} 
                  className="w-full h-56 object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                  <Search className="text-white opacity-0 group-hover:opacity-100 h-6 w-6 transition duration-300" />
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/gallery" className="inline-block bg-seva-gold hover:bg-yellow-600 text-white font-cinzel py-3 px-8 rounded transition duration-300">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
