"use client";
import { useEffect } from "react";

const snowPokemons = [
  { ride: "Bike", name: "Snover 🌨", img: "/pokemons/snover.png", lat: 35.3606, lng: 138.7274 },
  { ride: "Auto", name: "Glalie ❄", img: "/pokemons/glalie.png", lat: 64.9631, lng: -19.0208 },
  { ride: "Mini", name: "Piloswine 🐗", img: "/pokemons/piloswine.png", lat: 46.8523, lng: -121.7603 },
  { ride: "Pro", name: "Mamoswine 🐘", img: "/pokemons/mamoswine.png", lat: 61.524, lng: 105.3188 },
  { ride: "Luxury", name: "Articuno ❄", img: "/pokemons/articuno.png", lat: 78.2232, lng: 15.6469 },
];

export default function PokemonMap() {
  useEffect(() => {
    // Import Leaflet dynamically
    import("leaflet").then((L) => {
      const map = L.map("pokemon-map").setView([60, 10], 2);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      // Fix default marker icon issue
      const DefaultIcon = L.icon({
        iconUrl: "/marker-icon.png",
        shadowUrl: "/marker-shadow.png",
      });
      L.Marker.prototype.options.icon = DefaultIcon;

      // Add markers
      snowPokemons.forEach((p) => {
        const marker = L.marker([p.lat, p.lng]).addTo(map);
        marker.bindPopup(`<b>${p.name}</b><br/>${p.ride}`);
      });
    });
  }, []);

  return <div id="pokemon-map" className="w-full h-96 rounded-lg shadow" />;
}
