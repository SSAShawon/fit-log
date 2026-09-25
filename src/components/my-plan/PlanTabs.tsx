"use client";

interface PlanTabsProps {
  activeTab: "today" | "saved";
  setActiveTab: React.Dispatch<React.SetStateAction<"today" | "saved">>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const PlanTabs = ({
  activeTab,
  setActiveTab,
  sortBy,
  setSortBy,
}: PlanTabsProps) => {
  return (
    <div className="my-5 flex items-center justify-between">
      {/* Today / Saved */}
      <div className="flex w-fit rounded-xl border border-zinc-800 bg-zinc-900 p-1">
        <button
          onClick={() => setActiveTab("today")}
          className={`rounded-xl px-5 py-2 text-sm font-semibold ${
            activeTab === "today" ? "bg-gray-300 text-black" : "text-gray-400"
          }`}
        >
          Today&apos;s Plan
        </button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`rounded-xl px-5 py-2 text-sm font-semibold ${
            activeTab === "saved" ? "bg-gray-300 text-black" : "text-gray-400"
          }`}
        >
          Saved
        </button>
      </div>

      {/* Sort Dropdown */}
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="flex min-w-40 cursor-pointer items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#c2f800]/50"
        >
          <span>
            Sort By:{" "}
            <span className="text-[#c2f800]">
              {sortBy === "duration"
                ? "Duration"
                : sortBy === "calories"
                  ? "Calories"
                  : "Rating"}
            </span>
          </span>

          <span className="text-gray-400">⌄</span>
        </div>

        <ul
          tabIndex={0}
          onClick={() => (document.activeElement as HTMLElement)?.blur()}
          className="dropdown-content menu z-10 mt-2 w-44 rounded-xl border border-zinc-800 bg-zinc-950 p-2 shadow-xl"
        >
          <li>
            <button tabIndex={0} onClick={() => setSortBy("duration")}>
              Duration
            </button>
          </li>

          <li>
            <button tabIndex={0} onClick={() => setSortBy("calories")}>
              Calories
            </button>
          </li>

          <li>
            <button tabIndex={0} onClick={() => setSortBy("rating")}>
              Rating
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlanTabs;