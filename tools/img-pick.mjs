// One-shot image picker: query Wikimedia Commons per theme, save top candidates
// + license/author metadata to /tmp/porti-imgs.json. Run: node tools/img-pick.mjs
const themes = {
  gts: ['parking lot cars', 'parking garage'],
  jetinno: ['vending machine'],
  snowkeeper: ['snowflake macro'],
  dsai: ['library books shelves'],
  nura: ['students classroom laptop'],
  pinter: ['chemical plant factory'],
  aegis: ['world map globe'],
  sentra: ['archive documents folders'],
  pac: ['factory production line'],
  ayu: ['rice field farmer indonesia'],
  kita: ['business meeting report documents'],
  rama: ['office paperwork forms'],
  sinta: ['smartphone messaging chat'],
  travel: ['airport departure board'],
  risk: ['storm clouds lightning'],
  pupuk: ['jakarta skyline buildings'],
  ghraha: ['city traffic street night'],
  bangkit: ['students learning programming'],
  about: ['computer code screen dark'],
};

const UA = 'porti/1.0 (contact: windiarta.widjaja@gmail.com)';

async function q(search) {
  const u =
    'https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=' +
    encodeURIComponent(search + ' filetype:bitmap') +
    '&gsrlimit=4&gsrnamespace=6&prop=imageinfo&iiprop=url|size|extmetadata&iiurlwidth=1600';
  const r = await fetch(u, { headers: { 'User-Agent': UA } });
  const j = await r.json();
  const pages = (j.query && j.query.pages) || {};
  return Object.values(pages).map((x) => {
    const ii = (x.imageinfo && x.imageinfo[0]) || {};
    const em = ii.extmetadata || {};
    const v = (k) => (em[k] && String(em[k].value).replace(/<[^>]*>/g, '').trim()) || '';
    return {
      title: x.title,
      thumb: ii.thumburl || '',
      w: ii.thumbwidth || 0,
      h: ii.thumbheight || 0,
      license: v('License'),
      artist: v('Artist').slice(0, 60),
      attributionUrl: v('AttributionRequired') === 'true' ? ii.descriptionurl : '',
    };
  });
}

const out = {};
for (const [key, queries] of Object.entries(themes)) {
  out[key] = [];
  for (const s of queries) {
    try {
      const res = await q(s);
      out[key].push(...res);
    } catch (e) {
      console.error('FAIL', key, s, e.message);
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  // keep landscape-ish, decent size, known-free licenses first
  out[key] = out[key].filter((x) => x.thumb && x.w >= 800 && x.h >= 400 && /cc|public/i.test(x.license));
  console.log(key, out[key].length);
}
const { writeFileSync } = await import('node:fs');
writeFileSync('/tmp/porti-imgs.json', JSON.stringify(out, null, 1));
console.log('saved /tmp/porti-imgs.json');
