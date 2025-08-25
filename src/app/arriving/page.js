"use client";
import { useSearchParams, useRouter } from "next/navigation";

// Array of random Pokémon messages
const cantArriveMessages = [
  "Your Pokémon is busy hosting a taco party in the tall grass.",
  "Your Pokémon is currently moonlighting as a magician—don’t spoil the trick!",
  "Your Pokémon is in deep meditation, trying to levitate a Pokéball.",
  "Your Pokémon is busy tearing up the dance floor at an invisible disco.",
  "Your Pokémon is painting a self-portrait with berries as colors.",
  "Your Pokémon is slurping noodles at its favorite secret ramen shop.",
  "Your Pokémon is writing a diary entry about “humans and their weird habits.”",
  "Your Pokémon is chilling on a beach chair somewhere, sipping a coconut drink.",
  "Your Pokémon is pedaling a tiny bike around the park.",
  "Your Pokémon is sneaking cookies from Professor Oak’s kitchen.",
  "Your Pokémon is on a top-secret spy mission—classified info only!",
  "Your Pokémon is plotting an epic prank with a Meowth gang.",
  "Your Pokémon might be time traveling—who can say?",
  "Your Pokémon is writing letters to its long-lost friend in the wild.",
  "🎭 Your Pokémon is undercover in a theater play, playing the villain."
];

// Function to pick a random message
function getRandomCantArriveMessage() {
  const randomIndex = Math.floor(Math.random() * cantArriveMessages.length);
  return cantArriveMessages[randomIndex];
}

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

  const randomMessage = getRandomCantArriveMessage();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 p-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
        🚫 {randomMessage}
      </h1>

      {/* Animated GIF */}
      <div className="relative w-64 h-64 pt-20">
        <img
          src="/GIF/pikachu-running.gif"
          alt="Running Pokémon"
          className="w-full h-full object-contain animate-bounce"
        />
      </div>

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
