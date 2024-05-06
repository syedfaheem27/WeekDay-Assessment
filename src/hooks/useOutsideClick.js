import { useEffect } from "react";

export const useOutsideclick = (identifier, cb) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      const target = e.target.closest(identifier);
      if (target !== null) return;

      cb();
    };

    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, [identifier]);
};
