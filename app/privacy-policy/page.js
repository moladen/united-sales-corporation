import PageHero from '@/components/ui/PageHero';
import { site, fullAddress } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'How United Sales Corporation collects, uses and protects information submitted through this website.',
  path: '/privacy-policy',
});

// Update this date whenever the policy content changes.
const LAST_UPDATED = '11 October 2026';

const sections = [
  {
    title: 'Who we are',
    body: [
      `This website is operated by ${site.name} (GSTIN ${site.contact.gstin}), with its registered address at ${fullAddress}`,
    ],
  },
  {
    title: 'Information we collect',
    body: [
      'When you submit the enquiry form, we collect the details you provide: your full name, company name (optional), phone number, email address, the service you require, site location, and project details.',
      `Submitting the form opens WhatsApp with these details pre-filled as a message to our WhatsApp number (${site.contact.whatsapp.display}). The enquiry is only sent if you choose to send that message. Messages sent through WhatsApp are also subject to WhatsApp’s own terms and privacy policy.`,
      'If you contact us directly by email or phone, we receive the information you choose to share in that communication.',
      'Like most websites, our hosting provider may automatically process technical information such as IP address, browser type and pages requested, for security and to operate the website.',
    ],
  },
  {
    title: 'How we use your information',
    body: [
      'We use enquiry information to respond to your request, understand your project requirements, prepare quotations, and communicate with you about the work you have asked about.',
      'We do not sell your personal information, and we do not use enquiry details for unrelated marketing.',
    ],
  },
  {
    title: 'Sharing of information',
    body: [
      'Enquiry details reach us through service providers that operate this website and its form — including WhatsApp (Meta) for enquiries sent via WhatsApp, and website hosting or email delivery services where used. These providers process information to provide their services.',
      'We may disclose information where required by law.',
    ],
  },
  {
    title: 'Data retention',
    body: [
      'We keep enquiry information for as long as needed to respond to your enquiry and manage any resulting business relationship, and as required for legal, tax or accounting purposes.',
    ],
  },
  {
    title: 'Your choices',
    body: [
      'You may ask us to access, correct or delete the personal information you have submitted, subject to applicable law. To make a request, contact us using the details below.',
    ],
  },
  {
    title: 'Cookies',
    body: [
      'This website does not use advertising or tracking cookies. If analytics or other cookies are introduced in future, this policy will be updated accordingly.',
    ],
  },
  {
    title: 'Changes to this policy',
    body: ['We may update this policy from time to time. The latest version will always be available on this page.'],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="How we handle the information you share with us through this website."
        breadcrumbs={[{ name: 'Privacy Policy', path: '/privacy-policy' }]}
      />
      <section className="py-16 lg:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <p className="font-label font-semibold text-[0.75rem] tracking-[0.2em] text-muted uppercase">Last updated</p>
            <p className="mt-1 font-semibold text-ink">{LAST_UPDATED}</p>
          </aside>
          <div className="max-w-3xl lg:col-span-9">
            {sections.map((s) => (
              <div key={s.title} className="border-t border-line py-8 first:border-t-0 first:pt-0">
                <h2 className="text-xl font-bold sm:text-[1.375rem]">{s.title}</h2>
                <div className="prose-body mt-3 leading-relaxed">
                  {s.body.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
            <div className="border-t border-line pt-8">
              <h2 className="text-xl font-bold sm:text-[1.375rem]">Contact</h2>
              <p className="mt-3 leading-relaxed">
                For privacy questions or requests, email{' '}
                <a href={`mailto:${site.contact.email}`} className="font-medium break-all text-brand-600 hover:underline">
                  {site.contact.email}
                </a>{' '}
                or call{' '}
                {site.contact.phones.map((p, i) => (
                  <span key={p.tel}>
                    {i > 0 && ' / '}
                    <a href={`tel:${p.tel}`} className="font-medium whitespace-nowrap text-brand-600 hover:underline">
                      {p.display}
                    </a>
                  </span>
                ))}
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
