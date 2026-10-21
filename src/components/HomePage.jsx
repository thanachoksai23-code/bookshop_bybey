import Hero from "../components/Hero";
import BooksSection from "../components/BooksSection";
import JournalSection from "../components/JournalSection";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BooksSection />
      <JournalSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}