import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black font-inter">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-800">
              Your Ride,
            </span>
            <span className="block text-black">Your Adventure!</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience travel like never before with majestic Pokémon companions.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-800">
                About Us
              </span>
            </h2>
            <div className="space-y-5 text-gray-700 text-lg">
              <p>
                Why take a boring ride when you can ride a Pokémon? From plains to
                mountains, jungles to oceans, deserts to snowy lands, Zafari lets
                you travel across six thrilling terrains with five unique Pokémon
                subtypes, ready to suit your style, speed, and thrill level.
              </p>
              <p>
                Whether it's a quick ride across town or a scenic journey through
                untamed lands, Zafari turns ordinary travel into extraordinary
                experiences.
              </p>
              <p className="text-black font-semibold">
                Fast, fun, and magical—pick your Pokémon, pick your adventure, and
                turn every trip into an epic journey!
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="border border-yellow-400/40 rounded-2xl shadow-md p-2">
              <Image
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ac647cd7-dd9f-430b-b7b1-e8ce813a7959.png"
                alt="Majestic Charizard flying over mountain terrain with golden sunset lighting"
                width={600}
                height={384}
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-playfair">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-800">
              Our Magical Features
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "Lightning Fast", desc: "Electric-type Pokémon for the fastest urban commutes" },
              { icon: "🌊", title: "Aquatic Adventures", desc: "Water-type Pokémon for coastal and river journeys" },
              { icon: "🌋", title: "Mountain Masters", desc: "Rock and Ground-types for rugged terrain exploration" },
              { icon: "❄", title: "Frozen Frontiers", desc: "Ice-type Pokémon for snowy mountain expeditions" },
              { icon: "🌿", title: "Jungle Journeys", desc: "Grass and Bug-types for forest and jungle exploration" },
              { icon: "🔥", title: "Fiery Expeditions", desc: "Fire-type Pokémon for desert and volcanic terrain" },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-800 flex items-center justify-center mx-auto mb-4 text-3xl">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
