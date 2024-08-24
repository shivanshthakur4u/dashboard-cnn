import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Search } from "lucide-react";
import { setSearchTerm } from "src/features/dashboardSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.dashboard.searchTerm);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="border border-[#e6effb] bg-[#f0f5fa] rounded-md flex items-center gap-1.5 px-2 py-1">
      <Search size={16} color="#c9d5e0" />
      <input
        type="text"
        placeholder="Search anything..."
        value={searchTerm}
        onChange={handleSearch}
        className="border-none bg-[#f0f5fa] focus:border-none focus:outline-none
         placeholder:text-[#c8cccf] text-[#969da8] lg:w-64 w-20 md:w-36"
      />
    </div>
  );
};

export default SearchBar;
