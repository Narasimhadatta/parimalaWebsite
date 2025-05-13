import { Helmet } from 'react-helmet';
import { useState } from 'react';
import DecorativeDivider from '@/components/ui/DecorativeDivider';
import { Search, X } from 'lucide-react';

interface GalleryImage {
  id: string;
  image: string;
  alt: string;
  category: 'ceremonies' | 'cultural' | 'meditation' | 'yoga' | 'community' | 'decorations';
}

const galleryImages: GalleryImage[] = [
  {
    id: 'img1',
    image: "https://pixabay.com/get/g37cdcf912a15fe0e51491c869056663ff2da643e506f511497fbda901eea15a78361c4d0535c778e7fe48d6991019506e766f24ab422117bd604712bf7b790c6_1280.jpg",
    alt: "Traditional Hindu ceremony with priests performing rituals",
    category: 'ceremonies'
  },
  {
    id: 'img2',
    image: "https://pixabay.com/get/g47f454a4d4f87a4ca3853eb7c5d7cdf0c05ab98860548be82c3d37b66c67f9ca4b1b1dc5a174cdbbe953e8c49fec06d43c3794621f31a3080ed36505d8940dfb_1280.jpg",
    alt: "Community cultural event with traditional Indian performances",
    category: 'cultural'
  },
  {
    id: 'img3',
    image: "https://images.unsplash.com/photo-1529693662653-9d480530a697?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Group meditation session in a serene environment",
    category: 'meditation'
  },
  {
    id: 'img4',
    image: "https://pixabay.com/get/gd0666d87ab2b27361f6939f727f722cb23303630d056057f25300a395c96cd5d06e625bc2961c65e84ba916f5bc0bb29f400ae4f9fdab7b555d554d0a4a9eec6_1280.jpg",
    alt: "Temple decorations with traditional flowers and lamps",
    category: 'decorations'
  },
  {
    id: 'img5',
    image: "https://pixabay.com/get/g23fc3f9218e0045241892f63adb860b0920d058a67964192d0317177b06c1d107e2a544b3d759b72a3f6370c65f1e336e21e393bcccf4dd768e00feac5dcbf61_1280.jpg",
    alt: "Yoga class with participants in various poses",
    category: 'yoga'
  },
  {
    id: 'img6',
    image: "https://pixabay.com/get/g19d632af611161d088adc25b4815190d8a5bc98ae18616d57c12024c0ef2d4675478c4b9fd530317bf78709a29dd652aa2bfac4116393643d2be2dbf7e57a668_1280.jpg",
    alt: "Community service event with volunteers helping those in need",
    category: 'community'
  },
  {
    id: 'img7',
    image: "https://pixabay.com/get/gad2264cc4db93bd79ff2cac07cca70de2c34e43901ff2094a59604f9d295fd7814d24d936d4e859522b190449f293f4a261c4127d6aafae51f9f91aa4d971269_1280.jpg",
    alt: "Traditional Indian artwork and patterns with intricate designs",
    category: 'decorations'
  },
  {
    id: 'img8',
    image: "https://pixabay.com/get/gff92b82f5af6ee9762e81cabe9f4641d281dd3384fdf48b417c56e892b014b632621370bcefe1f115866345eb8bdd300f8cb0fcd7ec223f75ac13fd7e383b1dc_1280.jpg",
    alt: "Spiritual ritual with incense and offerings",
    category: 'ceremonies'
  },
  {
    id: 'img9',
    image: "https://images.unsplash.com/photo-1600093991667-7b57a39212a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Festival celebration with colorful decorations and participants",
    category: 'cultural'
  },
  {
    id: 'img10',
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Meditation retreat with spiritual practitioners in a peaceful setting",
    category: 'meditation'
  },
  {
    id: 'img11',
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Group meditation with focus on inner peace and mindfulness",
    category: 'meditation'
  },
  {
    id: 'img12',
    image: "https://pixabay.com/get/ge6d6b83cbe1fb4e10c11da87f06af7fd15d4adc8954c88095c6a5f6a0c73f1fbf5cd8cffea9c3d8d8d0cd71f702f05868c9b2d8d36d7d52c79fd77d3c32f4e70_1280.jpg",
    alt: "Traditional lamp lighting ceremony during a spiritual event",
    category: 'ceremonies'
  },
  {
    id: 'img13',
    image: "https://pixabay.com/get/g1a60e8e75b86f2f51dcfa8e67a0b09fe01f9af83b5c32ae3a591657f9c60e94752d4a4d77ad19363055a4b4e4e98c17db56cce7a1ceebd1a4e37b022ef7ddaa5_1280.jpg",
    alt: "Community members participating in a food distribution program",
    category: 'community'
  },
  {
    id: 'img14',
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Yoga practitioners performing advanced asanas in a studio",
    category: 'yoga'
  },
  {
    id: 'img15',
    image: "https://pixabay.com/get/g92e2c3d7b4c3f3f9e8fc2e5a8b7af7a8eaa4bf6efc39b87eb2d4d30e2e96d33aae2c55f1c78bfd3fb74c5ed56c98aeb0c4068a76e3f45c31fec85bc4b5e64e61_1280.jpg",
    alt: "Temple interior with beautiful traditional art and decorations",
    category: 'decorations'
  },
  {
    id: 'img16',
    image: "https://pixabay.com/get/g8c256a185b0d57dd4ac7eac3c4232c92ad895b92b8eb6971f6bb7a93fba521bcacf4efc30320412cd392adcd4422f09ca5db29f82c0aff8f0198f2e48e9d1630_1280.jpg",
    alt: "Cultural dance performance during a traditional celebration",
    category: 'cultural'
  }
];

const Gallery = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = categoryFilter === 'all' || image.category === categoryFilter;
    const matchesSearch = image.alt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Helmet>
        <title>Gallery - Seva 360</title>
        <meta name="description" content="Browse our gallery of spiritual events, ceremonies, meditation sessions, yoga classes, and community service activities." />
        <meta property="og:title" content="Gallery - Seva 360" />
        <meta property="og:description" content="Explore images from our spiritual events and community gatherings." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* Hero Banner */}
      <div className="relative h-[400px]">
        <img 
          src="https://pixabay.com/get/g37cdcf912a15fe0e51491c869056663ff2da643e506f511497fbda901eea15a78361c4d0535c778e7fe48d6991019506e766f24ab422117bd604712bf7b790c6_1280.jpg" 
          alt="Seva 360 Gallery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-cinzel font-bold mb-4">Our Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto px-4">Glimpses of our spiritual journey and community gatherings</p>
          </div>
        </div>
      </div>
      
      <DecorativeDivider />
      
      {/* Gallery Section */}
      <section className="py-16 bg-seva-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cinzel font-bold text-seva-red">Photo Gallery</h2>
            <div className="w-24 h-1 bg-seva-gold mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-seva-brown max-w-3xl mx-auto">Browse through our collection of images from various spiritual events, ceremonies, and community activities.</p>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-12 flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input 
                type="text" 
                placeholder="Search gallery" 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-seva-gold w-full md:w-80"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              <button 
                className={`px-4 py-2 rounded-full ${categoryFilter === 'all' ? 'bg-seva-red text-white' : 'bg-white text-seva-brown'}`}
                onClick={() => setCategoryFilter('all')}
              >
                All Images
              </button>
              <button 
                className={`px-4 py-2 rounded-full ${categoryFilter === 'ceremonies' ? 'bg-seva-red text-white' : 'bg-white text-seva-brown'}`}
                onClick={() => setCategoryFilter('ceremonies')}
              >
                Ceremonies
              </button>
              <button 
                className={`px-4 py-2 rounded-full ${categoryFilter === 'cultural' ? 'bg-seva-red text-white' : 'bg-white text-seva-brown'}`}
                onClick={() => setCategoryFilter('cultural')}
              >
                Cultural
              </button>
              <button 
                className={`px-4 py-2 rounded-full ${categoryFilter === 'meditation' ? 'bg-seva-red text-white' : 'bg-white text-seva-brown'}`}
                onClick={() => setCategoryFilter('meditation')}
              >
                Meditation
              </button>
              <button 
                className={`px-4 py-2 rounded-full ${categoryFilter === 'yoga' ? 'bg-seva-red text-white' : 'bg-white text-seva-brown'}`}
                onClick={() => setCategoryFilter('yoga')}
              >
                Yoga
              </button>
              <button 
                className={`px-4 py-2 rounded-full ${categoryFilter === 'community' ? 'bg-seva-red text-white' : 'bg-white text-seva-brown'}`}
                onClick={() => setCategoryFilter('community')}
              >
                Community
              </button>
              <button 
                className={`px-4 py-2 rounded-full ${categoryFilter === 'decorations' ? 'bg-seva-red text-white' : 'bg-white text-seva-brown'}`}
                onClick={() => setCategoryFilter('decorations')}
              >
                Decorations
              </button>
            </div>
          </div>
          
          {/* Gallery Grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image) => (
                <div 
                  key={image.id} 
                  className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
                  onClick={() => openLightbox(image)}
                >
                  <div className="relative group h-56">
                    <img 
                      src={image.image} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                      <Search className="text-white opacity-0 group-hover:opacity-100 h-6 w-6 transition duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg">
              <h3 className="text-xl font-cinzel text-seva-brown mb-2">No images found</h3>
              <p className="text-seva-brown">Try adjusting your search or filter criteria.</p>
            </div>
          )}
          
          {/* Lightbox */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
              <div className="max-w-5xl w-full">
                <div className="relative">
                  <button 
                    className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300"
                    onClick={closeLightbox}
                  >
                    <X className="h-6 w-6" />
                  </button>
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.alt} 
                    className="w-full rounded-lg"
                  />
                  <div className="bg-black bg-opacity-75 text-white p-4 absolute bottom-0 w-full rounded-b-lg">
                    <p>{selectedImage.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <DecorativeDivider />
      
      {/* Video Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cinzel font-bold text-seva-red">Submit Your Photos</h2>
            <div className="w-24 h-1 bg-seva-gold mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-seva-brown max-w-3xl mx-auto">Share your moments from our events and ceremonies. Selected photos will be featured in our gallery.</p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-seva-cream p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-seva-brown mb-2 font-cinzel">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-seva-gold"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-seva-brown mb-2 font-cinzel">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-seva-gold"
                />
              </div>
              
              <div>
                <label htmlFor="event" className="block text-seva-brown mb-2 font-cinzel">Event Name</label>
                <input 
                  type="text" 
                  id="event" 
                  name="event" 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-seva-gold"
                />
              </div>
              
              <div>
                <label htmlFor="photo" className="block text-seva-brown mb-2 font-cinzel">Upload Photo</label>
                <input 
                  type="file" 
                  id="photo" 
                  name="photo" 
                  accept="image/*" 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-seva-gold"
                />
                <p className="text-sm text-gray-500 mt-1">Max file size: 5MB. Formats: JPG, PNG</p>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-seva-brown mb-2 font-cinzel">Description</label>
                <textarea 
                  id="description" 
                  name="description" 
                  rows={4} 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-seva-gold"
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="permission" 
                  name="permission" 
                  className="mt-1 mr-2"
                />
                <label htmlFor="permission" className="text-sm text-seva-brown">I give permission to Seva360 to use these photos on their website and social media</label>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-seva-red hover:bg-seva-brown text-white font-cinzel py-3 px-8 rounded transition duration-300"
              >
                Submit Photos
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <DecorativeDivider />
    </>
  );
};

export default Gallery;
