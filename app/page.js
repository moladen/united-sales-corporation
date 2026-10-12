import Hero from '@/components/home/Hero';
import Intro from '@/components/home/Intro';
import ServicesGrid from '@/components/home/ServicesGrid';
import Industries from '@/components/home/Industries';
import WhyUs from '@/components/home/WhyUs';
import FounderProfile from '@/components/home/FounderProfile';
import ProjectExperience from '@/components/home/ProjectExperience';
import Clients from '@/components/home/Clients';
import Testimonials from '@/components/home/Testimonials';
import Process from '@/components/home/Process';
import MaintenanceCta from '@/components/home/MaintenanceCta';
import Faq from '@/components/home/Faq';
import FinalCta from '@/components/home/FinalCta';
import ContactSection from '@/components/home/ContactSection';
import JsonLd from '@/components/ui/JsonLd';
import { pageMetadata, faqSchema } from '@/lib/seo';
import { faqs } from '@/lib/content';
import { site } from '@/lib/site';

const base = pageMetadata({
  description:
    'United Sales Corporation, Lucknow — integrated engineering and building-service support for commercial spaces: HVAC, fire fighting, fire alarm, MEP coordination, civil works, retail fit-outs and maintenance.',
  path: '/',
});

export const metadata = {
  ...base,
  title: { absolute: `${site.name} | HVAC, Fire & Life Safety, MEP — Lucknow` },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesGrid />
      <Industries />
      <WhyUs />
      <FounderProfile />
      <ProjectExperience />
      <Clients />
      <Testimonials />
      <Process />
      <MaintenanceCta />
      <Faq />
      <FinalCta />
      <ContactSection />
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
