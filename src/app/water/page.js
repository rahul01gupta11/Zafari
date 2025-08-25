"use client";
import Image from "next/image";
import Link from "next/link";
import PokemonMap from "../components/PokemonMap";

const pokemons = [
  { ride: "Bike", name: "Squirtle 🐢", img: "/images/squirtle.png" },
  { ride: "Auto", name: "Psyduck 🦆", img: "/images/psyduck.png" },
  { ride: "Mini", name: "Blastoise 💦", img: "/images/blastoise.png" },
  { ride: "Pro", name: "Lapras 🐢", img: "/images/lapras.png" },
  { ride: "Luxury", name: "Palkia 🌊", img: "/images/palkia.png" },
];

export default function WaterPage() {
  const terrain = "water"; // used in query param

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center mb-6">🌊 Water Pokémon Rides</h1>

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
