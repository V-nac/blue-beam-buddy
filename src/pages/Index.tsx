import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8 px-4">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-foreground">
            Connect with PachemSmart
          </h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Click the button below to start chatting with our Telegram bot
          </p>
        </div>
        
        <div className="pt-4">
          <Button 
            variant="telegram"
            size="lg"
            asChild
            className="group"
          >
            <a 
              href="https://t.me/PachemSmart_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              Open Telegram Bot
            </a>
          </Button>
        </div>
        
        <div className="text-sm text-muted-foreground pt-4">
          This will open Telegram in a new tab
        </div>
      </div>
    </div>
  );
};

export default Index;
