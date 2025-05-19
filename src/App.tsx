
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

const App: React.FC = () => {
  const queryClient = new QueryClient();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Check if user is logged in on component mount
  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setIsLoggedIn(true);
    }
    setIsInitialized(true);
  }, []);

  // Add a callback function to handle login state changes
  const handleLoginStateChange = () => {
    const userEmail = localStorage.getItem("userEmail");
    setIsLoggedIn(!!userEmail);
  };

  // Don't render routes until we've checked if the user is logged in
  if (!isInitialized) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-center" />
        <BrowserRouter>
          <Routes>
            <Route 
              path="/login" 
              element={isLoggedIn ? <Navigate to="/" /> : <LoginPage onLoginSuccess={handleLoginStateChange} />} 
            />
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
