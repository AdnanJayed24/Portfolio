"use client";

import { useState } from "react";
import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

import { PORTFOLIO_DATA } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

// Define the exact shape Lucide icon components use
type LucideIconType = ForwardRefExoticComponent<
  LucideProps & RefAttributes<SVGSVGElement>
>;

export function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  // Dynamically resolve the icon component by name
  const getIcon = (iconName: string): LucideIconType => {
    const maybeIcon = LucideIcons[iconName as keyof typeof LucideIcons];
    // Only function‐components (the actual icons) should be used;
    // otherwise fall back to Code
    const IconComp = typeof maybeIcon === "function"
      ? maybeIcon
      : LucideIcons.Code;
    return IconComp as LucideIconType;
  };

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical expertise includes programming languages and concepts
            focused on competitive programming and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skills.map((skill, index) => {
            const Icon = getIcon(skill.icon);
            return (
              <Card
                key={skill.name}
                className={cn(
                  "transition-all duration-300 overflow-hidden",
                  "border-transparent hover:border-primary/50",
                  "hover:shadow-lg hover:-translate-y-1",
                  activeSkill === skill.name &&
                    "border-primary/50 shadow-lg -translate-y-1"
                )}
                onMouseEnter={() => setActiveSkill(skill.name)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className={cn(
                        "p-3 rounded-full mr-3",
                        "bg-primary/10 text-primary"
                      )}
                    >
                      <LucideIcons.Code className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>

                  <div className="mb-2 flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Proficiency
                    </span>
                    <span className="text-sm font-medium">
                      {skill.proficiency}%
                    </span>
                  </div>

                  <Progress
                    value={skill.proficiency}
                    className="h-2"
                    style={{ animationDelay: `${index * 150}ms` }}
                  />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
