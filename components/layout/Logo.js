import Image from 'next/image';
import { site } from '@/lib/site';

// Approved United Sales Corporation logo (public/images/logo.png), shown at
// its original proportions. The artwork is navy-on-white, so on dark
// backgrounds it sits on a white plate to keep its true colours.
export default function Logo({ tone = 'dark', size = 'md', priority = false }) {
  const { src, width, height } = site.logo;
  const h = size === 'lg' ? 64 : 60;

  const img = (
    <Image
      src={src}
      alt={site.legalName}
      width={width}
      height={height}
      priority={priority}
      sizes={`${Math.round((h * width) / height)}px`}
      style={{ height: h, width: 'auto' }}
    />
  );

  if (tone === 'light') {
    return <span className="inline-flex rounded-[4px] bg-white px-4 py-3 shadow-sm">{img}</span>;
  }
  return img;
}
