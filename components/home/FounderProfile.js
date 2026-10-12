import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/lib/site';
import { publicFileExists } from '@/lib/assets';

// Founder photograph:
//   Add the original photo at public/images/founder.jpg (portrait, ideally
//   at least 800×1000 px, 4:5). It is detected automatically at build/render
//   time and replaces the placeholder — no layout changes required.
function FounderPhoto() {
  const { photo, name } = site.founder;

  if (publicFileExists(photo.src)) {
    return (
      <Image
        src={photo.src}
        alt={`${name}, Owner and Founder of United Sales Corporation`}
        fill
        sizes="(min-width: 1024px) 400px, (min-width: 640px) 320px, 280px"
        className="object-cover object-top"
      />
    );
  }

  const initials = name
    .split(' ')
    .map((p) => p[0])
    .join('');

  return (
    <div className="blueprint-grid absolute inset-0 flex flex-col items-center justify-center bg-navy-900 text-center">
      <span aria-hidden="true" className="font-display text-[5.5rem] leading-none font-extrabold tracking-tight text-white/90 sm:text-[6.5rem]">
        {initials}
      </span>
      <span aria-hidden="true" className="mt-4 h-px w-12 bg-amber-500" />
      <span className="sr-only">Photograph of {name} to be added</span>
    </div>
  );
}

export default function FounderProfile({ headingLevel = 'h2' }) {
  const { founder, established } = site;
  const Heading = headingLevel;

  return (
    <section aria-labelledby="founder-heading" className="bg-mist py-20 lg:py-28">
      <div className="container-site grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: photograph */}
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-36">
            <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none">
              <div aria-hidden="true" className="absolute -right-3 -bottom-3 h-full w-full border border-amber-500/60" />
              <div className="relative aspect-[4/5] overflow-hidden border border-line bg-navy-900">
                <FounderPhoto />
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-[320px] text-center lg:max-w-none lg:text-left">
              <p className="font-display text-xl font-bold text-ink">{founder.name}</p>
              <p className="mt-1 text-[0.9rem] text-muted">{founder.designation}</p>
            </div>
          </div>
        </Reveal>

        {/* Right: profile */}
        <div className="lg:col-span-8">
          <Reveal>
            <p className="eyebrow">Leadership</p>
            <Heading id="founder-heading" className="mt-4 text-[1.875rem] leading-[1.12] font-bold sm:text-4xl lg:text-[2.75rem]">
              About the Founder
            </Heading>
            <dl className="mt-8 grid border-y border-line sm:grid-cols-3">
              <div className="py-4 sm:pr-4">
                <dt className="font-label font-semibold text-[0.68rem] tracking-[0.2em] text-muted uppercase">Name</dt>
                <dd className="mt-1 font-semibold text-ink">{founder.name}</dd>
              </div>
              <div className="border-t border-line py-4 sm:border-t-0 sm:border-l sm:px-4">
                <dt className="font-label font-semibold text-[0.68rem] tracking-[0.2em] text-muted uppercase">Designation</dt>
                <dd className="mt-1 font-semibold text-ink">Owner &amp; Founder</dd>
              </div>
              <div className="border-t border-line py-4 sm:border-t-0 sm:border-l sm:pl-4">
                <dt className="font-label font-semibold text-[0.68rem] tracking-[0.2em] text-muted uppercase">Established</dt>
                <dd className="mt-1 font-semibold text-ink">{established}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.06} className="prose-body mt-8 max-w-3xl text-[1.0625rem] leading-relaxed">
            <p>
              Mohd Irfan Akram, the founder of United Sales Corporation, established the company in 2019 with a clear
              vision: to build a trusted name in the HVAC and engineering industry through quality workmanship, strong
              leadership, and a commitment to excellence.
            </p>
            <p>
              What began with just one or two project sites has grown into an expanding project network spanning
              multiple parts of India. Through years of dedication, perseverance, and hands-on industry experience, he
              has built professional relationships with diverse brands, businesses, and companies across the country.
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="my-9 max-w-3xl border-l-[3px] border-amber-500 py-1 pl-6 font-display text-[1.2rem] leading-snug font-semibold text-ink sm:text-[1.4rem]">
              Known for his determination, practical understanding, and distinctive leadership style, Mr. Akram believes
              that success is not achieved overnight but through consistency, accountability, teamwork, and the courage
              to take on new challenges.
            </p>
          </Reveal>

          <Reveal delay={0.06} className="prose-body max-w-3xl text-[1.0625rem] leading-relaxed">
            <p>
              Under his leadership, United Sales Corporation continues to strengthen its presence in HVAC and
              engineering services while exploring new opportunities for growth. His vision includes expanding into
              Civil Works and broader infrastructure projects, further developing the company’s engineering and
              project-solutions capabilities.
            </p>
            <p>
              From humble beginnings to projects across India, his journey reflects ambition, resilience, and a
              commitment to building something bigger.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
