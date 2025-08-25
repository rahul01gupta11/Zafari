"use client";
import { useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";

export default function PokemonMap({ pickup, dropoff }) {
  useEffect(() => {
    const map = L.map("pokemon-map").setView([20, 77], 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const bounds = [];

    // Function to create DivIcon from React Icon
    const createDivIcon = (color = "red") =>
      L.divIcon({
        html: ReactDOMServer.renderToString(
          <FaMapMarkerAlt color={color} size={30} />
        ),
        className: "",
        iconSize: [30, 30],
        iconAnchor: [15, 30],
      });

    // Pickup marker
    if (pickup?.lat && pickup?.lng) {
      L.marker([pickup.lat, pickup.lng], { icon: createDivIcon("red") })
        .addTo(map)
        .bindPopup(`📍 Pickup: ${pickup.name}`);
      bounds.push([pickup.lat, pickup.lng]);
    }

    // Dropoff marker
    if (dropoff?.lat && dropoff?.lng) {
      L.marker([dropoff.lat, dropoff.lng], { icon: createDivIcon("green") })
        .addTo(map)
        .bindPopup(`🏁 Dropoff: ${dropoff.name}`);
      bounds.push([dropoff.lat, dropoff.lng]);
    }

    // Draw polyline if both pickup & dropoff exist
    if (pickup?.lat && dropoff?.lat) {
      L.polyline(
        [
          [pickup.lat, pickup.lng],
          [dropoff.lat, dropoff.lng],
        ],
        { color: "blue", weight: 4 }
      ).addTo(map);
    }

    // Zoom map to show markers
    if (bounds.length > 0) {
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [pickup, dropoff]);

  return <div id="pokemon-map" className="w-full h-96 rounded-lg shadow" />;
}
