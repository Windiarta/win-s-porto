// Downloads chosen Wikimedia candidates into public/img/, writes credits JSON.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const j = JSON.parse(readFileSync('/tmp/porti-imgs.json', 'utf8'));
mkdirSync('public/img', { recursive: true });

const picks = {
  gts: 'Parking lot, Gross-Gerau',
  jetinno: 'Sanyo SVM-GSP203-E04',
  snowkeeper: 'Real snowflake macro photo',
  dsai: 'Books on shelves (121)',
  nura: 'A video conference with a class',
  pinter: 'Diagnostic monitors in the control room of Wendelstein 7-X',
  aegis: 'German terrestrial globe',
  sentra: 'Operation Mammoth arrest documents',
  pac: '001 Car factory assembly line',
  ayu: 'Farmer harvesting rice, Kampung Rawa',
  kita: 'Legal Contract & Signature',
  rama: 'WS Form B-29',
  sinta: 'Whatsapp texting',
  travel: 'Flight departure board at Canberra Airport',
  risk: 'Sheet Lightning over Mt Wellington',
  pupuk: 'Jakarta Skyline Part 2',
  ghraha: 'City Traffic Illuminated City Life Night',
  bangkit: 'learning to code on Progate',
};

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const credits = [];
let fail = 0;

for (const [theme, frag] of Object.entries(picks)) {
  const cands = j[theme] || [];
  const hit = cands.find((c) => norm(c.title).includes(norm(frag)));
  if (!hit) { console.log(`MISS ${theme}: "${frag}"`); fail++; continue; }
  const ext = hit.title.split('.').pop().toLowerCase().replace('>', '');
  const name = `${theme}.${ext === 'png' ? 'png' : 'jpg'}`;
  const file = `public/img/${name}`;
  let done = false;
  try {
    const { statSync } = await import('node:fs');
    statSync(file); done = true;
  } catch {}
  if (!done) {
    const url = hit.thumb.replace('/1920px-', '/1280px-').replace('thumb.wikimedia.org/wikipedia/commons/thumb', 'upload.wikimedia.org/wikipedia/commons/thumb');
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'PortfolioBuilder/1.0 (personal site; contact via site)' } });
      if (!res.ok) { console.log(`HTTP ${res.status} ${theme}`); fail++; continue; }
      writeFileSync(file, Buffer.from(await res.arrayBuffer()));
      console.log(`OK ${theme} -> ${file}`);
      await new Promise((r) => setTimeout(r, 6000));
    } catch (e) { console.log(`ERR ${theme}: ${e.message}`); fail++; continue; }
  }
  credits.push({ theme, file: `/img/${name}`, title: hit.title.replace(/^File:/, ''), artist: hit.artist, license: hit.license, url: hit.attributionUrl.split('?')[0] });
}
writeFileSync('/tmp/img-credits.json', JSON.stringify(credits, null, 2));
console.log(`done, ${credits.length} ok, ${fail} fail`);
