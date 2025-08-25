"use client";
import Image from "next/image";
import Link from "next/link";
import PokemonMap from "../components/PokemonMap";

const snowPokemons = [
  { ride: "Bike", name: "Snover 🌨", img: "/images/snover.png" },
  { ride: "Auto", name: "Glalie ❄", img: "/images/glalie.png" },
  { ride: "Mini", name: "Cloyster 🐗", img: "/images/Cloyster.png" },
  { ride: "Pro", name: "Mamoswine 🐘", img: "/images/mamoswine.png" },
  { ride: "Luxury", name: "Articuno ❄", img: "/images/articuno.png" },
];

export default function Snow() {
  return (
    <div className="p-6 space-y-10 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center">❄ Snow / Ice Regions</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {snowPokemons.map((pokemon, i) => (
          <Link
            key={i}
            href={`/arriving?terrain=snow&pokemon=${encodeURIComponent(pokemon.name)}`}
          >
            <div className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
              <Image
                src={pokemon.img}
                alt={pokemon.name}
                width={120}
                height={120}
                className="mx-auto"
              />
              <h3 className="mt-2 text-lg font-semibold text-center">
                {pokemon.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">{pokemon.ride}</p>
            </div>
          </Link>
        ))}
      </div>

      <PokemonMap />

    </div>
  );
}
