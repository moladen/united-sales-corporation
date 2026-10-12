import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { getClientLogos } from '@/lib/clients';

function LogoTile({ logo, hidden = false, className = '' }) {
  return (
    <li
      aria-hidden={hidden || undefined}
      className={`flex h-[104px] w-[190px] shrink-0 items-center justify-center rounded-[4px] border border-line bg-white px-6 py-5 shadow-[0_6px_20px_-14px_rgb(2_37_89/0.35)] transition-shadow duration-300 hover:shadow-[0_12px_28px_-14px_rgb(2_37_89/0.45)] sm:h-[116px] sm:w-[220px] ${className}`}
    >
      <span className="relative h-full w-full">
        <Image
          src={logo.src}
          alt={hidden ? '' : logo.name}
          fill
          sizes="220px"
          unoptimized={logo.svg}
          className="object-contain"
        />
      </span>
    </li>
  );
}

function MarqueeRow({ logos, reverse = false }) {
  const duration = `${Math.max(24, logos.length * 5)}s`;
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] motion-reduce:[mask-image:none]">
      <ul
        className={`flex w-max gap-5 py-3 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center ${
          reverse ? '[animation-direction:reverse]' : ''
        }`}
        style={{ animationDuration: duration }}
      >
        {logos.map((logo) => (
          <LogoTile key={logo.src} logo={logo} />
        ))}
        {/* Duplicate set for a seamless loop — hidden from assistive tech */}
        {logos.map((logo) => (
          <LogoTile key={`dup-${logo.src}`} logo={logo} hidden className="motion-reduce:hidden" />
        ))}
      </ul>
    </div>
  );
}

export default function Clients() {
  const logos = getClientLogos();
  if (!logos.length) return null; // Section stays hidden until logos are added

  const scroll = logos.length >= 6;
  const twoRows = logos.length >= 10;
  const rows = twoRows ? [logos.filter((_, i) => i % 2 === 0), logos.filter((_, i) => i % 2 === 1)] : [logos];

  return (
    <section id="clients" aria-labelledby="clients-heading" className="blueprint-grid-dark overflow-hidden bg-brand-50 py-20 lg:py-28">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            id="clients-heading"
            eyebrow="Our Clients"
            title="Brands and Businesses We Work With"
            intro="Professional relationships with diverse brands, businesses and companies across India."
            align="center"
          />
          <span aria-hidden="true" className="rule-droplet mx-auto mt-8 block h-[3px] w-24" />
        </Reveal>
      </div>

      <Reveal className="mt-12 space-y-4 lg:mt-14">
        {scroll ? (
          rows.map((row, i) => <MarqueeRow key={i} logos={row} reverse={i === 1} />)
        ) : (
          <ul className="container-site flex flex-wrap justify-center gap-5">
            {logos.map((logo) => (
              <LogoTile key={logo.src} logo={logo} />
            ))}
          </ul>
        )}
      </Reveal>
    </section>
  );
}
