import Reveal from '@/components/ui/Reveal';
import { strengths } from '@/lib/content';

export default function WhyUs() {
  return (
    <section aria-labelledby="why-heading" className="py-20 lg:py-28">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Why United Sales Corporation</p>
            <h2 id="why-heading" className="mt-4 text-[1.875rem] leading-[1.1] font-bold sm:text-4xl lg:text-[2.75rem]">
              Practical Engineering.
              <span className="block text-brand-600">Coordinated Execution.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7 lg:pt-10">
            <p className="text-[1.0625rem] leading-relaxed">
              Building services succeed or fail at their interfaces — where ducts meet sprinkler mains, where a fire
              alarm signal must shut down an air handler, where a civil opening has to be in the right place before the
              pipe arrives. Our work is organised around getting those interfaces right, within a clearly agreed scope.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={s.title}>
                <Reveal delay={(i % 3) * 0.06} className="group h-full border-t border-line py-8">
                  <div className="flex items-center gap-4">
                    <Icon className="h-6 w-6 text-amber-500" strokeWidth={1.6} aria-hidden="true" />
                    <span aria-hidden="true" className="h-px flex-1 bg-line transition-colors group-hover:bg-amber-500/50" />
                  </div>
                  <h3 className="mt-5 text-[1.15rem] font-bold">{s.title}</h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed">{s.text}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
