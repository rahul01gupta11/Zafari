"use client";
import Image from "next/image";
import Link from "next/link";
import PokemonMap from "../components/PokemonMap";

const pokemons = [
  { ride: "Bike", name: "Geodude 🪨", img: "/images/geodude.png" },
  { ride: "Auto", name: "Onix 🐍", img: "/images/onix.png" },
  { ride: "Mini", name: "Rhydon 🦏", img: "/images/rhydon.png" },
  { ride: "Pro", name: "Golem 🪨", img: "/images/golem.png" },
  { ride: "Luxury", name: "Rayquaza 🌌", img: "/images/rayquaza.png" },
];

export default function MountainsPage() {
  const terrain = "mountains"; // used in query param

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center mb-6">⛰ Mountain Pokémon Rides</h1>

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
