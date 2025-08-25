"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import PokemonMap from "../components/PokemonMap";

const snowPokemons = [
  { ride: "PokeDash", name: "Snover", img: "/images/snover.png" },
  { ride: "PokePod", name: "Glalie", img: "/images/glalie.png" },
  { ride: "PokeGo", name: "Cloyster", img: "/images/Cloyster.png" },
  { ride: "PokeXpress", name: "Mamoswine", img: "/images/mamoswine.png" },
  { ride: "PokeElite", name: "Articuno", img: "/images/articuno.png" },
];

export default function Snow() {
  const searchParams = useSearchParams();

  const pickup = {
    name: searchParams.get("pickup"),
    lat: parseFloat(searchParams.get("pickupLat")),
    lng: parseFloat(searchParams.get("pickupLng")),
  };

  const dropoff = {
    name: searchParams.get("dropoff"),
    lat: parseFloat(searchParams.get("dropoffLat")),
    lng: parseFloat(searchParams.get("dropoffLng")),
  };

  return (
    <div className="p-6 space-y-10 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center">❄ Snow / Ice Regions</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {snowPokemons.map((pokemon, i) => (
          <Link
            key={i}
            href={`/arriving?terrain=snow&pokemon=${encodeURIComponent(
              pokemon.name
            )}`}
          >
            <div className="p-4 bg-black rounded-2xl shadow hover:shadow-lg transition cursor-pointer h-60 flex flex-col justify-center">
              <Image
                src={pokemon.img}
                alt={pokemon.name}
                width={90}
                height={90}
                className="mx-auto"
              />
              <h3 className="mt-2 text-xl text-white font-bold text-center">
                {pokemon.name}
              </h3>
              <p className="text-md text-blue-300 text-center ">{pokemon.ride}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Map with pickup/dropoff */}
      <PokemonMap pickup={pickup} dropoff={dropoff} />
    </div>
  );
}
