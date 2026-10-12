import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { whatsappLink } from '@/lib/whatsapp';
import { site } from '@/lib/site';

// Site-wide floating WhatsApp button (plain link — no JavaScript needed).
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with us on WhatsApp, ${site.contact.whatsapp.display} (opens WhatsApp)`}
      className="group fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex items-center gap-3 sm:right-6 sm:bottom-6"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-[4px] bg-white px-3.5 py-2 text-[0.875rem] font-semibold text-ink opacity-0 shadow-[0_8px_24px_-8px_rgb(2_37_89/0.35)] transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block">
        Chat on WhatsApp
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_-6px_rgb(0_0_0/0.35)] ring-4 ring-white/70 transition-transform duration-200 group-hover:scale-105">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </a>
  );
}
