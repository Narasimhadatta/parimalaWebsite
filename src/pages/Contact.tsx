import { useState } from 'react'; // 👈 Import useState
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import DecorativeDivider from '@/components/ui/DecorativeDivider';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    contact:''
  });

  // 👉 Step 2: State for submission status (e.g., submitting, success, error)
  const [status, setStatus] = useState('');

  // 👉 Step 3: Handler to update state when user types
 const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "contact") {
    // Allow empty string (for reset) OR up to 10 digits only
    if (value === "" || /^\d{0,10}$/.test(value)) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  } else {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
};

;

  // 👉 Step 4: Handler to submit the form
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default browser submission
    setStatus('submitting');

    // ❗️❗️ PASTE YOUR GOOGLE APPS SCRIPT URL HERE ❗️❗️
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyNCa6lURtevkFJQQZPnhJxqaXXcu2PJBFezk-Uan1NJx8VonVXWCtMV4IrXpJJXdg/exec';

    const form = new FormData();
  Object.entries(formData).forEach(([key, value]) => form.append(key, value));

    fetch(scriptURL, {
      method: 'POST',
      body: form,
      // mode:'no-cors',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      if (data.result === 'success') {
        setStatus('success');
        // Clear the form
        setFormData({ name: '', email: '', subject: '', message: '' ,contact:''});
      } else {
        throw new Error(data.error || 'Unknown error');
      }
    })
    .catch(error => {
      console.error('Error!', error.message);
      setStatus('error');
    });
  };
  return (
    <>
      <Helmet>
        <title>Contact Us - Seva 360</title>
        <meta name="description" content="Get in touch with Seva 360 for spiritual services, community events, or any inquiries. Visit our location or contact us by phone or email." />
        <meta property="og:title" content="Contact Us - Seva 360" />
        <meta property="og:description" content="Reach out to us with questions or to schedule a visit at Seva 360." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* Hero Banner */}
      <div className="relative h-[200px] bg-white">
        {/* <img 
          src="/images/contact.jpg" 
          alt="Contact Seva 360" 
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-cinzel font-bold text-seva-red mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto text-seva-brown px-4">We'd love to hear from you. Reach out with any questions.</p>
          </div>
        </div>
      </div>
      
      {/* <DecorativeDivider /> */}
      
      {/* Contact Form and Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-cinzel font-bold text-seva-red mb-6">Get in Touch</h2>
              <div className="w-24 h-1 bg-seva-gold mb-6"></div>
              
              <form className="space-y-6" onSubmit={handleSubmit}>

                <div className="grid md:grid-cols-2 gap-6">

                  <div>
                    <label htmlFor="name" className="block text-seva-brown mb-2 font-cinzel">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name} // Bind value to state
                      onChange={handleChange} // Handle changes
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-seva-gold"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-seva-brown mb-2 font-cinzel">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email} // Bind value to state
                      onChange={handleChange} // Handle changes
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-seva-gold"
                      required
                    />
                  </div>
                </div>

               <div>
  <label
    htmlFor="contact"
    className="block text-seva-brown mb-2 font-cinzel"
  >
    Contact Number
  </label>
  <input
  type="tel"
  id="contact"
  name="contact"
  value={formData.contact}
  onChange={handleChange}
  maxLength={10}
  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-seva-gold"
  required
/>


</div>

                <div>
                  <label htmlFor="subject" className="block text-seva-brown mb-2 font-cinzel">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject} // Bind value to state
                    onChange={handleChange} // Handle changes
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-seva-gold"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-seva-brown mb-2 font-cinzel">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6}
                    value={formData.message} // Bind value to state
                    onChange={handleChange} // Handle changes
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-seva-gold"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-seva-red hover:bg-seva-brown text-white font-cinzel py-3 px-8 rounded transition duration-300"
                  disabled={status === 'submitting'} // Disable button while submitting
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                {/* 👉 Step 6: Show submission status message */}
                {status === 'success' && <p className="text-green-600 mt-4">Message sent successfully! We'll be in touch soon.</p>}
                {status === 'error' && <p className="text-red-600 mt-4">Something went wrong. Please try again.</p>}
              </form>
      
            </div>
            
            <div>
              <h2 className="text-3xl font-cinzel font-bold text-seva-red mb-6">Contact Information</h2>
              <div className="w-24 h-1 bg-seva-gold mb-6"></div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-seva-gold p-3 rounded-full text-white mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-cinzel font-bold text-seva-brown text-xl">Our Location</h3>
                    <p className="text-seva-brown">#8, 1st Floor,, opp. Art College, Vidya Nagar, Karnataka 580031<br/>Hunashyal Avenue</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-seva-gold p-3 rounded-full text-white mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-cinzel font-bold text-seva-brown text-xl">Phone</h3>
                    <p className="text-seva-brown">+91 8951255200</p>
                    {/* <p className="text-seva-brown">(987) 654-3210</p> */}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-seva-gold p-3 rounded-full text-white mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-cinzel font-bold text-seva-brown text-xl">Email</h3>
                    <p className="text-seva-brown">info@seva360.com</p>
                    <p className="text-seva-brown">info@samarthmeditech.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-seva-gold p-3 rounded-full text-white mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-cinzel font-bold text-seva-brown text-xl">Hours</h3>
                    <p className="text-seva-brown">Monday - Friday: 9:00 AM - 8:00 PM</p>
                    <p className="text-seva-brown">Saturday - Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-cinzel font-bold text-seva-brown text-xl mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-seva-red hover:bg-seva-brown text-white p-3 rounded-full transition duration-300" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://www.instagram.com/_ayuci_software_/?utm_source=qr&igsh=bjNhbXNnemhmeDlq#" className="bg-seva-red hover:bg-seva-brown text-white p-3 rounded-full transition duration-300" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://x.com/PvtSamarth28854" className="bg-seva-red hover:bg-seva-brown text-white p-3 rounded-full transition duration-300" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </a>
                  {/* <a href="#" className="bg-seva-red hover:bg-seva-brown text-white p-3 rounded-full transition duration-300" aria-label="YouTube">
                    <Youtube className="h-5 w-5" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <DecorativeDivider />
      
      {/* Map Section */}
      <section className="py-16 bg-seva-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cinzel font-bold text-seva-red">Find Us</h2>
            <div className="w-24 h-1 bg-seva-gold mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-seva-brown max-w-3xl mx-auto">Visit our center to experience peace and spirituality in person.</p>
          </div>
          
          <div className="rounded-lg shadow-xl overflow-hidden">
            {/* Embed map would go here - using iframe placeholder */}
            <div >
              {/* <p className="text-seva-brown font-cinzel text-xl">Interactive Map Placeholder</p> */}
              {/* In real implementation, use Google Maps or other map service iframe */}
          <iframe className="bg-gray-300 w-full h-[450px] flex items-center justify-center" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2240.5655700565826!2d75.12266835805322!3d15.36546207164948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d73252c874a1%3A0xdf03d847e3fe4c29!2sSathvik%20Softech!5e0!3m2!1sen!2sin!4v1746613919135!5m2!1sen!2sin" width="600" height="450"  loading="lazy" ></iframe>
              
            </div>
          </div>
          
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <MapPin className="mx-auto text-seva-red h-8 w-8 mb-3" />
              <h3 className="font-cinzel font-bold text-seva-brown text-xl mb-2">Directions</h3>
              <p className="text-seva-brown">Located just 2 miles from downtown, easily accessible by car or public transportation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Clock className="mx-auto text-seva-red h-8 w-8 mb-3" />
              <h3 className="font-cinzel font-bold text-seva-brown text-xl mb-2">Best Time to Visit</h3>
              <p className="text-seva-brown">The best time to visit is during afternoons, excluding Sundays, for a calm and focused experience.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Mail className="mx-auto text-seva-red h-8 w-8 mb-3" />
              <h3 className="font-cinzel font-bold text-seva-brown text-xl mb-2">Schedule Your Demo</h3>
              <p className="text-seva-brown">The best time to visit is during afternoons, excluding Sundays, for a calm and focused experience.</p>
            </div>
          </div>
        </div>
      </section>
      
      <DecorativeDivider />
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cinzel font-bold text-seva-red">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-seva-gold mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-seva-brown max-w-3xl mx-auto">Find answers to common questions about our services and community.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-seva-cream p-6 rounded-lg">
                <h3 className="text-xl font-cinzel font-bold text-seva-brown mb-3"> What is Seva360?</h3>
                <p className="text-seva-brown">Seva360 is a complete temple management software designed to streamline daily operations, manage devotees, schedule events, handle donations, and maintain temple records digitally.</p>
              </div>
              
              <div className="bg-seva-cream p-6 rounded-lg">
                <h3 className="text-xl font-cinzel font-bold text-seva-brown mb-3">What features does Seva360 offer?</h3>
                <p className="text-seva-brown">Seva360 includes features such as Seva booking, donation management, event scheduling, volunteer management, inventory tracking, temple accounting, and SMS/WhatsApp notifications.</p>
              </div>
              
              <div className="bg-seva-cream p-6 rounded-lg">
                <h3 className="text-xl font-cinzel font-bold text-seva-brown mb-3">Does Seva360 support online donations?</h3>
                <p className="text-seva-brown">Absolutely. Seva360 provides a secure online donation portal with options for one-time or recurring donations, and automatically generates receipts.</p>
              </div>
              
              <div className="bg-seva-cream p-6 rounded-lg">
                <h3 className="text-xl font-cinzel font-bold text-seva-brown mb-3"> Is Seva360 customizable for our temple’s specific needs?</h3>
                <p className="text-seva-brown">Yes, Seva360 is modular and can be customized to match the specific rituals, Sevas, schedules, and reporting requirements of each temple.</p>
              </div>
              
              <div className="bg-seva-cream p-6 rounded-lg">
                <h3 className="text-xl font-cinzel font-bold text-seva-brown mb-3"> How does Seva360 help with accounting and finance?
                </h3>
                <p className="text-seva-brown">Seva360 offers built-in accounting tools for expense tracking, donation records, daily cash reports, and financial statements.</p>
              </div>

              <div className="bg-seva-cream p-6 rounded-lg">
                <h3 className="text-xl font-cinzel font-bold text-seva-brown mb-3">Does Seva360 send reminders or notifications to devotees?</h3>
                <p className="text-seva-brown">Yes, the system can send SMS, email, or WhatsApp alerts for Seva confirmations, event reminders, and donation acknowledgements.</p>
              </div>

              <div className="bg-seva-cream p-6 rounded-lg">
                <h3 className="text-xl font-cinzel font-bold text-seva-brown mb-3"> Is the software accessible from mobile devices?
                </h3>
                <p className="text-seva-brown">Yes, Seva360 is mobile-friendly and can be accessed via any device with internet connectivity. A mobile app is also available.</p>
              </div>

              <div className="bg-seva-cream p-6 rounded-lg">
                <h3 className="text-xl font-cinzel font-bold text-seva-brown mb-3">How do we get started with Seva360?
                </h3>
                <p className="text-seva-brown">You can contact our support team through the website or request a free demo. We’ll guide you through setup, data migration, and training.</p>
              </div>
            </div>

            
            <div className="text-center mt-12">
              <p className="text-lg text-seva-brown mb-6">Don't see your question? Feel free to reach out to us directly.</p>
              <Link href="/contact" className="inline-block bg-seva-red hover:bg-seva-brown text-white font-cinzel py-3 px-8 rounded transition duration-300">
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <DecorativeDivider />
    </>
  );
};

export default Contact;
