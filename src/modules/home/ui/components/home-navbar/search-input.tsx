import { SearchIcon } from "lucide-react";

export const SearchInput = () => {
  // TODO: Add search functionality
  return (
    <form className="flex w-full max-w-150">
      <div className="relative w-full">
        <input
          className="py-2 pr-12 pl-4 w-full rounded-l-full border focus:outline-none focus:border-blue-500"
          placeholder="Search"
          type="text"
        />
        {/* TODO: Add remove search button */}
      </div>
      <button
        className="px-5 py-2.5 bg-gray-100 border border-l-0 rounded-r-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
      >
        <SearchIcon className="size-5" />
      </button>
    </form>
  );
};
