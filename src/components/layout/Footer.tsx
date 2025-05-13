import { Link } from 'wouter';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-seva-brown text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-cinzel font-bold text-seva-gold mb-6">Seva<span className="text-white">360</span></h3>
            <p className="mb-6">Dedicated to preserving spiritual traditions while fostering community service and personal growth through ancient practices.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-seva-gold transition duration-300" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-seva-gold transition duration-300" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-seva-gold transition duration-300" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-seva-gold transition duration-300" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-cinzel font-bold text-seva-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-seva-gold transition duration-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-seva-gold transition duration-300">About Us</Link></li>
              <li><Link href="/services" className="hover:text-seva-gold transition duration-300">Services</Link></li>
              {/* <li><Link href="/events" className="hover:text-seva-gold transition duration-300">Events</Link></li>
              <li><Link href="/gallery" className="hover:text-seva-gold transition duration-300">Gallery</Link></li> */}
              <li><Link href="/contact" className="hover:text-seva-gold transition duration-300">Contact</Link></li>
            </ul>
          </div>
          
          {/* <div>
            <h4 className="text-xl font-cinzel font-bold text-seva-gold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services#meditation" className="hover:text-seva-gold transition duration-300">Meditation Classes</Link></li>
              <li><Link href="/services#counseling" className="hover:text-seva-gold transition duration-300">Spiritual Counseling</Link></li>
              <li><Link href="/services#yoga" className="hover:text-seva-gold transition duration-300">Yoga Sessions</Link></li>
              <li><Link href="/services#puja" className="hover:text-seva-gold transition duration-300">Puja Services</Link></li>
              <li><Link href="/services#cultural" className="hover:text-seva-gold transition duration-300">Cultural Programs</Link></li>
              <li><Link href="/services#community" className="hover:text-seva-gold transition duration-300">Community Service</Link></li>
            </ul>
          </div> */}
          
          <div>
            <h4 className="text-xl font-cinzel font-bold text-seva-gold mb-6">Newsletter</h4>
            <p className="mb-4">Subscribe to our newsletter to receive updates on events and announcements.</p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full px-4 py-3 bg-white bg-opacity-10 border border-seva-gold rounded focus:outline-none focus:ring-2 focus:ring-seva-gold"
              />
              <button 
                type="submit" 
                className="w-full bg-seva-gold hover:bg-yellow-600 text-white font-cinzel py-3 px-6 rounded transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Traditional pattern divider */}
        <div className="border-t border-seva-gold opacity-30 my-8"></div>
        
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Seva360. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="/privacy" className="text-sm text-white hover:text-seva-gold transition duration-300">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-white hover:text-seva-gold transition duration-300">Terms of Service</Link>
            <Link href="/sitemap" className="text-sm text-white hover:text-seva-gold transition duration-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
