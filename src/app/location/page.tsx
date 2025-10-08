"use client";

import dynamic from "next/dynamic";

const MapPage = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => <p className="text-center mt-10">Loading map...</p>,
});

export default function LocationPage() {
  return <MapPage />;
}
