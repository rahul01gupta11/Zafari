"use client";
import Image from "next/image";
import Link from "next/link";
import PokemonMap from "../components/PokemonMap";

const pokemons = [
  { ride: "Bike", name: "Bulbasaur 🌱", img: "/images/bulbasaur.png" },
  { ride: "Auto", name: "Leafeon 🍃", img: "/images/leafeon.webp" },
  { ride: "Mini", name: "Venasaur 🌿", img: "/images/venasaur.png" },
  { ride: "Pro", name: "Snorlax 😴", img: "/images/snorlax.png" },
  { ride: "Luxury", name: "Celebi ⏳", img: "/images/celebi.png" },
];

export default function JunglesPage() {
  const terrain = "jungles"; // used in query param

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center mb-6">🌳 Jungle Pokémon Rides</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {pokemons.map((pokemon, idx) => (
          <Link
            key={idx}
            href={`/arriving?terrain=${terrain}&pokemon=${encodeURIComponent(
              pokemon.name
            )}`}
          >
            <div className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer text-center">
              <Image
                src={pokemon.img}
                alt={pokemon.name}
                width={120}
                height={120}
                className="mx-auto"
              />
              <h3 className="mt-2 text-lg font-semibold">{pokemon.name}</h3>
              <p className="text-sm text-gray-600">{pokemon.ride}</p>
            </div>
          </Link>
        ))}
      </div>

      <PokemonMap />
    </div>
  );
}
