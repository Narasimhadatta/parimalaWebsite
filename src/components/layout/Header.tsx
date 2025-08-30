import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
// import React = require('react');

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({
    about: false,
    services: false
  });
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setMobileDropdowns({
      ...mobileDropdowns,
      [dropdown]: !mobileDropdowns[dropdown]
    });
  };

  return (
    <header className="relative">
      {/* Top Bar */}
      <div className="bg-seva-red text-seva-cream py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* <div className="flex items-center space-x-4">
            <a href="tel:+1234567890" className="text-sm flex items-center">
              <i className="fas fa-phone mr-2"></i> +91 8951255200
            </a>
            <a href="mailto:info@seva360.com" className="text-sm flex items-center">
              <i className="fas fa-envelope mr-2"></i> info@seva360.com
            </a>
          </div> */}
          <div className="flex space-x-3">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/_ayuci_software_/?utm_source=qr&igsh=bjNhbXNnemhmeDlq#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://x.com/PvtSamarth28854" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="bg-seva-cream border-b-4 border-seva-gold relative z-10">
        <div className="container mx-auto ">
          <div className="flex justify-between items-center ">
            {/* <Link href="/" className="text-3xl font-cinzel font-bold text-seva-red">
              Seva<span className="text-seva-gold">360</span>
            </Link> */}
          <div className="h-20 w-auto">
  <img src="/images/sevaLogo.svg" alt="Seva360 Logo" className="h-full" />
</div>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-seva-brown"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="nav-item">
                <Link href="/" className={`font-cinzel ${location === '/' ? 'text-seva-red' : 'text-seva-brown hover:text-seva-red'} transition duration-300`}>
                  Home
                </Link>
              </div>
              <div className="nav-item">
                <Link href="/about" className={`font-cinzel ${location === '/about' ? 'text-seva-red' : 'text-seva-brown hover:text-seva-red'} transition duration-300`}>
                  About
                </Link>
                {/* <div className="nav-dropdown">
                  <Link href="/about#mission" className="block py-2 text-seva-brown hover:text-seva-red">Our Mission</Link>
                  <Link href="/about#team" className="block py-2 text-seva-brown hover:text-seva-red">Our Team</Link>
                  <Link href="/about#history" className="block py-2 text-seva-brown hover:text-seva-red">Our History</Link>
                </div> */}
              </div>
              <div className="nav-item">
                <Link href="/services" className={`font-cinzel ${location === '/services' ? 'text-seva-red' : 'text-seva-brown hover:text-seva-red'} transition duration-300`}>
                  Services
                </Link>
                {/* <div className="nav-dropdown">
                  <Link href="/services#counseling" className="block py-2 text-seva-brown hover:text-seva-red">Spiritual Counseling</Link>
                  <Link href="/services#meditation" className="block py-2 text-seva-brown hover:text-seva-red">Meditation Classes</Link>
                  <Link href="/services#yoga" className="block py-2 text-seva-brown hover:text-seva-red">Yoga Sessions</Link>
                  <Link href="/services#puja" className="block py-2 text-seva-brown hover:text-seva-red">Puja Services</Link>
                </div> */}
              </div>
              {/* <div className="nav-item">
                <Link href="/events" className={`font-cinzel ${location === '/events' ? 'text-seva-red' : 'text-seva-brown hover:text-seva-red'} transition duration-300`}>
                  Events
                </Link>
              </div>
              <div className="nav-item">
                <Link href="/gallery" className={`font-cinzel ${location === '/gallery' ? 'text-seva-red' : 'text-seva-brown hover:text-seva-red'} transition duration-300`}>
                  Gallery
                </Link>
              </div> */}
              <div className="nav-item">
                <Link href="/contact" className={`font-cinzel ${location === '/contact' ? 'text-seva-red' : 'text-seva-brown hover:text-seva-red'} transition duration-300`}>
                  Contact
                </Link>
              </div>
            </div>
            
            {/* Donate Button */}
            <Link href="/contact" className="hidden lg:block bg-seva-red hover:bg-seva-brown text-white font-cinzel py-2 px-6 rounded transition duration-300">
               Book Demo Now
            </Link>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-seva-cream absolute w-full left-0 shadow-lg z-20`}>
          <div className="container mx-auto px-4 py-3">
            <Link href="/" className="block py-3 font-cinzel text-seva-brown border-b border-seva-gold">Home</Link>
            <div className="mobile-dropdown">
              {/* <button 
                className="w-full text-left py-3 font-cinzel text-seva-brown border-b border-seva-gold flex justify-between items-center"
                onClick={() => toggleMobileDropdown('about')}
              >
                About {mobileDropdowns.about ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button> */}
              {/* <div className={mobileDropdowns.about ? "pl-4 bg-seva-cream" : "hidden pl-4 bg-seva-cream"}>
                <Link href="/about#mission" className="block py-2 text-seva-brown">Our Mission</Link>
                <Link href="/about#team" className="block py-2 text-seva-brown">Our Team</Link>
                <Link href="/about#history" className="block py-2 text-seva-brown">Our History</Link>
              </div> */}
            </div>
            <div className="mobile-dropdown">
              {/* <button 
                className="w-full text-left py-3 font-cinzel text-seva-brown border-b border-seva-gold flex justify-between items-center"
                onClick={() => toggleMobileDropdown('services')}
              >
                Services {mobileDropdowns.services ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button> */}
              {/* <div className={mobileDropdowns.services ? "pl-4 bg-seva-cream" : "hidden pl-4 bg-seva-cream"}>
                <Link href="/services#counseling" className="block py-2 text-seva-brown">Spiritual Counseling</Link>
                <Link href="/services#meditation" className="block py-2 text-seva-brown">Meditation Classes</Link>
                <Link href="/services#yoga" className="block py-2 text-seva-brown">Yoga Sessions</Link>
                <Link href="/services#puja" className="block py-2 text-seva-brown">Puja Services</Link>
              </div> */}
            </div>
            <Link href="/about" className="block py-3 font-cinzel text-seva-brown border-b border-seva-gold">About</Link>
            <Link href="/services" className="block py-3 font-cinzel text-seva-brown border-b border-seva-gold">Services</Link>

            {/* <Link href="/events" className="block py-3 font-cinzel text-seva-brown border-b border-seva-gold">Events</Link> */}
            {/* <Link href="/gallery" className="block py-3 font-cinzel text-seva-brown border-b border-seva-gold">Gallery</Link> */}
            <Link href="/contact" className="block py-3 font-cinzel text-seva-brown border-b border-seva-gold">Contact</Link>
            
            <Link href="/contact" className="block mt-4 bg-seva-red text-white font-cinzel py-3 px-6 rounded text-center">
              Schedule Your Demo
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
