"use client";

import { PORTFOLIO_DATA } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function CredentialsSection() {
  return (
    <section
      id="credentials"
      className="py-24 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Credentials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Verifiable IDs and profiles from competitive programming platforms.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.credentials.map((credential, index) => (
            <Card 
              key={index}
              className={cn(
                "border-border hover:border-primary/20 transition-all duration-300 overflow-hidden",
                "hover:shadow-md animate-in fade-in slide-in-from-bottom"
              )}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4 text-primary">
                  <Check className="h-5 w-5 mr-2" />
                  <h3 className="text-lg font-semibold">{credential.name}</h3>
                </div>
                
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ID/Handle:</span>
                    <span className="font-medium">{credential.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Issuer:</span>
                    <span>{credential.issuer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Since:</span>
                    {/* <span>{credential.date}</span> */}
                  </div>
                </div>
                
                {credential.verificationLink && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full gap-2"
                    asChild
                  >
                    <a 
                      href={credential.verificationLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Verify
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}