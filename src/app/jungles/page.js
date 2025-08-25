"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import PokemonMap from "../components/PokemonMap";

const junglePokemons = [
  { ride: "PokeDash", name: "Bulbasaur ", img: "/images/bulbasaur.png" },
  { ride: "PokePod", name: "Leafeon ", img: "/images/leafeon.webp" },
  { ride: "PokeGo", name: "Venasaur ", img: "/images/venasaur.png" },
  { ride: "PokeXpress", name: "Snorlax ", img: "/images/snorlax.png" },
  { ride: "PokeElite", name: "Celebi ", img: "/images/celebi.png" },
];

export default function JunglesPage() {
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

  const terrain = "jungles";

  return (
    <div className="p-6 space-y-10 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6">🌳 Jungle Pokémon Rides</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {junglePokemons.map((pokemon, idx) => (
          <Link
            key={idx}
            href={`/arriving?terrain=${terrain}&pokemon=${encodeURIComponent(
              pokemon.name
            )}`}
          >
            <div className="p-4 bg-black rounded-2xl shadow hover:shadow-lg transition cursor-pointer text-center h-60 flex flex-col justify-center">
              <Image
                src={pokemon.img}
                alt={pokemon.name}
                width={90}
                height={90}
                className="mx-auto"
              />
              <h3 className="mt-2 text-xl text-white font-semibold">{pokemon.name}</h3>
              <p className="text-md text-blue-300">{pokemon.ride}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Map with pickup/dropoff */}
      <PokemonMap pickup={pickup} dropoff={dropoff} pokemons={junglePokemons} />
    </div>
  );
}
