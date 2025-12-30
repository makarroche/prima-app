import { useEffect, useRef } from "react";

export const useCleanSearch = (
  searchText: string,
  setSearchClick: (click: boolean) => void
) => {
  const prevSearchText = useRef(searchText);

  useEffect(() => {
    if (searchText === "") {
      setSearchClick(false);
    }

    if (searchText && searchText !== prevSearchText.current) {
      setSearchClick(false);
    }

    prevSearchText.current = searchText;
  }, [searchText, setSearchClick]);
};
