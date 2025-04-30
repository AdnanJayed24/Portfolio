"use client";

import { PORTFOLIO_DATA } from "@/lib/constants";
import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">
              {PORTFOLIO_DATA.name}
              <span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground">
              {PORTFOLIO_DATA.title}
            </p>
          </div>
          
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <a 
              href={PORTFOLIO_DATA.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "text-muted-foreground hover:text-foreground transition-colors",
                "hover:scale-110 transition-transform"
              )}
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href={PORTFOLIO_DATA.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "text-muted-foreground hover:text-foreground transition-colors",
                "hover:scale-110 transition-transform"
              )}
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href={`mailto:${PORTFOLIO_DATA.email}`}
              className={cn(
                "text-muted-foreground hover:text-foreground transition-colors",
                "hover:scale-110 transition-transform"
              )}
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} {PORTFOLIO_DATA.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}