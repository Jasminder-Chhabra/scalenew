"use client";
import { memo, useMemo } from "react";
import dynamic from "next/dynamic";

const WorldMapCanvas = dynamic(() => import("../ui/world-map").then(m => m.WorldMap), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center text-neutral-500">
      Loading map...
    </div>
  ),
});


const dotsData = [
  { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
  { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } },
  { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } },
  { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } },
  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } },
];

function WorldMapDemoComponent() {
  const dots = useMemo(() => dotsData, []);

  return (
    <div
      className="py-20 dark:bg-black bg-white w-full"
      data-appear="fade-up"
      data-unload="fade-up"
    >
      <div className="max-w-3xl mx-auto text-center mb-10">
        <div className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Our Clients across the world
        </div>
        <div className="text-sm md:text-lg text-neutral-500 py-4">
          At ScaleUs, we proudly collaborate with clients across the globe,
          delivering scalable digital solutions that drive growth and innovation.
          Our global partnerships reflect our commitment to quality, performance,
          and lasting impact.
        </div>
      </div>

      <WorldMapCanvas dots={dots} />
    </div>
  );
}

export const WorldMapDemo = memo(WorldMapDemoComponent);
