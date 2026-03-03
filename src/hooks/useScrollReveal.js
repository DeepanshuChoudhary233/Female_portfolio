import { useEffect, useRef } from 'react';

export const useScrollReveal = (threshold = 0.15, delay = 0) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.classList.add('revealed');
          }, delay);
          observer.unobserve(entry);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, delay]);

  return ref;
};