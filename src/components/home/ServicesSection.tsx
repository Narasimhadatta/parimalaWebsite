import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

interface ServiceCard {
  image: string;
  title: string;
  description: string;
  link: string;
}

const services: ServiceCard[] = [
  {
    image: "/images/sevabooking.png",
    title: "Seva Bookings",
    description: "Allow devotees to book daily or special sevas with ease — complete with priest assignment, timing, and reminders.",
    link: "/services#meditation"
  },
  {
    image: "/images/donationMangement.jpg",
    title: "Donation Management",
    description: "Effortlessly track and manage all donation types — online, offline, or in-kind — with proper records and receipts.",
    link: "/services#counseling"
  },
  {
    image: "/images/eventscheduling.png",
    title: "Event Scheduling",
    description: "Plan, organize, and publish temple events like festivals, yajnas, and community gatherings with volunteer coordination.",
    link: "/services#yoga"
  },
  {
    image: "/images/hallbookings.png",
    title: "Hall Booking",
    description: "Enable smooth booking of temple halls for ceremonies or functions, with approval workflows and availability tracking.",
    link: "/services#puja"
  },
  {
    image: "/images/inventoryHome.png",
    title: " Inventory Management",
    description: "Manage temple stock including puja items, prasadam, and utensils — with real-time tracking and low-stock alerts.",
    link: "/services#cultural"
  },
  {
    image: "/images/expense.jpeg",
    title: "Expense Tracking",
    description: "Record and monitor all temple expenses across categories to ensure transparency and accurate financial management.",
    link: "/services#community"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-seva-cream bg-opacity-60" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1604502223362-8329c789ad82?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1200')",
      backgroundBlendMode: "overlay",
      backgroundSize: "cover",
      backgroundAttachment: "fixed"
    }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-cinzel font-bold text-seva-red">Our Services</h2>
          <div className="w-24 h-1 bg-seva-gold mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-seva-brown max-w-3xl mx-auto">Discover our wide range of spiritual services designed to nurture your soul, mind, and body through ancient practices and modern approaches.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-56 object-cover"
              />
              <div className="p-6 border-t-4 border-seva-gold">
                <h3 className="text-2xl font-cinzel font-bold text-seva-brown mb-3">{service.title}</h3>
                <p className="text-seva-brown mb-4">{service.description}</p>
                <Link href={service.link} className="text-seva-red hover:text-seva-gold font-cinzel flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services" className="inline-block bg-seva-red hover:bg-seva-brown text-white font-cinzel py-3 px-8 rounded transition duration-300">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
