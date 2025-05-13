import { Link } from 'wouter';
import { Clock, MapPin } from 'lucide-react';

interface Event {
  day: string;
  month: string;
  title: string;
  time: string;
  location: string;
  description: string;
  eventType: 'special' | 'workshop' | 'community';
  eventTypeLabel: string;
  linkText: string;
  link: string;
}

const events: Event[] = [
  {
    day: "15",
    month: "Aug",
    title: "Janmashtami Celebration",
    time: "5:00 PM - 10:00 PM",
    location: "Seva360 Main Hall",
    description: "Join us for a special celebration of Lord Krishna's birthday with bhajans, cultural performances, and a community feast.",
    eventType: "special",
    eventTypeLabel: "Special Event",
    linkText: "Register Now",
    link: "/events/janmashtami"
  },
  {
    day: "22",
    month: "Aug",
    title: "Meditation Workshop",
    time: "10:00 AM - 12:00 PM",
    location: "Meditation Hall",
    description: "Learn powerful meditation techniques from our experienced gurus. Perfect for beginners and those looking to deepen their practice.",
    eventType: "workshop",
    eventTypeLabel: "Workshop",
    linkText: "Register Now",
    link: "/events/meditation-workshop"
  },
  {
    day: "29",
    month: "Aug",
    title: "Food Distribution Drive",
    time: "9:00 AM - 1:00 PM",
    location: "Community Center",
    description: "Join our volunteers in preparing and distributing meals to those in need. Experience the joy of selfless service.",
    eventType: "community",
    eventTypeLabel: "Community",
    linkText: "Volunteer Now",
    link: "/events/food-drive"
  }
];

const getBadgeColor = (eventType: string) => {
  switch (eventType) {
    case 'special':
      return 'bg-seva-gold';
    case 'workshop':
      return 'bg-seva-purple';
    case 'community':
      return 'bg-seva-saffron';
    default:
      return 'bg-seva-gold';
  }
};

const EventsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-cinzel font-bold text-seva-red">Upcoming Events</h2>
          <div className="w-24 h-1 bg-seva-gold mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-seva-brown max-w-3xl mx-auto">Join us for these special events and celebrations that bring our community together in spiritual harmony.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-seva-cream rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-seva-red text-white text-center p-3 rounded">
                    <span className="block text-2xl font-bold">{event.day}</span>
                    <span className="text-sm uppercase">{event.month}</span>
                  </div>
                  <div className="text-right">
                    <span className={`${getBadgeColor(event.eventType)} text-white text-sm py-1 px-3 rounded-full`}>
                      {event.eventTypeLabel}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-cinzel font-bold text-seva-brown mb-2">{event.title}</h3>
                <p className="text-seva-brown mb-4 flex items-center">
                  <Clock className="mr-2 text-seva-gold h-4 w-4" /> {event.time}
                </p>
                <p className="text-seva-brown mb-4 flex items-center">
                  <MapPin className="mr-2 text-seva-gold h-4 w-4" /> {event.location}
                </p>
                <p className="text-seva-brown mb-6">{event.description}</p>
                <Link href={event.link} className="inline-block bg-seva-red hover:bg-seva-brown text-white font-cinzel py-2 px-6 rounded transition duration-300">
                  {event.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="text-center mt-12">
          <Link href="/events" className="inline-block bg-seva-gold hover:bg-yellow-600 text-white font-cinzel py-3 px-8 rounded transition duration-300">
            View Full Calendar
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default EventsSection;
