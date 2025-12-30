import { useEffect } from "react";

export const useHandleEscape = (setModalOpen: (isOpen: boolean) => void) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [setModalOpen]);
};
