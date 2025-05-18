import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950/20 to-transparent pointer-events-none" />
      
      {/* Background dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#14b8a622_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left space-y-6 opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Capture and Share <span className="text-gradient">Videos Instantly</span> with AI
            </h1>
            <p className="text-lg md:text-xl text-foreground/80">
              Transform the way you create and share videos with our powerful AI-driven platform. 
              Record, edit, and share in seconds, all from one intuitive application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-lg group relative overflow-hidden">
                <span className="relative z-10">Start Free Trial</span>
                <span className="absolute inset-0 translate-x-full group-hover:translate-x-0 bg-teal-600 transition-transform duration-300"></span>
              </Button>
              <Button size="lg" variant="outline" className="text-lg group flex items-center gap-2">
                Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Video Preview */}
          <div className="flex-1 w-full max-w-xl opacity-0 animate-fade-in" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            <div className="aspect-video rounded-xl overflow-hidden bg-muted/30 border border-white/10 shadow-2xl relative group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center shadow-lg animate-pulse-slow">
                  <Button size="icon" className="bg-teal-500 rounded-full h-14 w-14">
                    <ArrowRight className="h-6 w-6 rotate-90" />
                  </Button>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
