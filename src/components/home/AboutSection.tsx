import { Link } from 'wouter';

const AboutSection = () => {

  return (
    
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-cinzel font-bold text-seva-red">About Seva<span className="text-seva-gold">360</span></h2>
          <div className="w-24 h-1 bg-seva-gold mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-seva-brown max-w-3xl mx-auto">At Seva360, we set out to make temple management simpler, smarter, and more organized.
          By combining tradition with technology, we've created a platform that helps temples focus on what truly matters — serving the community and upholding spiritual practices.</p>
        </div>
        
        {/* <div className="grid md:grid-cols-2 gap-12 items-center"> */}
          {/* <div className="relative ornate-border">
            <img 
              src="https://pixabay.com/get/gf88a34123b6aa462818a0f84a9eefcf4489a49d24ddaec183643ebd77e6d41dc4735023c6400ca674112408cc81a58f2409d680cc1a464328becd9bae9d62437_1280.jpg" 
              alt="Beautifully decorated temple interior" 
              className="w-full rounded-lg shadow-xl"
            />
          </div> */}
          <h2 className="text-3xl font-cinzel font-bold text-seva-red text-center">Our Journey</h2>
          
            {/* <h3 className="text-3xl font-cinzel font-bold text-seva-brown mb-6">Our Journey</h3> */}
          <div>
            <p className="text-seva-brown mb-4"> 

</p>
            <p className="text-seva-brown mb-6">It all began with a request from the sacred Shri RaghavendraSwami Matta in Navanagar Hubli.

When they approached us with a need for a better way to manage their temple activities, we saw more than just a project—we saw purpose. In that moment, it felt as though we had been chosen by the grace of Rayaru to undertake this sacred task. It wasn’t just an opportunity—it was a calling.
What started as a simple solution soon turned into a deeper journey. Guided by the spirit of seva—selfless service—we began building something that could truly support the heart of temple life. Every step we've taken since has been rooted in devotion: to tradition, to transparency, and to making temple management easier and more divine.

From Navanagar to today, Seva 360 continues to grow, blessed by the trust of institutions and the grace that guides our mission. And this is just the beginning.


</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <i className="fas fa-om text-seva-gold text-2xl mr-3 mt-1"></i>
                <div>
                  <h4 className="font-cinzel font-bold text-seva-brown"> Real Insight</h4>
                  <p className="text-sm text-seva-brown">Born from observing the daily struggles of temple administration.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-hands-helping text-seva-gold text-2xl mr-3 mt-1"></i>
                <div>
                  <h4 className="font-cinzel font-bold text-seva-brown">Purpose Built</h4>
                  <p className="text-sm text-seva-brown">Designed specifically to meet the needs of temples.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-heart text-seva-gold text-2xl mr-3 mt-1"></i>
                <div>
                  <h4 className="font-cinzel font-bold text-seva-brown">Trusted Growth
                  </h4>
                  <p className="text-sm text-seva-brown">Expanded through word-of-mouth and proven results</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-book text-seva-gold text-2xl mr-3 mt-1"></i>
                <div>
                  <h4 className="font-cinzel font-bold text-seva-brown">Seva Driven</h4>
                  <p className="text-sm text-seva-brown">Rooted in service, guided by tradition.</p>
                </div>
              </div>
            </div>
            
            <Link href="/about" className="inline-block bg-seva-red hover:bg-seva-brown text-white font-cinzel py-3 px-8 rounded transition duration-300">
              Learn More About Us
            </Link>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default AboutSection;
