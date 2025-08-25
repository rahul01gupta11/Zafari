import React from "react";
import Image from 'next/image'
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const Section = () => {
  return (<>
  <Hero/>
  <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-black text-white">
      {/* Left Content */}
      <div className="max-w-lg space-y-4 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold">MOUNTAIN TERRAIN</h2>
        <p className="text-lg md:text-xl leading-relaxed">
         Conquer the peaks with a powerful partner! Book your mountain ride on Zafari and experience breathtaking views <br />
        </p>
      </div>

      {/* Right Media */}
      <div className="relative mt-8 md:mt-0 flex-shrink-0">
        {/* Image */}
        <Image
          src="/images/mountain.jpg"
          alt="TV Image"
          width={400}
          height={300}
          className="rounded-lg"
        />
      </div>
      <div className="separate"></div>
    </section>
<section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-black text-white">
      {/* Left Media */}
      <div className="relative mt-8 md:mt-0 flex-shrink-0">
        {/* Image */}
        <Image
          src="/images/plain.png"
          alt="Watch everywhere"
          width={400}
          height={300}
          className="rounded-lg"
        />    
      </div>

      {/* Right Content */}
      <div className="max-w-lg space-y-4 text-center md:text-left mt-8 md:mt-0">
        <h2 className="text-4xl md:text-5xl font-bold">PLAIN TERRAIN.</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Gallop through the golden fields! Find your perfect partner for a breezy grassland journey on Zafari.
        </p>
      </div>
    </section>
<section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-black text-white">
      {/* Left Content */}
      <div className="max-w-lg space-y-4 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold">WATER TERRAIN.</h2>
        <p className="text-lg md:text-xl leading-relaxed">
         Dive into adventure! Explore the waterways with a splash – your aquatic Zafari ride awaits.
        </p>
      </div>

      {/* Right Media */}
      <div className="relative mt-8 md:mt-0 flex-shrink-0">
        {/* Image */}
        <Image
          src="/images/water body.png"
          alt="TV Image"
          width={400}
          height={300}
          className="rounded-lg"
        />
        
        
      </div>
    </section>
<section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-black text-white">
      {/* Left Media */}
      <div className="relative mt-8 md:mt-0 flex-shrink-0">
        {/* Image */}
        <Image
          src="/images/snow.png"
          alt="Watch everywhere"
          width={400}
          height={300}
          className="rounded-lg"
        />    
      </div>

      {/* Right Content */}
      <div className="max-w-lg space-y-4 text-center md:text-left mt-8 md:mt-0">
        <h2 className="text-4xl md:text-5xl font-bold">SNOW TERRAIN</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Glide across the glistening snow! Discover frosty fun with a unique Zafari snow excursion.
        </p>
      </div>
    </section>
  <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-black text-white">
      {/* Left Content */}
      <div className="max-w-lg space-y-4 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold">JUNGLES</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Swing into the wild! Embark on an exciting jungle trek with a trusty rider from Zafari.
        </p>
      </div>

      {/* Right Media */}
      <div className="relative mt-8 md:mt-0 flex-shrink-0">
        {/* Image */}
        <Image
          src="/images/jungle.png"
          alt="TV Image"
          width={400}
          height={300}
          className="rounded-lg"
        />
        
        
      </div>
    </section>
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-black text-white">
      {/* Left Media */}
      <div className="relative mt-8 md:mt-0 flex-shrink-0">
        {/* Image */}
        <Image
          src="/images/desert.png"
          alt="Watch everywhere"
          width={400}
          height={300}
          className="rounded-lg"
        />    
      </div>

      {/* Right Content */}
      <div className="max-w-lg space-y-4 text-center md:text-left mt-8 md:mt-0">
        <h2 className="text-4xl md:text-5xl font-bold">DESSERT TERRAIN</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Brave the sun-kissed sands! Traverse the dunes with a resilient companion, only on Zafari.
        </p>
      </div>
    </section>
    <Footer/>

    </>
  )
}
    
  

export default Section;
