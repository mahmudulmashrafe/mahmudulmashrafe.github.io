import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";

const queryClient = new QueryClient();

const HashScrollHandler = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.slice(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          // Remove previous highlight
          document.querySelectorAll(".scroll-highlight").forEach((el) => {
            el.classList.remove("scroll-highlight");
          });
          
          setTimeout(() => {
            // Add highlight animation
            element.classList.add("scroll-highlight");
            element.scrollIntoView({ behavior: "smooth" });
            
            // Remove highlight after animation
            setTimeout(() => {
              element.classList.remove("scroll-highlight");
            }, 2000);
          }, 100);
        }
      }
    };

    // Handle on mount
    handleHashChange();
    
    // Handle hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashScrollHandler />
      <Index />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
