
import "./styles/global.css";
import "./styles/site.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import BooksSection from "./components/BooksSection";
import JournalSection from "./components/JournalSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <BooksSection />
        <JournalSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
