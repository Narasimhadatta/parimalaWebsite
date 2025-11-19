// import React from 'react';

interface Testimonial {
  quote: string;
  name: string;
  initials: string;
  memberSince: string;
  image?: string; 
}

const testimonials: Testimonial[] = [
  {
    quote: "Seva360 has streamlined our entire donation and darshan booking system. The staff finds it easy to use, and devotees appreciate the transparency and convenience.",
    name: "Vishwapriya Acharya",
    initials: "VP",
    memberSince: "SHRI SANATANADHARMA RAKSHANA TRUST",
    image: '/images/test1.jpeg'
  },
  {
    quote: "Seva360 helped digitize our pooja bookings and archana schedules. It supports multiple languages and is very intuitive. Devotees can now book services online from anywhere.",
    name: "Pradyumna Acharya",
    initials: "PA",
    memberSince: "MAHACHARYA VIDYALAYA ",
    image: '/images/test3.jpeg'
  },
  {
    quote: "We used to manage festival bookings manually, which was chaotic. With Seva360, all offerings, bookings, and volunteer schedules are now efficiently handled. It's a complete game-changer.",
    name: "HANUMATH RAO",
    initials: "HR",
    memberSince: "RAGHAVENDRA SWAMI MATTA",
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-seva-brown text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-cinzel font-bold text-seva-gold">Testimonials</h2>
          <div className="w-24 h-1 bg-seva-gold mx-auto mt-4 mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">Hear from our community members about how Seva360 has impacted their lives.</p>
        </div>
        
        {/* FIX 1: Changed grid to 2 cols on tablet (md) and 3 cols on laptop (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative bg-white bg-opacity-10 p-6 rounded-lg border border-seva-gold overflow-hidden hover:shadow-xl transition-shadow duration-300"
              style={{
                backgroundImage: testimonial.image ? `url(${testimonial.image})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay */}
              {testimonial.image && (
                <div className="absolute inset-0 bg-seva-brown bg-opacity-80 backdrop-blur-sm"></div>
              )}
              
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-seva-gold text-4xl mb-4 font-serif">"</div>
                <p className="mb-6 italic text-gray-100 leading-relaxed flex-grow">
                  {testimonial.quote}
                </p>
                
                <div className="flex items-center mt-auto"> 
                  
                  {/* Avatar Container */}
                  <div className="flex-shrink-0">
                    {testimonial.image ? (
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        // FIX 2: Responsive sizing. w-16/h-16 on mobile/tablet, w-24/h-24 on large screens.
                        className="w-16 h-16 lg:w-24 lg:h-24 rounded-full object-cover border-2 border-seva-gold"
                      />
                    ) : (
                      <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-seva-gold flex items-center justify-center text-seva-brown font-bold border-2 border-seva-gold text-xl">
                        {testimonial.initials}
                      </div>
                    )}
                  </div>
                  
                  {/* Name and Title */}
                  {/* FIX 3: Added min-w-0 to allow text to wrap properly inside flex */}
                  <div className="ml-4 min-w-0">
                    <h4 className="font-cinzel font-bold text-lg break-words">{testimonial.name}</h4>
                    <p className="text-xs text-seva-gold uppercase tracking-wide mt-1 truncate">
                      {testimonial.memberSince}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;