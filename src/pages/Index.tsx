import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-primary/10">
      {/* Floating decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-4 h-4 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-32 right-16 w-6 h-6 bg-primary/30 rounded-full animate-float-delayed"></div>
        <div className="absolute top-48 left-24 w-3 h-3 bg-primary/25 rounded-full animate-float"></div>
        <div className="absolute top-20 right-32 w-5 h-5 bg-primary/15 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-16 w-4 h-4 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-48 right-20 w-7 h-7 bg-primary/25 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-16 left-32 w-3 h-3 bg-primary/30 rounded-full animate-float"></div>
        <div className="absolute top-64 left-48 w-5 h-5 bg-primary/20 rounded-full animate-float-delayed"></div>
        <div className="absolute top-80 right-48 w-4 h-4 bg-primary/25 rounded-full animate-float"></div>
        <div className="absolute bottom-64 right-64 w-6 h-6 bg-primary/15 rounded-full animate-float-delayed"></div>
        <div className="absolute top-96 left-64 w-3 h-3 bg-primary/30 rounded-full animate-float"></div>
        <div className="absolute bottom-80 left-48 w-5 h-5 bg-primary/20 rounded-full animate-float-delayed"></div>
      </div>

      {/* Main content */}
      <div className="min-h-screen flex flex-col items-center justify-center relative z-10">
        <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-primary/20 max-w-md w-full mx-4">
          <div className="text-center space-y-8">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/320d335b-774d-4ec7-8152-5b35078ed8a2.png" 
                alt="Pachem Dental Clinic" 
                className="mx-auto max-w-full h-auto max-h-32 object-contain drop-shadow-lg" 
              />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-foreground leading-tight">
                Connect with Pachem's Appointment Bot
              </h1>
              <p className="text-lg text-muted-foreground">Chat With Our Bot Below</p>
            </div>
            
            <div className="pt-4">
              <Button variant="telegram" size="lg" asChild className="group w-full">
                <a href="https://t.me/PachemSmart_bot" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                  <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  Open Telegram Bot
                </a>
              </Button>
            </div>
            
            <div className="text-sm text-muted-foreground pt-4">This will open Telegram</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;