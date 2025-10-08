"use client";

import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion } from "framer-motion";
import { IconPin, IconSearch } from "@tabler/icons-react";

// Dummy wash branches
const branches = [
  { name: "East Legon", lat: 5.6375, lng: -0.173 },
  { name: "Osu", lat: 5.56, lng: -0.185 },
  { name: "Airport Residential", lat: 5.6055, lng: -0.1738 },
  { name: "Tema", lat: 5.69, lng: -0.02 },
];

// Custom icons
const userIcon = new L.Icon({
  iconUrl:
    "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-blue.png",
  iconSize: [30, 45],
  iconAnchor: [15, 45],
});

const branchIcon = new L.Icon({
  iconUrl:
    "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-red.png",
  iconSize: [30, 45],
  iconAnchor: [15, 45],
});

const recommendedIcon = new L.Icon({
  iconUrl:
    "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-yellow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Haversine distance helper
function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Recenter helper
const Recenter = ({ lat, lng }: { lat: number; lng: number }) => {
  const map = useMap();
  map.setView([lat, lng], 13, { animate: true });
  return null;
};

const MapComponent = () => {
  const [query, setQuery] = useState("");
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [nearestBranch, setNearestBranch] = useState<typeof branches[0] | null>(null);
  const [searchedBranch, setSearchedBranch] = useState<typeof branches[0] | null>(null);

  // Get user’s current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setUserLocation({ lat: latitude, lng: longitude });

          // Find nearest branch
          let closest = branches[0];
          let minDist = Infinity;
          for (const branch of branches) {
            const dist = getDistance(latitude, longitude, branch.lat, branch.lng);
            if (dist < minDist) {
              minDist = dist;
              closest = branch;
            }
          }
          setNearestBranch(closest);
        },
        (err) => console.error("Geolocation error:", err)
      );
    }
  }, []);

  // Handle manual branch search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const found = branches.find(
      (b) => b.name.toLowerCase() === query.trim().toLowerCase()
    );
    if (found) {
      setSearchedBranch(found);
      setNearestBranch(null); // hide auto-nearest if user searches
    } else {
      setSearchedBranch(null);
    }
  };

  return (
    <main className="relative h-screen w-screen">
      <MapContainer
        center={userLocation ? [userLocation.lat, userLocation.lng] : [5.6037, -0.187]}
        zoom={12}
        className="h-full w-full"
      >
        {/* Satellite tiles */}
        <TileLayer
          url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
          attribution="&copy; Google Maps"
        />

        {/* User marker */}
        {userLocation && (
          <>
            <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
              <Popup>
                <IconPin className="h-5 w-5" color="red" /> You are here
              </Popup>
            </Marker>
            <Recenter lat={userLocation.lat} lng={userLocation.lng} />
          </>
        )}

        {/* Nearest branch marker + path */}
        {nearestBranch && userLocation && (
          <>
            <Marker
              position={[nearestBranch.lat, nearestBranch.lng]}
              icon={recommendedIcon}
            >
              <Popup>⭐ Nearest: {nearestBranch.name}</Popup>
            </Marker>
            <Polyline
              positions={[
                [userLocation.lat, userLocation.lng],
                [nearestBranch.lat, nearestBranch.lng],
              ]}
              pathOptions={{ color: "yellow", weight: 4, dashArray: "8,6" }}
            />
          </>
        )}

        {/* Searched branch marker + path */}
        {searchedBranch && userLocation && (
          <>
            <Marker
              position={[searchedBranch.lat, searchedBranch.lng]}
              icon={branchIcon}
            >
              <Popup>✅ {searchedBranch.name}</Popup>
            </Marker>
            <Polyline
              positions={[
                [userLocation.lat, userLocation.lng],
                [searchedBranch.lat, searchedBranch.lng],
              ]}
              pathOptions={{ color: "red", weight: 4 }}
            />
          </>
        )}
      </MapContainer>

      {/* Search bar */}
      <motion.form
        onSubmit={handleSearch}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute top-6 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-md"
      >
        <div className="flex items-center bg-black/70 backdrop-blur-xl border border-yellow-500/30 shadow-xl rounded-2xl px-4 py-2">
          <input
            type="text"
            placeholder="Search for a branch..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="ml-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-xl font-semibold hover:from-yellow-300 hover:to-yellow-500 transition"
          >
            <IconSearch size={18} />
          </button>
        </div>
      </motion.form>
    </main>
  );
};

export default MapComponent;
