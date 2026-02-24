import { pinyin } from 'pinyin-pro';
import fs from 'fs';
import path from 'path';

const dir = './src/lib/data';

const files = fs.readdirSync(dir).filter(f => f.startsWith('hsk') && f.endsWith('.json'));

for (const file of files) {
  const fullPath = path.join(dir, file);
  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));

  let changed = 0;

  const newData = data.map((entry) => {
    if (!entry || typeof entry.hanzi !== 'string') return entry;
    const expectedArr = pinyin(entry.hanzi, { toneType: 'mark', type: 'array' });
    const expected = expectedArr.join(' ');
    const oldPinyin = (entry.pinyin || '').trim();
    if (expected && expected.toLowerCase() !== oldPinyin.toLowerCase()) {
      changed++;
      return { ...entry, pinyin: expected };
    }
    return entry;
  });

  fs.writeFileSync(fullPath, JSON.stringify(newData, null, 2), 'utf8');
  console.log(`${file}: updated ${changed} entries`);
}
