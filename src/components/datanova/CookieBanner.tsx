import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { X, Cookie } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Only run on client side
    setHasLoaded(true);
    const cookieConsent = localStorage.getItem("datanova_cookie_consent");
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("datanova_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("datanova_cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!hasLoaded) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md pointer-events-none"
        >
          <div className="bg-card border border-border shadow-xl rounded-2xl p-6 pointer-events-auto flex flex-col gap-4 relative overflow-hidden">
            <button
              onClick={handleDecline}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors rounded-full p-1 hover:bg-accent"
              aria-label="Close cookie banner"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="flex items-start gap-3">
              
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1 text-base">We use cookies</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies as described in our{" "}
                  <Link to="/privacy-policy" className="text-primary hover:underline font-medium">
                    Privacy Policy
                  </Link>.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end mt-2">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-sm font-medium text-foreground bg-accent hover:bg-accent/80 border border-border rounded-xl transition-colors w-full sm:w-auto"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 shadow-sm rounded-xl transition-colors w-full sm:w-auto"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
