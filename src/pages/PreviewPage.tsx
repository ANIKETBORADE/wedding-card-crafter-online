
import React, { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import InvitationPreview from "../components/InvitationPreview";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { WeddingDetails } from "../types/invitation";

interface LocationState {
  details: WeddingDetails;
  templateId: string;
}

const PreviewPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState | null;
  const [currentTemplateId, setCurrentTemplateId] = useState<string | null>(null);

  // If no state is provided, redirect to home
  if (!state || !state.details || !state.templateId) {
    return <Navigate to="/" replace />;
  }

  const { details, templateId } = state;
  
  // Use the state templateId initially, but prefer the currentTemplateId if it's been set
  const activeTemplateId = currentTemplateId || templateId;

  const handleEditDetails = () => {
    // Go back to the form page
    window.history.back();
  };

  const handleTemplateChange = (newTemplateId: string) => {
    // Update the current template ID when changed
    setCurrentTemplateId(newTemplateId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <InvitationPreview
        weddingDetails={details}
        templateId={activeTemplateId}
        onEdit={handleEditDetails}
        onTemplateChange={handleTemplateChange}
      />
      <Footer />
    </div>
  );
};

export default PreviewPage;
