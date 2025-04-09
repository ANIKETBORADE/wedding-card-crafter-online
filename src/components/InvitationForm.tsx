
import React from "react";
import { useForm } from "react-hook-form";
import { WeddingDetails } from "../types/invitation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Home, User, Upload } from "lucide-react";

interface InvitationFormProps {
  onSubmit: (data: WeddingDetails) => void;
}

const InvitationForm: React.FC<InvitationFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<WeddingDetails>();
  
  const onFormSubmit = (data: WeddingDetails) => {
    onSubmit(data);
  };

  return (
    <div id="create" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Your Wedding Invitation</h2>
          <div className="fancy-separator">
            <span>❖</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enter your wedding details below to personalize your invitation.
            All fields marked with an asterisk (*) are required.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-md">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-xl font-medium flex items-center">
                  <User className="mr-2 h-5 w-5 text-wedding-gold" />
                  Couple Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="brideFirstName">Bride's First Name *</Label>
                    <Input 
                      id="brideFirstName"
                      placeholder="Enter first name"
                      {...register("brideFirstName", { required: true })}
                      className={errors.brideFirstName ? "border-red-500" : ""}
                    />
                    {errors.brideFirstName && (
                      <p className="text-red-500 text-sm">This field is required</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="brideLastName">Bride's Last Name *</Label>
                    <Input 
                      id="brideLastName"
                      placeholder="Enter last name"
                      {...register("brideLastName", { required: true })}
                      className={errors.brideLastName ? "border-red-500" : ""}
                    />
                    {errors.brideLastName && (
                      <p className="text-red-500 text-sm">This field is required</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="groomFirstName">Groom's First Name *</Label>
                    <Input 
                      id="groomFirstName"
                      placeholder="Enter first name"
                      {...register("groomFirstName", { required: true })}
                      className={errors.groomFirstName ? "border-red-500" : ""}
                    />
                    {errors.groomFirstName && (
                      <p className="text-red-500 text-sm">This field is required</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="groomLastName">Groom's Last Name *</Label>
                    <Input 
                      id="groomLastName"
                      placeholder="Enter last name"
                      {...register("groomLastName", { required: true })}
                      className={errors.groomLastName ? "border-red-500" : ""}
                    />
                    {errors.groomLastName && (
                      <p className="text-red-500 text-sm">This field is required</p>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-medium flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-wedding-gold" />
                  Date & Time
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="weddingDate">Wedding Date *</Label>
                    <Input 
                      id="weddingDate"
                      type="date"
                      {...register("weddingDate", { required: true })}
                      className={errors.weddingDate ? "border-red-500" : ""}
                    />
                    {errors.weddingDate && (
                      <p className="text-red-500 text-sm">This field is required</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="weddingTime">Wedding Time *</Label>
                    <Input 
                      id="weddingTime"
                      type="time"
                      {...register("weddingTime", { required: true })}
                      className={errors.weddingTime ? "border-red-500" : ""}
                    />
                    {errors.weddingTime && (
                      <p className="text-red-500 text-sm">This field is required</p>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-medium flex items-center">
                  <Home className="mr-2 h-5 w-5 text-wedding-gold" />
                  Venue Information
                </h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="venue">Ceremony Venue Name *</Label>
                    <Input 
                      id="venue"
                      placeholder="e.g. St. Mary's Church"
                      {...register("venue", { required: true })}
                      className={errors.venue ? "border-red-500" : ""}
                    />
                    {errors.venue && (
                      <p className="text-red-500 text-sm">This field is required</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="venueAddress">Ceremony Address *</Label>
                    <Textarea 
                      id="venueAddress"
                      placeholder="Enter full address"
                      {...register("venueAddress", { required: true })}
                      className={errors.venueAddress ? "border-red-500" : ""}
                    />
                    {errors.venueAddress && (
                      <p className="text-red-500 text-sm">This field is required</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="receptionVenue">Reception Venue Name (if different)</Label>
                    <Input 
                      id="receptionVenue"
                      placeholder="e.g. Grand Hotel Ballroom"
                      {...register("receptionVenue")}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="receptionAddress">Reception Address (if different)</Label>
                    <Textarea 
                      id="receptionAddress"
                      placeholder="Enter full address"
                      {...register("receptionAddress")}
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-medium flex items-center">
                  <Upload className="mr-2 h-5 w-5 text-wedding-gold" />
                  Upload Photos
                </h3>
                
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                  <div className="mx-auto w-16 h-16 bg-wedding-cream/50 rounded-full flex items-center justify-center mb-4">
                    <Upload className="h-8 w-8 text-wedding-gold" />
                  </div>
                  <p className="text-gray-600 mb-2">Drag and drop your photos here, or click to browse</p>
                  <p className="text-gray-400 text-sm">
                    Supported formats: JPG, PNG. Max file size: 5MB
                  </p>
                  <Button 
                    type="button"
                    variant="outline" 
                    className="mt-4 border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-white"
                  >
                    Select Photos
                  </Button>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-medium">Additional Information</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Special Notes or Instructions</Label>
                  <Textarea 
                    id="additionalInfo"
                    placeholder="Any additional information you'd like to include on your invitation"
                    rows={4}
                    {...register("additionalInfo")}
                  />
                </div>
              </div>
              
              <div className="pt-4 flex justify-center">
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-wedding-gold hover:bg-wedding-gold/90 text-white px-10"
                >
                  Preview Your Invitation
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InvitationForm;
