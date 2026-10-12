import Image from 'next/image';
import { publicFileExists } from '@/lib/assets';
import BlueprintArt from './BlueprintArt';

// Image slot that shows a real photograph when the file exists in /public,
// and otherwise falls back to a drafting-style technical drawing.
// To use photography, add files at the paths listed in public/images/README.md.
export default function MediaFrame({
  src,
  alt,
  art = 'building',
  sizes = '(min-width: 1024px) 50vw, 100vw',
  priority = false,
  tone = 'dark',
  className = '',
  children,
}) {
  const hasImage = publicFileExists(src);
  const dark = tone === 'dark';

  return (
    <div
      className={`relative overflow-hidden ${
        dark ? 'blueprint-grid bg-navy-900 text-white/55' : 'blueprint-grid-dark bg-mist text-navy-700/60'
      } ${className}`}
    >
      {hasImage ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <BlueprintArt variant={art} className="absolute inset-0 h-full w-full p-[8%]" />
      )}
      {children}
    </div>
  );
}
