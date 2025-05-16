import { Link } from 'wouter';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-cinzel font-bold text-seva-red">Contact Us</h2>
          <div className="w-24 h-1 bg-seva-gold mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-seva-brown max-w-3xl mx-auto">We'd love to hear from you. Reach out to us with any questions, inquiries, or to schedule a visit.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-cinzel font-bold text-seva-brown mb-6">Get in Touch</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
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
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-seva-brown mb-2 font-cinzel">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-seva-gold"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-seva-brown mb-2 font-cinzel">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={6} 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-seva-gold"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-seva-red hover:bg-seva-brown text-white font-cinzel py-3 px-8 rounded transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-cinzel font-bold text-seva-brown mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-seva-gold p-3 rounded-full text-white mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-cinzel font-bold text-seva-brown">Our Location</h4>
                  <p className="text-seva-brown"> #8, 1st Floor, opp. Art College ,<br/> Vidya Nagar, Karnataka 580031</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-seva-gold p-3 rounded-full text-white mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-cinzel font-bold text-seva-brown">Phone</h4>
                  <p className="text-seva-brown">+91 8951255200</p>
                  {/* <p className="text-seva-brown">(987) 654-3210</p> */}
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-seva-gold p-3 rounded-full text-white mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-cinzel font-bold text-seva-brown">Email</h4>
                  <p className="text-seva-brown">info@sevas360.com</p>
                  <p className="text-seva-brown">support@sevas360.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-seva-gold p-3 rounded-full text-white mr-4">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-cinzel font-bold text-seva-brown">Hours</h4>
                  <p className="text-seva-brown">Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p className="text-seva-brown">Saturday - Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-cinzel font-bold text-seva-brown mb-4">Follow Us</h4>
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
  );
};

export default ContactSection;
