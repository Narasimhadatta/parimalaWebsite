import { Helmet } from 'react-helmet';
import DecorativeDivider from '@/components/ui/DecorativeDivider';
import { Clock, MapPin, Calendar, Users, Search } from 'lucide-react';
import { useState } from 'react';

interface EventType {
  id: string;
  title: string;
  date: string;
  day: string;
  month: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: 'festival' | 'workshop' | 'community' | 'cultural';
  featured: boolean;
}

const upcomingEvents: EventType[] = [
  {
    id: 'event1',
    title: 'Janmashtami Celebration',
    date: '2023-08-15',
    day: '15',
    month: 'Aug',
    time: '5:00 PM - 10:00 PM',
    location: 'Seva360 Main Hall',
    description: 'Join us for a special celebration of Lord Krishna\'s birthday with bhajans, cultural performances, and a community feast.',
    image: 'https://pixabay.com/get/g8c256a185b0d57dd4ac7eac3c4232c92ad895b92b8eb6971f6bb7a93fba521bcacf4efc30320412cd392adcd4422f09ca5db29f82c0aff8f0198f2e48e9d1630_1280.jpg',
    category: 'festival',
    featured: true
  },
  {
    id: 'event2',
    title: 'Meditation Workshop',
    date: '2023-08-22',
    day: '22',
    month: 'Aug',
    time: '10:00 AM - 12:00 PM',
    location: 'Meditation Hall',
    description: 'Learn powerful meditation techniques from our experienced gurus. Perfect for beginners and those looking to deepen their practice.',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'workshop',
    featured: true
  },
  {
    id: 'event3',
    title: 'Food Distribution Drive',
    date: '2023-08-29',
    day: '29',
    month: 'Aug',
    time: '9:00 AM - 1:00 PM',
    location: 'Community Center',
    description: 'Join our volunteers in preparing and distributing meals to those in need. Experience the joy of selfless service.',
    image: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'community',
    featured: true
  },
  {
    id: 'event4',
    title: 'Spiritual Retreat Weekend',
    date: '2023-09-15',
    day: '15',
    month: 'Sep',
    time: 'Fri 4:00 PM - Sun 2:00 PM',
    location: 'Mountain Retreat Center',
    description: 'A weekend of silence, meditation, yoga, and spiritual discussions to deepen your practice and connect with like-minded seekers.',
    image: 'https://images.unsplash.com/photo-1588625500633-a0cd518f0f60?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'workshop',
    featured: false
  },
  {
    id: 'event5',
    title: 'Navratri Festival',
    date: '2023-10-15',
    day: '15',
    month: 'Oct',
    time: '6:00 PM - 11:00 PM',
    location: 'Seva360 Main Hall',
    description: 'Celebrate the divine feminine with nine nights of music, dance, and devotion. Traditional garba and dandiya dancing for all ages.',
    image: 'https://pixabay.com/get/g47f454a4d4f87a4ca3853eb7c5d7cdf0c05ab98860548be82c3d37b66c67f9ca4b1b1dc5a174cdbbe953e8c49fec06d43c3794621f31a3080ed36505d8940dfb_1280.jpg',
    category: 'festival',
    featured: false
  },
  {
    id: 'event6',
    title: 'Classical Dance Performance',
    date: '2023-09-05',
    day: '05',
    month: 'Sep',
    time: '7:00 PM - 9:00 PM',
    location: 'Cultural Center',
    description: 'Experience the beauty of classical Bharatanatyam dance presented by renowned artists, telling ancient spiritual stories through movement.',
    image: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'cultural',
    featured: false
  }
];

const Events = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Events Calendar - Seva 360</title>
        <meta name="description" content="Join us for spiritual events, workshops, cultural celebrations, and community service activities." />
        <meta property="og:title" content="Events Calendar - Seva 360" />
        <meta property="og:description" content="Discover upcoming spiritual and cultural events that bring our community together." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* Hero Banner */}
      <div className="relative h-[400px]">
        <img 
          src="https://pixabay.com/get/g47f454a4d4f87a4ca3853eb7c5d7cdf0c05ab98860548be82c3d37b66c67f9ca4b1b1dc5a174cdbbe953e8c49fec06d43c3794621f31a3080ed36505d8940dfb_1280.jpg" 
          alt="Seva 360 Events" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-cinzel font-bold mb-4">Events Calendar</h1>
            <p className="text-xl max-w-3xl mx-auto px-4">Join us for spiritual celebrations and community gatherings</p>
          </div>
        </div>
      </div>
      
      <DecorativeDivider />
      
      {/* Featured Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cinzel font-bold text-seva-red">Featured Events</h2>
            <div className="w-24 h-1 bg-seva-gold mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-seva-brown max-w-3xl mx-auto">Mark your calendar for these special upcoming events at Seva360.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.filter(event => event.featured).map((event) => (
              <div key={event.id} className="bg-seva-cream rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-seva-red text-white text-center p-2 rounded">
                    <span className="block text-xl font-bold">{event.day}</span>
                    <span className="text-xs uppercase">{event.month}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-cinzel font-bold text-seva-brown mb-2">{event.title}</h3>
                  <p className="text-seva-brown mb-3 flex items-center">
                    <Clock className="mr-2 text-seva-gold h-4 w-4" /> {event.time}
                  </p>
                  <p className="text-seva-brown mb-3 flex items-center">
                    <MapPin className="mr-2 text-seva-gold h-4 w-4" /> {event.location}
                  </p>
                  <p className="text-seva-brown mb-6">{event.description}</p>
                  <a href={`/events/${event.id}`} className="inline-block bg-seva-red hover:bg-seva-brown text-white font-cinzel py-2 px-6 rounded transition duration-300">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <DecorativeDivider />
      
      {/* Event Calendar and Filter */}
      <section className="py-16 bg-seva-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cinzel font-bold text-seva-red">Events Calendar</h2>
            <div className="w-24 h-1 bg-seva-gold mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-seva-brown max-w-3xl mx-auto">Browse our complete calendar of upcoming events and filter by type.</p>
          </div>
          
          {/* Filter Options */}
          <div className="mb-12 flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input 
                type="text" 
                placeholder="Search events" 
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
                All Events
              </button>
              <button 
                className={`px-4 py-2 rounded-full ${categoryFilter === 'festival' ? 'bg-seva-red text-white' : 'bg-white text-seva-brown'}`}
                onClick={() => setCategoryFilter('festival')}
              >
                Festivals
              </button>
              <button 
                className={`px-4 py-2 rounded-full ${categoryFilter === 'workshop' ? 'bg-seva-red text-white' : 'bg-white text-seva-brown'}`}
                onClick={() => setCategoryFilter('workshop')}
              >
                Workshops
              </button>
              <button 
                className={`px-4 py-2 rounded-full ${categoryFilter === 'community' ? 'bg-seva-red text-white' : 'bg-white text-seva-brown'}`}
                onClick={() => setCategoryFilter('community')}
              >
                Community Service
              </button>
              <button 
                className={`px-4 py-2 rounded-full ${categoryFilter === 'cultural' ? 'bg-seva-red text-white' : 'bg-white text-seva-brown'}`}
                onClick={() => setCategoryFilter('cultural')}
              >
                Cultural
              </button>
            </div>
          </div>
          
          {/* Event List */}
          <div className="space-y-4">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 lg:w-1/6">
                      <div className="bg-seva-red text-white text-center p-4 rounded">
                        <span className="block text-3xl font-bold">{event.day}</span>
                        <span className="text-sm uppercase">{event.month}</span>
                      </div>
                    </div>
                    <div className="md:w-3/4 lg:w-5/6">
                      <h3 className="text-2xl font-cinzel font-bold text-seva-brown mb-2">{event.title}</h3>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <span className="flex items-center text-sm text-seva-brown">
                          <Clock className="mr-1 text-seva-gold h-4 w-4" /> {event.time}
                        </span>
                        <span className="flex items-center text-sm text-seva-brown">
                          <MapPin className="mr-1 text-seva-gold h-4 w-4" /> {event.location}
                        </span>
                        <span className="flex items-center text-sm text-seva-brown">
                          <Calendar className="mr-1 text-seva-gold h-4 w-4" /> {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                        <span className={`flex items-center text-sm px-2 py-1 rounded-full ${
                          event.category === 'festival' ? 'bg-seva-gold text-white' :
                          event.category === 'workshop' ? 'bg-seva-purple text-white' :
                          event.category === 'community' ? 'bg-seva-saffron text-white' :
                          'bg-seva-red text-white'
                        }`}>
                          <Users className="mr-1 h-3 w-3" /> {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                        </span>
                      </div>
                      <p className="text-seva-brown mb-4">{event.description}</p>
                      <a href={`/events/${event.id}`} className="inline-block bg-seva-red hover:bg-seva-brown text-white font-cinzel py-2 px-6 rounded transition duration-300">
                        Event Details
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <h3 className="text-xl font-cinzel text-seva-brown mb-2">No events found</h3>
                <p className="text-seva-brown">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <DecorativeDivider />
      
      {/* Subscribe to Event Updates */}
      <section className="py-16 bg-seva-brown text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-cinzel font-bold text-seva-gold mb-6">Stay Updated on Events</h2>
            <p className="text-lg mb-8">Subscribe to our newsletter to receive updates on upcoming events, spiritual insights, and community announcements.</p>
            <form className="flex flex-col sm:flex-row gap-4 mb-4">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="flex-grow px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-seva-gold"
              />
              <button 
                type="submit" 
                className="bg-seva-gold hover:bg-yellow-600 text-white font-cinzel py-3 px-8 rounded transition duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-300">We respect your privacy and will never share your information.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
