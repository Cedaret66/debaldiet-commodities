import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const smoother = ScrollSmoother.get();
          if (smoother) {
            smoother.scrollTo(element, true, 'top 90px');
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 120);
    } else {
      const smoother = ScrollSmoother.get();
      if (smoother) {
        smoother.scrollTop(0);
      } else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      }
    }
  }, [pathname, hash]);

  return null;
}
