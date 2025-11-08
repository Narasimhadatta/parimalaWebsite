interface Testimonial {
  quote: string;
  name: string;
  initials: string;
  memberSince: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Seva360 has streamlined our entire donation and darshan booking system. The staff finds it easy to use, and devotees appreciate the transparency and convenience.",
    name: "Vishwapriya Acharya",
    initials: "VP",
    memberSince: "SHRI SANATANADHARMA RAKSHANA TRUST"
  },
  {
    quote: "Seva360 helped digitize our pooja bookings and archana schedules. It supports multiple languages and is very intuitive. Devotees can now book services online from anywhere.",
    name: "Pradyumna Acharya",
    initials: "PA",
    memberSince: "MAHACHARYA VIDYALAYA "
  },
  {
    quote: "We used to manage festival bookings manually, which was chaotic. With Seva360, all offerings, bookings, and volunteer schedules are now efficiently handled. It's a complete game-changer.",
    name: "HANUMATH RAO",
    initials: "HR",
    memberSince: "RAGHAVENDRA SWAMI MATTA"
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
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg border border-seva-gold">
              <div className="text-seva-gold text-4xl mb-4">"</div>
              <p className="mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-seva-gold flex items-center justify-center text-seva-brown font-bold">
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <h4 className="font-cinzel font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-seva-gold">{testimonial.memberSince}</p>
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
