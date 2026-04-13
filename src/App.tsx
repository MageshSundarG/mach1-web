import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import OperationsSolution from "./pages/OperationsSolution";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
import Consultant from "./pages/Consultant";
import { useEffect } from "react";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminPostEditorPage from "./pages/admin/AdminPostEditorPage";
import { scrollToPageTop } from "@/lib/scrollToPageTop";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    let timeoutId: number | undefined;
    let rafId1 = 0;
    let rafId2 = 0;

    scrollToPageTop();
    rafId1 = window.requestAnimationFrame(() => {
      scrollToPageTop();
      rafId2 = window.requestAnimationFrame(scrollToPageTop);
    });
    timeoutId = window.setTimeout(scrollToPageTop, 180);

    return () => {
      window.cancelAnimationFrame(rafId1);
      window.cancelAnimationFrame(rafId2);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [location.pathname, location.search, location.hash]);

  return null;
};

const RouteEffects = () => {
  const location = useLocation();

  useEffect(() => {
    const registeredElements = new Set<HTMLElement>();

    const applyDelay = (element: HTMLElement) => {
      const delay = element.dataset.aosDelay;
      element.style.transitionDelay = delay ? `${delay}ms` : "";
    };

    const revealIfVisible = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const revealLine = viewportHeight * 0.88;
      return rect.top <= revealLine && rect.bottom >= 0;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    const registerElement = (element: HTMLElement) => {
      if (registeredElements.has(element)) {
        return;
      }

      registeredElements.add(element);
      applyDelay(element);
      element.classList.remove("is-visible");

      if (revealIfVisible(element)) {
        element.classList.add("is-visible");
        return;
      }

      observer.observe(element);
    };

    const registerTree = (root: ParentNode) => {
      const scopedElements =
        root instanceof HTMLElement && root.matches("[data-aos]")
          ? [root, ...Array.from(root.querySelectorAll<HTMLElement>("[data-aos]"))]
          : Array.from(root.querySelectorAll<HTMLElement>("[data-aos]"));

      scopedElements.forEach(registerElement);
    };

    registerTree(document);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            registerTree(node);
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    let timeoutId: number | undefined;
    let rafId1 = 0;
    let rafId2 = 0;

    const refreshScrollAnimations = () => {
      ScrollTrigger.refresh();
      registeredElements.forEach((element) => {
        if (!element.classList.contains("is-visible") && revealIfVisible(element)) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      });
    };

    rafId1 = window.requestAnimationFrame(() => {
      rafId2 = window.requestAnimationFrame(refreshScrollAnimations);
    });
    timeoutId = window.setTimeout(refreshScrollAnimations, 250);
    window.addEventListener("load", refreshScrollAnimations);

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      window.cancelAnimationFrame(rafId1);
      window.cancelAnimationFrame(rafId2);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      window.removeEventListener("load", refreshScrollAnimations);
    };
  }, [location.pathname, location.search, location.hash, location.key]);

  return null;
};

const App = () => {

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <RouteEffects />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/admin/posts/new" element={<AdminPostEditorPage />} />
          <Route path="/admin/posts/:id/edit" element={<AdminPostEditorPage />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/consultant" element={<Consultant />} />
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
