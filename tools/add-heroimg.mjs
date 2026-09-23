// ponytail: one-shot insert of heroImg lines after each study title
import { readFileSync, writeFileSync } from 'node:fs';

const map = {
  "title: 'PINTER',": "/img/pinter.jpg",
  "title: 'Snow Keeper',": "/img/snowkeeper.jpg",
  "title: 'DS AI Service',": "/img/dsai.jpg",
  "title: 'Nura Academy',": "/img/nura.jpg",
  "title: 'GTS Parking',": "/img/gts.jpg",
  "title: 'Jetinno Vending',": "/img/jetinno.jpg",
  "title: 'AEGIS AI',": "/img/aegis.jpg",
  "title: 'Sentra AI',": "/img/sentra.jpg",
  "title: 'PAC Agent',": "/img/pac.jpg",
  "title: 'AYU',": "/img/ayu.jpg",
  "title: 'KITA Apps',": "/img/kita.jpg",
  "title: 'RAMA',": "/img/rama.jpg",
  "title: 'SINTA',": "/img/sinta.jpg",
  "title: 'Travel Expense',": "/img/travel.jpg",
  "title: 'RISK AI Agent',": "/img/risk.jpg",
  "title: 'PT Pupuk Indonesia (Persero)',": "/img/pupuk.jpg",
  "title: 'PT Ghraha Trimitra Selaras',": "/img/ghraha.jpg",
  "title: 'Bangkit Academy',": "/img/bangkit.jpg",
};

const f = 'src/data/caseStudies.ts';
let s = readFileSync(f, 'utf8');
let n = 0;
for (const [k, img] of Object.entries(map)) {
  if (s.includes(k)) {
    s = s.replace(k, `${k}\n    heroImg: '${img}',`);
    n++;
  }
}
writeFileSync(f, s);
console.log('inserted', n);
