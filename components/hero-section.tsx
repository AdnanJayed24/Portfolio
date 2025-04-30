"use client";

import Image from "next/image";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const scrollToSkills = () => {
    const element = document.getElementById("skills");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 pb-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col order-2 lg:order-1 animate-in fade-in slide-in-from-left-5 duration-700">
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-2">
              Hello, I&apos;m
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              {PORTFOLIO_DATA.name}
            </h1>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">
              {PORTFOLIO_DATA.title}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              {PORTFOLIO_DATA.bio}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button
                variant="default"
                size="lg"
                className="rounded-full"
                onClick={scrollToSkills}
              >
                Explore My Skills
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                asChild
              >
                <a
                  href={`mailto:${PORTFOLIO_DATA.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Me
                  <Mail className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={PORTFOLIO_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full",
                  "border border-border hover:border-foreground"
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
                  "text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full",
                  "border border-border hover:border-foreground"
                )}
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.email}`}
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full",
                  "border border-border hover:border-foreground"
                )}
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div className="flex justify-center order-1 lg:order-2 animate-in fade-in slide-in-from-right-5 duration-700">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
              <Image
                src={PORTFOLIO_DATA.photo}
                alt={PORTFOLIO_DATA.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}