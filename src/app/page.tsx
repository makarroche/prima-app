"use client";

import Button from "./components/Button";
import Filter from "./components/Filter";
import { useState } from "react";
import { useCleanSearch } from "./hooks/useCleanSearch";

export default function Home() {
  const [searchText, setSearchText] = useState<string>("");
  const [searchClick, setSearchClick] = useState<boolean>(false);
  useCleanSearch(searchText, setSearchClick);

  const handleChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchClick(true);
  };

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className="container">
      <div className="dashboard">
        <p className="heading">
          <span className="heading-gradient">User</span> Dashboard
        </p>
        <span className="subtitle">WHAT ARE YOU LOOKING FOR?</span>
        <div className="search-input">
          <input
            aria-label="Search"
            className="text-large input"
            placeholder="Search by name..."
            value={searchText}
            onChange={handleChangeSearchText}
            onKeyDown={handleEnter}
          />
          <Button
            type="button-search"
            onClick={handleSearchClick}
            onKeyDown={handleEnter}
          >
            Search
          </Button>
        </div>
      </div>
      {searchText && searchClick && (
        <Filter searchText={searchText} searchClick={searchClick} />
      )}
    </div>
  );
}
