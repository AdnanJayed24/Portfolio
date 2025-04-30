import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { SkillsSection } from '@/components/skills-section';
import { AchievementsSection } from '@/components/achievements-section';
import { CredentialsSection } from '@/components/credentials-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <AchievementsSection />
      <CredentialsSection />
      <Footer />
    </main>
  );
}