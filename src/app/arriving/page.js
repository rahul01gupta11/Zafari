"use client";
import { useSearchParams, useRouter } from "next/navigation";

export default function ArrivingPage() {
  const search = useSearchParams();
  const router = useRouter();

  const terrain = search.get("terrain");
  const pokemon = search.get("pokemon");

  if (!terrain || !pokemon) {
    return (
      <div className="min-h-screen grid place-items-center bg-gray-50 p-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Missing info</h1>
          <p className="mt-2 text-gray-600">
            We didn’t get the terrain or Pokémon. Please select again.
          </p>
          <button
            onClick={() => router.push("/")}
            className="mt-6 px-5 py-3 rounded-xl bg-black text-white"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 p-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
        🚫 {pokemon} can’t arrive in {terrain.charAt(0).toUpperCase() + terrain.slice(1)}
      </h1>

      {/* Use <img> for animated GIFs */}
      <div className="relative w-64 h-64">
        <img
          src="/GIF/pikachu-running.gif"
          alt="Running Pokémon"
          className="w-full h-full object-contain animate-bounce"
        />
      </div>

      <p className="mt-6 text-gray-700 text-lg text-center">
        Try another Pokémon or a different terrain.
      </p>

      <div className="mt-8 flex gap-3">
        <button
          onClick={() => router.back()}
          className="px-6 py-3 bg-white border rounded-2xl shadow hover:bg-gray-50"
        >
          Go Back
        </button>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700"
        >
          Home
        </button>
      </div>
    </div>
  );
}
