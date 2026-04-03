import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";

const queryClient = new QueryClient();

const SectionAnimationHandler = () => {
  useEffect(() => {
    const handleHashChange = () => {
      // When navigating to a section via navbar, add fade-in animation
      const id = window.location.hash.slice(1);
      if (id) {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.classList.add("animate-fade-in");
          }
        }, 150);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return null;
};

const HashScrollHandler = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.slice(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    // Always scroll to home on page load/refresh
    const homeElement = document.getElementById("home");
    if (homeElement) {
      setTimeout(() => {
        homeElement.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    
    // Handle hash changes (clicking navbar links)
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
      <SectionAnimationHandler />
      <HashScrollHandler />
      <Index />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
