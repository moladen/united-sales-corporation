# United Sales Corporation — Website

Next.js (App Router, JavaScript), Tailwind CSS v4, Framer Motion, Lucide.

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build && npm start
```

## Where things live

- `lib/site.js` — company name, contact details, GSTIN, founder, logo config (single source of truth)
- `lib/services.js` — all nine service pages' content
- `lib/content.js` — industries, strengths, process, project capabilities, FAQs
- `app/` — routes; `app/services/[slug]` generates the nine service pages
- `public/images/README.md` — image slots (logo, founder photo, photography)

## Configuration still required

1. ~~Approved logo~~ — done. `public/images/logo.png` (background removed) and
   `public/images/logo-mark.png` (droplet only), generated from the client-supplied logo.
   Favicons `app/icon.png` / `app/apple-icon.png` use the droplet. Theme colours in
   `app/globals.css` are sampled from the logo.
2. ~~Founder photo~~ — done. `public/images/founder.jpg` (cropped to 4:5, 800×1000). To replace, overwrite the file and rebuild.
3. **Production domain** — set `NEXT_PUBLIC_SITE_URL` (enables canonical URLs, absolute
   Open Graph URLs, sitemap URLs and the sitemap line in robots.txt).
4. **Enquiry form → WhatsApp** — done. Submitting the form opens WhatsApp with the enquiry
   pre-filled to **+91 88519 93806** (`lib/site.js` → `contact.whatsapp`); the visitor taps Send.
   A floating WhatsApp button appears on every page, plus links in the header, footer and contact sections.
   *Optional:* to also receive an email copy, set Resend (`RESEND_API_KEY`, `CONTACT_FROM_EMAIL`,
   optional `CONTACT_TO_EMAIL`) or `CONTACT_WEBHOOK_URL` **before building** (see `.env.example`).
   Fully automatic WhatsApp delivery (without the visitor tapping Send) would require the paid
   WhatsApp Business Cloud API.
5. **Client logos** — add files to `public/images/clients/` (see the README there). The
   "Our Clients" section on the homepage and Projects page appears automatically once logos exist.
6. **Testimonials ("Client Stories")** — `lib/testimonials.js` currently holds DEMO entries, shown
   only in development (`npm run dev`) with a "Demo content" label and never on the live site.
   Add real client feedback (without `demo: true`, with the client's permission) and delete the
   demo entries — the section then appears on the live site automatically.

Hosting: needs a Node.js host (e.g. Vercel) for the optional `/api/contact` route.
