"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import L from "leaflet";
import { FaMapMarkerAlt, FaMapPin, FaMountain } from "react-icons/fa";

// Fix default icon issue in Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const Hero = () => {
  const router = useRouter();
  const [terrain, setTerrain] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropoffSuggestions, setDropoffSuggestions] = useState([]);
  const [pickupSelected, setPickupSelected] = useState(false);
  const [dropoffSelected, setDropoffSelected] = useState(false);

  const [pickupCoords, setPickupCoords] = useState(null);
  const [dropoffCoords, setDropoffCoords] = useState(null);

  // Fetch suggestions from Nominatim
  const fetchSuggestions = async (query, setSuggestions) => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
      );
      const data = await res.json();
      setSuggestions(data);
    } catch (err) {
      console.error(err);
    }
  };

  const selectSuggestion = (place, setValue, setSuggestions, setSelected, setCoords) => {
    setValue(place.display_name);
    setSuggestions([]);
    setSelected(true);
    setCoords([parseFloat(place.lat), parseFloat(place.lon)]); // Save coordinates for map
  };

  const handleSeePrices = () => {
    if (!terrain) {
      alert("Please select a terrain!");
      return;
    }
    if (!pickupSelected) {
      alert("Pickup location is invalid. Please select a suggested location.");
      return;
    }
    if (!dropoffSelected) {
      alert("Dropoff location is invalid. Please select a suggested location.");
      return;
    }
    router.push(`/${terrain}`);
  };

  return (
    <div className="flex flex-col max-w-5xl mx-auto my-12 gap-10 px-4 font-sans">
      {/* Inputs */}
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Go anywhere with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 animate-[shine_2s_ease-in-out_infinite]">
              Zafari
            </span>
          </h1>

          <div className="mb-5 space-y-3">
            {/* Pickup */}
            <div className="relative">
              <div className="flex items-center border border-gray-300 rounded-lg p-4 gap-3">
                <FaMapMarkerAlt className="text-gray-500 text-xl" />
                <input
                  type="text"
                  placeholder="Pickup location"
                  className="flex-1 text-lg outline-none"
                  value={pickup}
                  onChange={(e) => {
                    setPickup(e.target.value);
                    fetchSuggestions(e.target.value, setPickupSuggestions);
                    setPickupSelected(false);
                  }}
                />
              </div>
              {pickupSuggestions.length > 0 && (
                <ul className="absolute bg-white border border-gray-300 rounded-lg w-full max-h-48 overflow-y-auto z-10">
                  {pickupSuggestions.map((place) => (
                    <li
                      key={place.place_id}
                      className="p-3 hover:bg-gray-100 cursor-pointer"
                      onClick={() =>
                        selectSuggestion(
                          place,
                          setPickup,
                          setPickupSuggestions,
                          setPickupSelected,
                          setPickupCoords
                        )
                      }
                    >
                      {place.display_name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Dropoff */}
            <div className="relative">
              <div className="flex items-center border border-gray-300 rounded-lg p-4 gap-3">
                <FaMapPin className="text-gray-500 text-xl" />
                <input
                  type="text"
                  placeholder="Dropoff location"
                  className="flex-1 text-lg outline-none"
                  value={dropoff}
                  onChange={(e) => {
                    setDropoff(e.target.value);
                    fetchSuggestions(e.target.value, setDropoffSuggestions);
                    setDropoffSelected(false);
                  }}
                />
              </div>
              {dropoffSuggestions.length > 0 && (
                <ul className="absolute bg-white border border-gray-300 rounded-lg w-full max-h-48 overflow-y-auto z-10">
                  {dropoffSuggestions.map((place) => (
                    <li
                      key={place.place_id}
                      className="p-3 hover:bg-gray-100 cursor-pointer"
                      onClick={() =>
                        selectSuggestion(
                          place,
                          setDropoff,
                          setDropoffSuggestions,
                          setDropoffSelected,
                          setDropoffCoords
                        )
                      }
                    >
                      {place.display_name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Terrain */}
            <div className="flex items-center border border-gray-300 rounded-lg p-4 gap-3">
              <FaMountain className="text-gray-500 text-xl" />
              <select
                className="w-full p-4 text-lg rounded-lg focus:outline-none bg-white text-gray-700"
                value={terrain}
                onChange={(e) => setTerrain(e.target.value)}
              >
                <option value="" disabled>
                  Select Terrain
                </option>
                <option value="plains">Plains</option>
                <option value="jungles">Jungles</option>
                <option value="mountains">Mountains</option>
                <option value="deserts">Deserts</option>
                <option value="water">Water</option>
                <option value="snow">Snow</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleSeePrices}
            className="bg-black text-white py-4 px-8 text-lg rounded-lg hover:bg-gray-800 transition w-full"
          >
            See prices
          </button>
        </div>

        {/* Map */}
        <div className="flex-1 h-[400px]">
          <MapContainer
            center={pickupCoords || [20, 77]}
            zoom={6}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
            />
            {pickupCoords && (
              <Marker position={pickupCoords}>
                <Popup>Pickup: {pickup}</Popup>
              </Marker>
            )}
            {dropoffCoords && (
              <Marker position={dropoffCoords}>
                <Popup>Dropoff: {dropoff}</Popup>
              </Marker>
            )}
            {pickupCoords && dropoffCoords && (
              <Polyline positions={[pickupCoords, dropoffCoords]} color="blue" />
            )}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Hero;
