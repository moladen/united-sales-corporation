import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { processSteps } from '@/lib/content';

export default function Process() {
  return (
    <section aria-labelledby="process-heading" className="blueprint-grid-dark bg-mist py-16 sm:py-20 lg:py-28">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            id="process-heading"
            eyebrow="How we work"
            title="From Requirements to Project Handover"
            intro="A consistent sequence, applied to each project according to its agreed scope."
          />
        </Reveal>

        {/* Desktop: horizontal timeline / Mobile: vertical timeline */}
        <ol className="relative mt-14 grid gap-0 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          <span aria-hidden="true" className="absolute top-0 bottom-0 left-[19px] w-px bg-navy-900/15 lg:top-[19px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-full" />
          {processSteps.map((step, i) => (
            <li key={step.step} className="relative pb-10 pl-16 last:pb-0 lg:pb-0 lg:pl-0">
              <Reveal delay={i * 0.1}>
                <span
                  className={`absolute top-0 left-0 flex h-10 w-10 items-center justify-center font-label text-[0.8rem] font-medium lg:static ${
                    i === processSteps.length - 1 ? 'bg-amber-500 text-navy-950' : 'bg-navy-900 text-white'
                  }`}
                >
                  {step.step}
                </span>
                <h3 className="text-xl font-bold lg:mt-8">{step.title}</h3>
                <p className="mt-3 max-w-sm leading-relaxed">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
