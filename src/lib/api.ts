import fs from 'fs';
import path from 'path';

export interface Word {
    hanzi: string;
    pinyin: string;
    translations: string[];
}

export async function getVocabularyByLevel(level: string): Promise<Word[]> {
    const filePath = path.join(process.cwd(), `src/lib/data/hsk${level}.json`);
    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    } catch (error) {
        console.error(`Failed to load vocabulary for level ${level}:`, error);
        return [];
    }
}

export function isValidLevel(level: string): boolean {
    return ['1', '2', '3', '4', '5', '6'].includes(level);
}
