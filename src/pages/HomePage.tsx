import { Contact } from '../sections/Contact';
import { Hero } from '../sections/Hero';
import { Process } from '../sections/Process';
import { Projects } from '../sections/Projects';
import { Services } from '../sections/Services';
import { Testimonials } from '../sections/Testimonials';

export const HomePage = () => (
  <main>
    <Hero />
    <Services />
    <Process />
    <Projects />
    <Testimonials />
    <Contact />
  </main>
);
