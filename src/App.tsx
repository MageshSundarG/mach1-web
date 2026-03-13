import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import OperationsSolution from "./pages/OperationsSolution";
import AOS from "aos";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
    useEffect(() => {
    // AOS.init({
    //   duration: 800,       // animation duration
    //   easing: "ease-in-out",
    //   once: true,          // animation only once
    //   offset: 120,         // trigger distance
    // });
    AOS.init({
  duration: 700,
  easing: "ease-out-cubic",
  once: true,
  mirror: false,
  disable: "mobile", // optional for performance
});

  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route
            path="/solutions/operations"
            element={<OperationsSolution />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
