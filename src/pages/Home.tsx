import { Helmet } from 'react-helmet';
import HeroSlider from '@/components/home/HeroSlider';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import EventsSection from '@/components/home/EventsSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import GallerySection from '@/components/home/GallerySection';
import ContactSection from '@/components/home/ContactSection';
import DecorativeDivider from '@/components/ui/DecorativeDivider';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Seva 360 - Spiritual Services & Community Events</title>
        <meta name="description" content="Seva 360 offers spiritual services and community events inspired by ancient Hindu traditions. Join us for meditation, yoga, pujas, and cultural programs." />
        <meta property="og:title" content="Seva 360 - Spiritual Services & Community Events" />
        <meta property="og:description" content="Discover spiritual growth and community service through ancient traditions at Seva 360." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seva360.org" />
      </Helmet>
      
      <HeroSlider />
      <DecorativeDivider />
      <AboutSection />
      <DecorativeDivider />
      <ServicesSection />
      <DecorativeDivider />
      {/* <EventsSection /> */}
      {/* <DecorativeDivider /> */}
      <TestimonialSection />
      {/* <GallerySection /> */}
      <DecorativeDivider />
      <ContactSection />
    </>
  );
};

export default Home;
