import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="blueprint-grid-dark py-28 lg:py-36">
      <div className="container-site max-w-2xl text-center">
        <p className="font-label font-semibold text-[0.8rem] tracking-[0.2em] text-brand-600 uppercase">Error 404</p>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Page not found</h1>
        <p className="mt-5 text-lg leading-relaxed">The page you are looking for does not exist or may have moved.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" variant="navy">Back to home</Button>
          <Button href="/services" variant="outline">View services</Button>
        </div>
      </div>
    </section>
  );
}
