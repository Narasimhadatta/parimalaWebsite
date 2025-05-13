import { Helmet } from 'react-helmet';
import DecorativeDivider from '@/components/ui/DecorativeDivider';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Seva 360</title>
        <meta name="description" content="Explore our range of spiritual services including meditation classes, yoga sessions, puja services, and community outreach programs." />
        <meta property="og:title" content="Our Services - Seva 360" />
        <meta property="og:description" content="Discover our spiritual services designed to nurture your soul, mind, and body through ancient practices." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* Hero Banner */}
      <div className="relative h-[200px]">
        {/* <img 
          src="/images/service.jpg" 
          alt="Seva 360 Services" 
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-cinzel font-bold mb-4 text-seva-red">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto px-4 text-seva-brown">Comprehensive Solutions Tailored to Your Needs</p>
          </div>
        </div>
      </div>
      
      {/* <DecorativeDivider /> */}
      
      {/* Meditation Classes Section */}
      <section id="meditation" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative ornate-border">
              <img 
                src="/images/sevabookings.png" 
                alt="Meditation class" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-cinzel font-bold text-seva-red mb-6">Seva Bookings</h2>
              <div className="w-24 h-1 bg-seva-gold mb-6"></div>
              <p className="text-seva-brown mb-4">Seva360 offers an intuitive and flexible seva booking system that allows temples to manage all types of religious services — from daily aartis to special rituals like abhishekas, homas, or annual poojas. Devotees can easily view available sevas, select their preferred date and time, and make bookings directly through the platform.</p>
              <p className="text-seva-brown mb-6">The system supports priest assignments, seva capacity limits, priority bookings, and generates automated confirmations and reminders via SMS or email. It also maintains a historical record of all bookings and enables staff to manage walk-in or offline entries with ease. Whether it's a one-time seva or a recurring monthly offering, Seva360 ensures every ritual is scheduled and executed smoothly — reducing manual coordination and improving the devotee experience.</p>
              <ul className="list-disc list-inside space-y-2 text-seva-brown mb-6">
                <li>Easy Seva Listing : Temples can add and categorize daily, weekly, or special sevas like Aarti, Abhishekam, or Homam.</li>
                <li>Devotee-Friendly Booking : Devotees can view available sevas, select date & time, and book online or at the temple.</li>
                <li>Automated Confirmations : Send instant booking confirmations via SMS, email, or WhatsApp.</li>
                <li>Reminder Alerts : Notify devotees before their scheduled seva to ensure timely participation.</li>
                <li>Booking History : Maintain detailed records of past bookings for tracking and reporting.</li>
              </ul>
              {/* <div className="bg-seva-cream p-6 rounded-lg mb-6">
                <h3 className="text-xl font-cinzel font-bold text-seva-brown mb-3">Class Schedule</h3>
                <p className="mb-2">Weekday Mornings: 7:00 AM - 8:00 AM</p>
                <p className="mb-2">Weekday Evenings: 6:00 PM - 7:00 PM</p>
                <p>Weekends: 9:00 AM - 10:30 AM</p>
              </div>
              <a href="#" className="inline-block bg-seva-red hover:bg-seva-brown text-white font-cinzel py-3 px-8 rounded transition duration-300">
                Register for a Class
              </a> */}
            </div>
          </div>
        </div>
      </section>
      
      <DecorativeDivider />
      
      {/* Spiritual Counseling Section */}
      <section id="counseling" className="py-16 bg-seva-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-cinzel font-bold text-seva-red mb-6">Donation Management</h2>
              <div className="w-24 h-1 bg-seva-gold mb-6"></div>
              <p className="text-seva-brown mb-4">Seva360 offers a complete solution for tracking and managing all forms of temple donations — whether it's online, offline, or in-kind. Temples can record monetary contributions made via UPI, cash, cheque, or digital payments, while also logging in-kind offerings like grains, oil, or clothing. Every donation is linked to a detailed donor profile, enabling personalized communication and accurate historical records. </p>
              <p className="text-seva-brown mb-6">The system automatically generates branded digital or printable receipts and allows donations to be categorized by purpose — such as Annadaan, festival funds, or temple maintenance. Real-time reports, tax-compliant data management, and 80G certificate support ensure both transparency and accountability. With Seva360, temples can build lasting donor relationships while managing contributions with ease and efficiency.</p>
              <ul className="list-disc list-inside space-y-2 text-seva-brown mb-6">
                <li>Donor Records & History</li>
                <li>Instant Receipt Generation</li>
                <li>Reports & Summaries</li>
                <li>SMS/Email Acknowledgments</li>
                <li>Multiple Donation Types</li>
              </ul>
              {/* <div className="bg-white p-6 rounded-lg mb-6">
                <h3 className="text-xl font-cinzel font-bold text-seva-brown mb-3">Counseling Details</h3>
                <p className="mb-2">Session Length: 60 minutes</p>
                <p className="mb-2">Available: By appointment (in-person or virtual)</p>
                <p>First consultation is complimentary</p>
              </div>
              <a href="#" className="inline-block bg-seva-red hover:bg-seva-brown text-white font-cinzel py-3 px-8 rounded transition duration-300">
                Schedule a Consultation
              </a> */}
            </div>
            
            <div className="relative ornate-border order-1 md:order-2">
              <img 
                src="/images/donation1.jpg" 
                alt="Spiritual counseling session" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <DecorativeDivider />
      
      {/* Remaining service sections would follow similar patterns */}
      
      {/* Yoga Sessions Section */}
      <section id="yoga" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative ornate-border">
              <img 
                src="/images/eventscheduling.png" 
                alt="Yoga class" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-cinzel font-bold text-seva-red mb-6">Event Scheduling</h2>
              <div className="w-24 h-1 bg-seva-gold mb-6"></div>
              <p className="text-seva-brown mb-4">Seva360 makes it effortless for temples to plan, organize, and communicate upcoming events like festivals, yajnas, religious processions, and community gatherings. With an easy-to-use calendar interface, temple administrators can schedule events with specific dates, times, locations, and detailed descriptions. </p>
              <p className="text-seva-brown mb-6">Volunteers can be assigned roles, shifts, and responsibilities through a centralized dashboard, ensuring smooth coordination. Devotees can view events online, register for participation, and receive timely updates or reminders.  Whether it’s a large annual celebration or a small spiritual talk, the system keeps all stakeholders informed and aligned. Integrated notifications makes temple event management more structured, efficient, and engaging.</p>
              <ul className="list-disc list-inside space-y-2 text-seva-brown mb-6">
                <li>Smart Event Calendar</li>
                <li>Custom Event Details</li>
                <li>Automated Reminders</li>
                <li>Post-Event Insights</li>
                <li>Devotee Engagement</li>
              </ul>
              {/* <div className="bg-seva-cream p-6 rounded-lg mb-6">
                <h3 className="text-xl font-cinzel font-bold text-seva-brown mb-3">Class Schedule</h3>
                <p className="mb-2">Mornings: 6:00 AM - 7:30 AM</p>
                <p className="mb-2">Afternoons: 12:00 PM - 1:00 PM</p>
                <p>Evenings: 5:30 PM - 7:00 PM</p>
              </div>
              <a href="#" className="inline-block bg-seva-red hover:bg-seva-brown text-white font-cinzel py-3 px-8 rounded transition duration-300">
                Join a Session
              </a> */}
            </div>
          </div>
        </div>
      </section>
      
      <DecorativeDivider />
      
      {/* Puja Services Section */}
      <section id="puja" className="py-16 bg-seva-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-cinzel font-bold text-seva-red mb-6">Inventory Management</h2>
              <div className="w-24 h-1 bg-seva-gold mb-6"></div>
              <p className="text-seva-brown mb-4">Seva360 provides a robust inventory management system designed specifically for temples to efficiently track and control their resources. From puja items and prasadam ingredients to kitchen utensils and daily-use materials, everything can be logged and monitored in real-time. </p>
              <p className="text-seva-brown mb-6">The platform allows administrators to add items with units, categories, and expiry dates, while automatically updating stock levels based on consumption or donations received. Low-stock alerts ensure timely replenishment, and all transactions are recorded for accountability. Whether it's managing ghee for daily aartis or stock for festival preparations, Seva360 helps temples reduce wastage, avoid shortages, and maintain organized storage practices.</p>
              <ul className="list-disc list-inside space-y-2 text-seva-brown mb-6">
                <li>Real-Time Stock Tracking</li>
                <li>Low-Stock Alerts</li>
                <li>Item History</li>
                <li>Inward/Outward Entry</li>
                <li>Audit-Ready Reports</li>
                <li>Integration with Sevas & Events:</li>
              </ul>
              {/* <div className="bg-white p-6 rounded-lg mb-6">
                <h3 className="text-xl font-cinzel font-bold text-seva-brown mb-3">Service Details</h3>
                <p className="mb-2">Pujas performed at our temple or your location</p>
                <p className="mb-2">All necessary materials provided</p>
                <p>Pre-puja consultation included</p>
              </div>
              <a href="#" className="inline-block bg-seva-red hover:bg-seva-brown text-white font-cinzel py-3 px-8 rounded transition duration-300">
                Book a Puja
              </a> */}
            </div>
            
            <div className="relative ornate-border order-1 md:order-2">
              <img 
                src="/images/inventory.png" 
                alt="Traditional puja ceremony" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <DecorativeDivider />
      
      {/* Footer CTA */}
      <section className="py-16 bg-seva-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-cinzel font-bold text-seva-gold mb-6">Digitilize The Divine Collections</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">Streamline temple donations with secure, transparent, and effortless management.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="bg-seva-gold hover:bg-yellow-600 text-white font-cinzel py-3 px-8 rounded-lg transition duration-300">
            Contact Us
            </a>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
