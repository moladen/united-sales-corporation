import 'server-only';
import fs from 'node:fs';
import path from 'node:path';

// Checks whether a file exists under /public. Used so optional images
// (logo, founder photo, photography) appear automatically once added,
// without code changes and without broken-image requests in the meantime.
export function publicFileExists(src) {
  if (!src) return false;
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', src.replace(/^\//, '')));
  } catch {
    return false;
  }
}
