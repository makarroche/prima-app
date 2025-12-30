import { useEffect } from "react";

export const useCleanSearch = (
  searchText: string,
  setSearchClick: (click: boolean) => void
) => {
  useEffect(() => {
    if (searchText === "") {
      setSearchClick(false);
    }
  }, [searchText, setSearchClick]);
};
