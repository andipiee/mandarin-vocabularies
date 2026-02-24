import { pinyin } from 'pinyin-pro';
import fs from 'fs';
import path from 'path';

const dir = './src/lib/data';

const files = fs.readdirSync(dir).filter(f => f.startsWith('hsk') && f.endsWith('.json'));

const baseMismatches = [];
const toneOnlyMismatches = [];

function normalizeBase(str) {
  // remove tone marks and spaces, lower-case
  const map = {
    ā: 'a', á: 'a', ǎ: 'a', à: 'a',
    ē: 'e', é: 'e', ě: 'e', è: 'e',
    ī: 'i', í: 'i', ǐ: 'i', ì: 'i',
    ō: 'o', ó: 'o', ǒ: 'o', ò: 'o',
    ū: 'u', ú: 'u', ǔ: 'u', ù: 'u',
    ǖ: 'v', ǘ: 'v', ǚ: 'v', ǜ: 'v', ü: 'v',
  };
  return str
    .toLowerCase()
    .replace(/./g, ch => map[ch] || ch)
    .replace(/\s+/g, '');
}

for (const file of files) {
  const fullPath = path.join(dir, file);
  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  data.forEach((entry, idx) => {
    const expectedArr = pinyin(entry.hanzi, { toneType: 'mark', type: 'array' });
    const expected = expectedArr.join(' ');
    const got = (entry.pinyin || '').trim();
    if (!got) return;

    const normExpected = normalizeBase(expected);
    const normGot = normalizeBase(got);

    if (normExpected !== normGot) {
      baseMismatches.push({ file, index: idx, hanzi: entry.hanzi, pinyin: got, expected });
    } else if (expected.toLowerCase() !== got.toLowerCase()) {
      toneOnlyMismatches.push({ file, index: idx, hanzi: entry.hanzi, pinyin: got, expected });
    }
  });
}

console.log(JSON.stringify({ baseMismatches, toneOnlyMismatchesCount: toneOnlyMismatches.length }, null, 2));
