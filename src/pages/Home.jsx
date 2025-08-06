import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { LanguageToggle } from "../components/LanguageToggle";
import { AboutSection } from "../components/About";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle*/}
      <ThemeToggle />

      {/*  Language Toggle*/}
      <LanguageToggle/>

      {/* Background effects*/}
      <StarBackground />

      {/* NavBar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection/>
      </main>


      {/* Footer */}
    </div>
  );
};
