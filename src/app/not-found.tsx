import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-black px-6 text-center text-white">
      <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-[#c2f800]">
        ERROR 404
      </p>

      <h1 className="text-6xl font-black md:text-8xl"> NOT FOUND</h1>

      <p className="mt-5 max-w-md text-gray-400">
        The workout or page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-full bg-[#c2f800] px-6 py-3 font-bold text-black transition hover:bg-[#d0ff33]"
      >
        BACK TO FITLOG
      </Link>
    </div>
  );
};

export default NotFound;