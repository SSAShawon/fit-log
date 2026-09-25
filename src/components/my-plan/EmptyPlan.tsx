import Link from "next/link";

const EmptyPlan = () => {
  return (
    <div className="my-8 flex flex-col items-center justify-center border-2 border-dotted border-gray-800 p-20 text-center">
      <h2 className="text-2xl font-bold">NOTHING HERE YET</h2>

      <p className="mt-2 text-gray-400">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/"
        className="my-8 mt-6 rounded-full bg-[#c2f800] px-5 py-3 font-bold text-black"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default EmptyPlan;