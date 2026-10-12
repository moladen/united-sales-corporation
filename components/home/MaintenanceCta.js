import { ArrowRight, Check } from 'lucide-react';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';

const items = ['Preventive maintenance', 'Routine inspections', 'Fault diagnosis', 'Service reporting'];

export default function MaintenanceCta() {
  return (
    <section aria-labelledby="maintenance-heading" className="py-16 lg:py-20">
      <div className="container-site">
        <Reveal className="relative overflow-hidden border border-line bg-white">
          <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-amber-500" />
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-12 lg:items-center lg:gap-12 lg:p-14">
            <div className="lg:col-span-7">
              <p className="eyebrow">Maintenance &amp; AMC</p>
              <h2 id="maintenance-heading" className="mt-4 text-[1.75rem] leading-tight font-bold sm:text-[2.25rem]">
                Looking for Ongoing Technical Support?
              </h2>
              <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed">
                Discuss your facility&apos;s maintenance requirements, inspection needs, and ongoing service priorities
                with our team.
              </p>
            </div>
            <div className="lg:col-span-5">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-[0.9375rem] text-ink">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/contact?service=maintenance-amc#enquiry" variant="navy" className="mt-7 w-full sm:w-auto">
                Discuss Maintenance Requirements
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
