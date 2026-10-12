import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), 'public', site.logo.src));
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;
  const logoH = 150;
  const logoW = Math.round((logoH * site.logo.width) / site.logo.height);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', height: 12, background: 'linear-gradient(90deg, #013581, #0276d2, #05b9fa)' }} />
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: '0 90px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src={logoSrc} width={logoW} height={logoH} />
          <div style={{ display: 'flex', marginTop: 50, fontSize: 50, fontWeight: 800, color: '#022559', lineHeight: 1.15, maxWidth: 1000 }}>
            Engineering Solutions for Commercial Spaces That Demand More.
          </div>
          <div style={{ display: 'flex', marginTop: 26, fontSize: 24, letterSpacing: 3, color: '#4b5565' }}>
            {site.tagline.toUpperCase()}
          </div>
        </div>
        <div style={{ display: 'flex', height: 12, background: 'linear-gradient(90deg, #f57e16, #fec32a)' }} />
      </div>
    ),
    size
  );
}
