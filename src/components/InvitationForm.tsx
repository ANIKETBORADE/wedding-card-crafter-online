
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { WeddingDetails } from "../types/invitation";
import { validateFileType, validateFileSize, convertFileToBase64 } from "../utils/templateUtils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Home, User, Upload, X, Image } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface InvitationFormProps {
  onSubmit: (data: WeddingDetails) => void;
}

const InvitationForm: React.FC<InvitationFormProps> = ({ onSubmit }) => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<WeddingDetails>();
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  
  const onFormSubmit = (data: WeddingDetails) => {
    // Add the photos to the form data
    data.photos = uploadedPhotos;
    onSubmit(data);
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    setIsUploading(true);
    
    try {
      const newPhotos: string[] = [];
      
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Validate file
        if (!validateFileType(file)) {
          toast({
            title: "Invalid file type",
            description: "Please upload JPG, PNG, or GIF images only.",
            variant: "destructive",
          });
          continue;
        }
        
        if (!validateFileSize(file, 5)) {
          toast({
            title: "File too large",
            description: "File size should be less than 5MB.",
            variant: "destructive",
          });
          continue;
        }
        
        // Convert to base64
        const base64 = await convertFileToBase64(file);
        newPhotos.push(base64);
      }
      
      if (newPhotos.length > 0) {
        const updatedPhotos = [...uploadedPhotos, ...newPhotos];
        setUploadedPhotos(updatedPhotos);
        setValue('photos', updatedPhotos);
        
        toast({
          title: "Photos uploaded",
          description: `Successfully uploaded ${newPhotos.length} photo(s).`,
        });
      }
    } catch (error) {
      console.error("Error uploading photos:", error);
      toast({
        title: "Upload failed",
        description: "There was an error uploading your photos.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      // Reset the file input
      event.target.value = '';
    }
  };

  const removePhoto = (indexToRemove: number) => {
    const updatedPhotos = uploadedPhotos.filter((_, index) => index !== indexToRemove);
    setUploadedPhotos(updatedPhotos);
    setValue('photos', updatedPhotos);
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
                  <Image className="mr-2 h-5 w-5 text-wedding-gold" />
                  Upload Photos
                </h3>
                
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                  <div className="mx-auto w-16 h-16 bg-wedding-cream/50 rounded-full flex items-center justify-center mb-4">
                    <Upload className="h-8 w-8 text-wedding-gold" />
                  </div>
                  <p className="text-gray-600 mb-2">Drag and drop your photos here, or click to browse</p>
                  <p className="text-gray-400 text-sm">
                    Supported formats: JPG, PNG, GIF. Max file size: 5MB
                  </p>
                  <Input 
                    type="file"
                    id="photoUpload"
                    accept="image/jpeg,image/jpg,image/png,image/gif"
                    onChange={handleFileUpload}
                    multiple
                    disabled={isUploading}
                    className="hidden"
                  />
                  <label htmlFor="photoUpload">
                    <Button 
                      type="button"
                      variant="outline" 
                      className="mt-4 border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-white cursor-pointer"
                      disabled={isUploading}
                    >
                      {isUploading ? "Uploading..." : "Select Photos"}
                    </Button>
                  </label>
                  
                  {/* Preview uploaded photos */}
                  {uploadedPhotos.length > 0 && (
                    <div className="mt-6">
                      <p className="text-gray-700 font-medium mb-3">Uploaded Photos ({uploadedPhotos.length})</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {uploadedPhotos.map((photo, index) => (
                          <div key={index} className="relative group">
                            <div className="aspect-square w-full rounded-md overflow-hidden border border-gray-200">
                              <img 
                                src={photo} 
                                alt={`Uploaded photo ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => removePhoto(index)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
