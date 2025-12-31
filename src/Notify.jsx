import { getWordOfTheDay } from "./utils/getWordOfTheDay";

export default function Notify() {
  const word = getWordOfTheDay();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">Word of the Day</h1>

      <p className="mt-6 text-3xl text-blue-600">
        {word.word}
      </p>

      <p className="mt-2 text-2xl text-gray-700">
        {word.meaning}
      </p>
    </div>
  );
}
