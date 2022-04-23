import { Language } from './language';

export class DictionaryEntry {
    id?: number;
    word: string;
    translation: string;
    description: string;
    language: Language;
}