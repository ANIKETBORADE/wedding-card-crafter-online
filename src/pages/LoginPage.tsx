
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from "../hooks/use-mobile";

interface LoginPageProps {
  onLoginSuccess?: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simple email validation
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }
    
    // Store user email in localStorage for tracking purposes
    localStorage.setItem("userEmail", email);
    
    // Simulate API delay
    setTimeout(() => {
      setIsLoading(false);
      
      // Call the login success callback if provided
      if (onLoginSuccess) {
        onLoginSuccess();
      }
      
      navigate("/");
      toast({
        title: "Welcome!",
        description: "Successfully logged in"
      });
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-16 sm:h-20 bg-wedding-gold/10 flex items-center justify-center">
        <h1 className="text-2xl font-playfair font-bold text-wedding-gold">Wedding Card Crafter</h1>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold font-playfair mb-2">Welcome</h2>
            <p className="text-gray-600">Sign in to create beautiful wedding invitations</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full"
                required
              />
              <p className="text-xs text-gray-500">
                We'll use this to save your designs and send updates
              </p>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-wedding-gold hover:bg-wedding-gold/90 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
            
            <p className="text-xs text-center text-gray-500 mt-6">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </form>
        </div>
      </div>
      
      <div className="h-16 bg-white border-t flex items-center justify-center p-4">
        <p className="text-sm text-gray-500">© 2025 Wedding Card Crafter. All rights reserved.</p>
      </div>
    </div>
  );
};

export default LoginPage;
