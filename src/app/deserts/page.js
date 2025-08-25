"use client";
import Image from "next/image";
import Link from "next/link";
import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import L from "leaflet";
import { useState } from "react";

const pokemons = [
  { ride: "Bike", name: "Sandshrew 🐹", img: "/images/sandshrew.png" },
  { ride: "Auto", name: "Sandslash 🪨", img: "/images/sandslash.webp" },
  { ride: "Mini", name: "Flygon 🐉", img: "/images/flygon.png" },
  { ride: "Pro", name: "Garchomp 🐲", img: "/images/garchomp.png" },
  { ride: "Luxury", name: "Groudon 🌋", img: "/images/groudon.png" },
];

// Fix leaflet default icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

export default function DesertsPage() {
  const terrain = "deserts"; // used in query param

  // Example: coordinates for pickup & dropoff
  // In practice, get these from Hero component or query params
  const [pickupCoords, setPickupCoords] = useState([25.276987, 55.296249]); // Example desert pickup
  const [dropoffCoords, setDropoffCoords] = useState([26.820553, 30.802498]); // Example desert dropoff

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center mb-6">🏜 Desert Pokémon Rides</h1>

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

      {/* Map showing pickup & dropoff + path */}
      <div className="h-[400px] mt-10">
        <MapContainer
          center={pickupCoords}
          zoom={5}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
          />

          {/* Markers */}
          {pickupCoords && (
            <Marker position={pickupCoords}>
              <Popup>Pickup Location</Popup>
            </Marker>
          )}
          {dropoffCoords && (
            <Marker position={dropoffCoords}>
              <Popup>Dropoff Location</Popup>
            </Marker>
          )}

          {/* Polyline between locations */}
          {pickupCoords && dropoffCoords && (
            <Polyline positions={[pickupCoords, dropoffCoords]} color="blue" />
          )}
        </MapContainer>
      </div>
    </div>
  );
}
