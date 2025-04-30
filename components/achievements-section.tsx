"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, ExternalLink, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export function AchievementsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My competitive programming accomplishments and contest highlights.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {PORTFOLIO_DATA.achievements.map((achievement, index) => (
            <div
              key={index}
              className={cn(
                "mb-6 transition-all duration-300",
                "animate-in fade-in slide-in-from-bottom",
                "will-change-transform"
              )}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <Card
                className={cn(
                  "cursor-pointer transition-all duration-300 overflow-hidden",
                  "hover:shadow-md border-border",
                  expandedIndex === index
                    ? "border-primary/40 shadow-md"
                    : "hover:border-primary/20"
                )}
                onClick={() => toggleExpand(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div
                      className={cn(
                        "p-3 rounded-full mr-4 mt-1",
                        "bg-primary/10 text-primary",
                        "transition-all duration-300",
                        expandedIndex === index && "bg-primary/20"
                      )}
                    >
                      <Trophy className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold">
                          {achievement.title}
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {achievement.date}
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
                {expandedIndex === index && achievement.link && (
                  <CardFooter className="bg-muted/30 p-4 flex justify-end border-t">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Visit Site
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}