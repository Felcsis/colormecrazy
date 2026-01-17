import { translations } from './locales';

console.log('=== TRANSLATION TEST ===');
console.log('Translations object:', translations);
console.log('Hungarian translations:', translations.hu);
console.log('English translations:', translations.en);
console.log('Hero HU:', translations.hu?.hero);
console.log('Hero EN:', translations.en?.hero);
console.log('========================');
