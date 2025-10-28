import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // Only scroll to top if it's a full page navigation, not an internal section scroll.
    // If 'scrollToSection' is present in the state, it means an internal smooth scroll
    // is intended, so we should not override it with an instant scroll to top.
    if (!state?.scrollToSection) {
      window.scrollTo({ top: 0, behavior: 'auto' }); // Instantly scroll to the top
    }
  }, [pathname, state]); // Re-run effect when pathname or state changes

  return null; // This component does not render any UI
}
