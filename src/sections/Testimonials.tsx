import { testimonials } from '../data/content';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="mx-auto mt-24 max-w-6xl px-6">
      <div className="space-y-4 text-center">
        <p className="badge mx-auto">Testimonials</p>
        <h2 className="section-title">Leaders who partner with Kay share their perspective</h2>
        <p className="section-subtitle mx-auto">
          From seed-stage founders to enterprise executives, Kay is known for blending technical rigor with the empathy needed
          to bring teams along for the journey.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.name} className="glass-card h-full text-left">
            <blockquote className="text-base text-base-700 dark:text-base-100">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm font-semibold text-base-500 dark:text-base-300">
              {testimonial.name}
              <span className="mt-1 block text-xs font-normal uppercase tracking-[0.3em] text-base-400 dark:text-base-500">
                {testimonial.role}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
