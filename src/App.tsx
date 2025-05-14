import { Route, Switch, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Events from "@/pages/Events";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";

function useQueryRedirectLocation(): [string, (to: string) => void] {
  const searchPath = window.location.search.slice(1); // Remove '?'
  const current = searchPath || window.location.pathname || "/";
  return [current, (to: string) => (window.location.href = to)];
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}


function App() {
  const [, navigate] = useLocation();

  // Restore clean path from query string (for GitHub Pages redirect)
  useEffect(() => {
    const search = window.location.search;
    if (search.startsWith("?/")) {
      const actualPath = search.slice(2); // remove '?/'
      navigate(`/${actualPath}`, { replace: true });
    }
  }, [navigate]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
export default App;
