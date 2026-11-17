import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import InterestsSection from "./components/InterestsSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <Hero />
      <section>
        <h2>About</h2>
        <p>
          Hi! I'm Manas, a second-year CS major. I'm excited to be a developer for UCSC Blueprint this quarter! I love Blueprint's mission of using web/app development to benefit local non-profits in the Santa Cruz area. I have a lot of experience working with non-profits and developing technology for them, mostly through my work in high school at the Shooting Stars Foundation. I also love Data Science, AI Ethics, and a bit of vibe coding. In my free time, I like to watch and play soccer/football/basketball, play video games, and nerd out about current events.
        </p>
      </section>
      <ProjectsSection />
      <InterestsSection />
      <Footer />
    </main>
  );
}