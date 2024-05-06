import { useEffect } from "react";

export const useInfiniteLoad = (ref, data, cb) => {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.7,
    };

    const obsCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (data.length === 0) return;
        // if (page === Math.ceil(DATA.length / DATA_PER_PAGE)) return;

        cb();

        observer.unobserve(entry.target);
      });
    };
    const observer = new IntersectionObserver(obsCallback, options);
    let copy_ref;
    if (ref.current) {
      copy_ref = ref.current;
      observer.observe(ref.current);
    }

    return () => {
      if (copy_ref) observer.unobserve(copy_ref);
    };
  }, [data]);
};
