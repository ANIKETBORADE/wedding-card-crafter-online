
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TemplateGalleryPage from "./pages/TemplateGalleryPage";
import PreviewPage from "./pages/PreviewPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  const queryClient = new QueryClient();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Check if user is logged in on component mount
  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route 
              path="/" 
              element={isLoggedIn ? <Index /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/gallery" 
              element={isLoggedIn ? <TemplateGalleryPage /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/preview" 
              element={isLoggedIn ? <PreviewPage /> : <Navigate to="/login" />} 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
