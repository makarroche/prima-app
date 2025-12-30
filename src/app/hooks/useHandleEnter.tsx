import { useEffect } from "react";

export const useHandleEnter = (setModalOpen: (isOpen: boolean) => void) => {
  useEffect(() => {
    const handleEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        setModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleEnter);
    return () => {
      document.removeEventListener("keydown", handleEnter);
    };
  }, [setModalOpen]);
};
