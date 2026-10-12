import 'server-only';
import fs from 'node:fs';
import path from 'node:path';

// Client logos are read from public/images/clients/.
// Drop logo files there (png, jpg, jpeg, webp, svg) — the "Our Clients"
// section appears automatically and stays hidden while the folder is empty.
//
// The file name becomes the logo's alt text:
//   "tata-motors.png"  ->  "Tata Motors"
// Prefix with a number to control order:  "01-tata-motors.png"
//
// Only add logos of genuine clients, with their permission.

const DIR = path.join(process.cwd(), 'public', 'images', 'clients');
const EXT = /\.(png|jpe?g|webp|svg)$/i;

function toName(file) {
  return file
    .replace(EXT, '')
    .replace(/^\d+[-_ ]*/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function getClientLogos() {
  let files = [];
  try {
    files = fs.readdirSync(DIR).filter((f) => EXT.test(f));
  } catch {
    return [];
  }
  return files
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => ({
      src: `/images/clients/${encodeURIComponent(file)}`,
      name: toName(file),
      svg: /\.svg$/i.test(file),
    }));
}
