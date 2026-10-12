import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import ContactForm from '@/components/contact/ContactForm';
import { emailCopyEnabled } from '@/lib/delivery';
import ContactDetails from '@/components/contact/ContactDetails';

export default function ContactSection({ id = 'contact', formIdPrefix = 'home-enquiry' }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="bg-mist py-20 lg:py-28">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            id={`${id}-heading`}
            eyebrow="Contact"
            title="Send Us Your Requirement"
            intro="Tell us about the site, the services involved and what you need. Fields marked * are required."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <ContactForm idPrefix={formIdPrefix} emailCopy={emailCopyEnabled()} />
          </div>
          <div className="lg:col-span-4">
            <ContactDetails />
          </div>
        </div>
      </div>
    </section>
  );
}
