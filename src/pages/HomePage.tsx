import { About } from '../sections/About';
import { Contact } from '../sections/Contact';
import { Hero } from '../sections/Hero';
import { Projects } from '../sections/Projects';
import { Skills } from '../sections/Skills';
import { SystemOverview } from '../sections/SystemOverview';
import { Delivery } from '../sections/Delivery';

export const HomePage = () => (
  <main>
    <Hero />
    <About />
    <Skills />
    <SystemOverview />
    <Projects />
    <Delivery />
    <Contact />
  </main>
);
