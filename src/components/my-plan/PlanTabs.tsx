"use client";

import { ChevronDown } from "lucide-react";

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
    <div className="my-5 flex items-center justify-between gap-2">
      <div className="flex w-fit rounded-xl border border-zinc-800 bg-zinc-900 p-1">
        <button
          onClick={() => setActiveTab("today")}
          className={`rounded-xl px-3 py-2 text-xs font-semibold md:px-5 md:text-sm ${
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

      {/*  Dropdown */}
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="flex min-w-32 cursor-pointer items-center justify-between gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs font-semibold text-white transition hover:border-[#c2f800]/50 md:min-w-40 md:gap-3 md:px-4 md:py-3 md:text-sm"
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

          <ChevronDown size={16} className="text-gray-400" />
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
