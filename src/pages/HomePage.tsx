import { About } from '../sections/About';
import { Contact } from '../sections/Contact';
import { Hero } from '../sections/Hero';
import { Projects } from '../sections/Projects';
import { Skills } from '../sections/Skills';

export const HomePage = () => (
  <main>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </main>
);
