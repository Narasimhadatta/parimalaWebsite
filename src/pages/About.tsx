import { Helmet } from 'react-helmet';
import DecorativeDivider from '@/components/ui/DecorativeDivider';

const products = [
  {
    name: "Ayuci",
    subtitle: "Smart Hospital Management Software",
    icon: "🏥",
    description: `Ayuci is a comprehensive hospital management system that streamlines every aspect of healthcare operations—from patient registration to billing, appointment scheduling to medical reporting.`,
    features: [
      "OPD/IPD management",
      "Doctor and staff scheduling",
      "Pharmacy and inventory tracking",
      "Billing and report generation",
    ],
  },
  {
    name: "Robusto",
    subtitle: "Intelligent Asset Management",
    icon: "🏗️",
    description: `Robusto is a powerful asset management tool designed to help organizations track, maintain, and optimize their physical assets.`,
    features: [
      "Real-time asset tracking",
      "Maintenance reminders",
      "Audit-ready reports",
      "Smart categorization and tagging",
    ],
  },
  // {
  //   name: "Sadguru Screens",
  //   subtitle: "Digital Printing Service Management",
  //   icon: "🖨️",
  //   description: `Sadguru Screens brings printing services into the digital age with solutions for order tracking, design approvals, job scheduling, and delivery coordination.`,
  //   features: [
  //     "Centralized job scheduling",
  //     "Design proof management",
  //     "Client communication tracking",
  //     "Faster turnaround with transparency",
  //   ],
  // },
];
const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Seva 360</title>
        <meta name="description" content="Learn about Seva 360's mission, history, and commitment to spiritual growth and community service." />
        <meta property="og:title" content="About Us - Seva 360" />
        <meta property="og:description" content="Discover our journey of preserving spiritual traditions while fostering community service." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* Hero Banner */}
      <div className="relative md:h-[600px] lg:h-[650px] sm:h-[550px]">
        {/* <img 
          src="https://t3.ftcdn.net/jpg/12/74/83/22/240_F_1274832255_ROkXSyS05Y0wkCDBHGeOvw9NxE9aUSv9.jpg" 
          alt="About Seva 360" 
          className="w-full h-full object-cover"
        /> */}
        {/* <div className="absolute inset-0 flex items-center justify-center sm:p-0 sm:m-0">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-cinzel font-bold mb-4 text-seva-red">About Us</h1>
            <p className="xl:text-lg  max-w-3xl mx-auto px-4  text-seva-brown mb-4">Samarth Meditech is a trusted name in healthcare innovation, committed to transforming the way medical services are delivered and managed. Founded in 2019, we have proudly served the healthcare industry for over 6 years, delivering cutting-edge digital solutions that enhance efficiency, accessibility, and patient care.

At Samarth Meditech, our vision is to empower hospitals, clinics, and healthcare professionals with user-friendly, scalable, and reliable software tools. Over the years, we have developed a suite of healthcare applications tailored to the real-world needs of medical institutions — from hospital management systems to patient engagement platforms.

Our latest product, Seva360, continues this tradition of excellence. It is designed to simplify operations, improve service delivery, and ensure a seamless experience for both providers and patients.

Driven by a passionate team of developers and designers, we believe in building not just products, but partnerships that last. We are dedicated to quality, innovation, and continuous improvement — all to serve the greater goal of better healthcare for everyone.

</p>
          </div>
        </div> */}
        <div className="flex flex-col items-center justify-center px-4 py-12  text-center text-white">
  <h1 className="text-3xl sm:text-5xl md:text-6xl font-cinzel font-bold mb-4 text-seva-red">
    About Us
  </h1>
  <p className="text-sm sm:text-base xl:text-lg max-w-3xl mx-auto text-seva-brown">
  Seva360 is proudly developed and maintained by Samarth Meditech, a software innovation firm headquartered in Hubli with over six years of industry excellence.
    <br /><br />
    Founded in 2019, Samarth Meditech—in collaboration with Lamacode (Bengaluru)—has built a reputation for creating reliable, user-friendly digital tools that solve complex operational challenges. We bring that same commitment to quality and innovation to Seva360.
    <br /><br />
    Our goal with Seva360 is to empower temple administrations with a comprehensive management suite that simplifies daily tasks, from seva booking to devotee engagement, ensuring you can focus on what matters most: service and tradition.
    <br /><br />
    Driven by a passionate team of developers and designers, we believe in building not just products, but partnerships that last. We are dedicated to quality, innovation, and continuous improvement.
  </p>
</div>

      </div>

      
      
      {/* <DecorativeDivider /> */}
      
      {/* Our Mission Section */}
      <section id="mission" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cinzel font-bold text-seva-red">Our Mission</h2>
            <div className="w-24 h-1 bg-seva-gold mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-seva-brown max-w-3xl mx-auto">At Samarth Meditech, our mission is to empower institutions and communities with efficient, user-friendly, and respectful digital solutions that simplify operations, uphold core values, and foster transparency and engagement.

</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-cinzel font-bold text-seva-brown mb-6">Bringing Credibility Through Every Transaction

</h3>
              <p className="text-seva-brown mb-4">From hospitals to temples, and from administrators to volunteers, we are committed to building technology that supports those who serve others. By replacing complex, manual processes with smart, streamlined systems, our products help organizations focus on what matters most—service, tradition, and impact.</p>
              <p className="text-seva-brown mb-4">We are guided by a deep commitment to purposeful innovation—developing software solutions that serve communities with integrity, empathy, and impact.</p>
              <p className="text-seva-brown mb-4">We are committed to:</p>
              <ul className="list-disc list-inside space-y-2 text-seva-brown mb-6">
                <li>Creating intuitive digital tools that improve efficiency, reduce administrative burden, and simplify daily operations.

</li>
                <li>Designing solutions that honor the values, traditions, and missions of the organizations we serve

</li>
                <li> Empowering administrators and volunteers with clear, actionable insights and seamless workflows</li>
                <li>Building trust through transparent processes, real-time reporting, and user-centered design</li>
              </ul>
              <p className="text-seva-brown mb-4">With over 6 years of experience, Samarth Meditech continues to innovate with purpose—bringing credibility, compassion, and clarity to every transaction.

</p>

            </div>
            
            <div className="relative ornate-border">
              <img 
                src="/images/mission.jpg" 
                alt="Community service volunteers" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <DecorativeDivider />
      
      {/* Our Team Section */}
      {/* <section id="team" className="py-16 bg-seva-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cinzel font-bold text-seva-red">Our Team</h2>
            <div className="w-24 h-1 bg-seva-gold mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-seva-brown max-w-3xl mx-auto">Meet the dedicated individuals who guide our spiritual community.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            Team Member 1
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <div className="p-6">
                <div className="w-28 h-28 rounded-full bg-seva-gold mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                  AR
                </div>
                <h3 className="text-2xl font-cinzel font-bold text-seva-brown mb-2">Acharya Rajesh</h3>
                <p className="text-seva-gold mb-4">Spiritual Director</p>
                <p className="text-seva-brown mb-6">With over 30 years of experience in spiritual practices, Acharya Rajesh provides guidance on meditation and ancient Hindu scriptures.</p>
              </div>
            </div>
            
            Team Member 2
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <div className="p-6">
                <div className="w-28 h-28 rounded-full bg-seva-gold mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                  SD
                </div>
                <h3 className="text-2xl font-cinzel font-bold text-seva-brown mb-2">Dr. Sarita Devi</h3>
                <p className="text-seva-gold mb-4">Yoga Instructor</p>
                <p className="text-seva-brown mb-6">A certified yoga therapist combining traditional Hatha yoga with modern therapeutic approaches for holistic wellness.</p>
              </div>
            </div>
            
            Team Member 3
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <div className="p-6">
                <div className="w-28 h-28 rounded-full bg-seva-gold mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                  VP
                </div>
                <h3 className="text-2xl font-cinzel font-bold text-seva-brown mb-2">Vikas Pandit</h3>
                <p className="text-seva-gold mb-4">Community Outreach Director</p>
                <p className="text-seva-brown mb-6">Coordinates our service initiatives and builds partnerships with local organizations to extend our community impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
       */}

<section className="py-12 px-4 sm:px-8 lg:px-16 bg-seva-cream">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-seva-red text-center mb-4">Our Products</h2>
    <p className="text-seva-brown mb-10 text-center max-w-3xl mx-auto">
      At <strong>Samarth Meditech</strong>, we build purpose-driven digital solutions tailored to the unique needs of organizations that serve. Each of our products is designed to simplify complex operations, enhance transparency, and enable impactful service.
    </p>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white border border-seva-red/20 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out"
        >
          <h3 className="text-xl font-semibold text-seva-red mb-1">{product.name}</h3>
          <p className="text-sm text-black mb-2">{product.subtitle}</p>
          <p className="text-seva-brown mb-3">{product.description}</p>
          <ul className="list-disc list-inside text-seva-brown space-y-1 text-sm">
            {product.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>

      <DecorativeDivider />
      
      {/* Our History Section */}
      {/* <section id="history" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cinzel font-bold text-seva-red">Our History</h2>
            <div className="w-24 h-1 bg-seva-gold mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-seva-brown max-w-3xl mx-auto">The journey of Seva360 from its humble beginnings to a thriving spiritual community.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="bg-seva-red text-white text-center p-3 rounded w-24">
                    <span className="text-2xl font-bold">2008</span>
                  </div>
                  <div className="h-full w-1 bg-seva-gold hidden md:block"></div>
                </div>
                <div className="md:w-3/4 bg-seva-cream p-6 rounded-lg">
                  <h3 className="text-2xl font-cinzel font-bold text-seva-brown mb-4">The Beginning</h3>
                  <p className="text-seva-brown">Seva360 started as a small gathering of like-minded individuals in a community hall, led by Acharya Rajesh who had recently returned from a spiritual pilgrimage across India.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="bg-seva-red text-white text-center p-3 rounded w-24">
                    <span className="text-2xl font-bold">2012</span>
                  </div>
                  <div className="h-full w-1 bg-seva-gold hidden md:block"></div>
                </div>
                <div className="md:w-3/4 bg-seva-cream p-6 rounded-lg">
                  <h3 className="text-2xl font-cinzel font-bold text-seva-brown mb-4">Growing Community</h3>
                  <p className="text-seva-brown">With increasing interest in our spiritual practices and community service, we moved to a larger space and expanded our offerings to include regular yoga classes and meditation sessions.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="bg-seva-red text-white text-center p-3 rounded w-24">
                    <span className="text-2xl font-bold">2015</span>
                  </div>
                  <div className="h-full w-1 bg-seva-gold hidden md:block"></div>
                </div>
                <div className="md:w-3/4 bg-seva-cream p-6 rounded-lg">
                  <h3 className="text-2xl font-cinzel font-bold text-seva-brown mb-4">Community Outreach</h3>
                  <p className="text-seva-brown">Launched our first major community service initiative - a food distribution program that now serves hundreds of people monthly, embodying our belief in the spiritual importance of selfless service.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="bg-seva-red text-white text-center p-3 rounded w-24">
                    <span className="text-2xl font-bold">2020</span>
                  </div>
                </div>
                <div className="md:w-3/4 bg-seva-cream p-6 rounded-lg">
                  <h3 className="text-2xl font-cinzel font-bold text-seva-brown mb-4">Present Day</h3>
                  <p className="text-seva-brown">Today, Seva360 serves thousands of people through spiritual guidance, cultural education, and community service. We continue to grow while staying true to our founding principles of authentic spirituality and selfless service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* <DecorativeDivider /> */}
    </>
  );
};

export default About;
