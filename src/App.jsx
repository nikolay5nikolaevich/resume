import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { WorksSection } from './components/WorksSection/WorksSection';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { projects } from './data/projects';
import { sections } from './data/sections';

function App() {
  const classic = projects.filter((p) => p.category === 'classic');
  const ai = projects.filter((p) => p.category === 'ai');

  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorksSection id="works" {...sections.classic} projects={classic} columns={3} />
        <WorksSection id="works-ai" {...sections.ai} projects={ai} columns={2} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
