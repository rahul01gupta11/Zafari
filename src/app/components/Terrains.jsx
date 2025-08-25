"use client";
import Image from "next/image";

const terrains = [
  {
    name: "🌿 Plains / Grasslands",
    pokemons: [
      { ride: "Bike (small)", name: "Pikachu ⚡", img: "/pokemons/pikachu.png" },
      { ride: "Auto (medium)", name: "Rapidash 🔥", img: "/pokemons/rapidash.png" },
      { ride: "Mini (big)", name: "Tauros 🐂", img: "/pokemons/tauros.png" },
      { ride: "Pro (strong)", name: "Arcanine 🐕", img: "/pokemons/arcanine.png" },
      { ride: "Luxury (legendary)", name: "Mewtwo 🧠", img: "/pokemons/mewtwo.png" },
    ],
  },
  {
    name: "🌳 Forests / Jungles",
    pokemons: [
      { ride: "Bike", name: "Bulbasaur 🌱", img: "/pokemons/bulbasaur.png" },
      { ride: "Auto", name: "Leafeon 🍃", img: "/pokemons/leafeon.png" },
      { ride: "Mini", name: "Venusaur 🌿", img: "/pokemons/venusaur.png" },
      { ride: "Pro", name: "Snorlax 😴", img: "/pokemons/snorlax.png" },
      { ride: "Luxury", name: "Celebi ⏳", img: "/pokemons/celebi.png" },
    ],
  },
  {
    name: "⛰ Mountains / Rocky Areas",
    pokemons: [
      { ride: "Bike", name: "Geodude 🪨", img: "/pokemons/geodude.png" },
      { ride: "Auto", name: "Onix 🐍", img: "/pokemons/onix.png" },
      { ride: "Mini", name: "Rhydon 🦏", img: "/pokemons/rhydon.png" },
      { ride: "Pro", name: "Golem 🪨", img: "/pokemons/golem.png" },
      { ride: "Luxury", name: "Rayquaza 🌌", img: "/pokemons/rayquaza.png" },
    ],
  },
  {
    name: "🏜 Desert / Sand Dunes",
    pokemons: [
      { ride: "Bike", name: "Sandshrew 🐹", img: "/pokemons/sandshrew.png" },
      { ride: "Auto", name: "Sandslash 🪨", img: "/pokemons/sandslash.png" },
      { ride: "Mini", name: "Flygon 🐉", img: "/pokemons/flygon.png" },
      { ride: "Pro", name: "Garchomp 🐲", img: "/pokemons/garchomp.png" },
      { ride: "Luxury", name: "Groudon 🌋", img: "/pokemons/groudon.png" },
    ],
  },
  {
    name: "🌊 Water / Oceans / Rivers",
    pokemons: [
      { ride: "Bike", name: "Squirtle 🐢", img: "/pokemons/squirtle.png" },
      { ride: "Auto", name: "Psyduck 🦆", img: "/pokemons/psyduck.png" },
      { ride: "Mini", name: "Blastoise 💦", img: "/pokemons/blastoise.png" },
      { ride: "Pro", name: "Lapras 🐢", img: "/pokemons/lapras.png" },
      { ride: "Luxury", name: "Kyogre 🌊", img: "/pokemons/kyogre.png" },
    ],
  },
  {
    name: "❄ Snow / Ice Regions",
    pokemons: [
      { ride: "Bike", name: "Snover 🌨", img: "/pokemons/snover.png" },
      { ride: "Auto", name: "Glalie ❄", img: "/pokemons/glalie.png" },
      { ride: "Mini", name: "Piloswine 🐗", img: "/pokemons/piloswine.png" },
      { ride: "Pro", name: "Mamoswine 🐘", img: "/pokemons/mamoswine.png" },
      { ride: "Luxury", name: "Articuno ❄", img: "/pokemons/articuno.png" },
    ],
  },
];

export default function Terrains() {
  return (
    <div className="p-6 space-y-10">
      {terrains.map((terrain, i) => (
        <div key={i} className="space-y-4">
          <h2 className="text-2xl font-bold">{terrain.name}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {terrain.pokemons.map((pokemon, j) => (
              <div
                key={j}
                className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <Image
                  src={pokemon.img}
                  alt={pokemon.name}
                  width={120}
                  height={120}
                  className="mx-auto"
                />
                <h3 className="mt-2 text-lg font-semibold text-center">{pokemon.name}</h3>
                <p className="text-sm text-gray-600 text-center">{pokemon.ride}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
