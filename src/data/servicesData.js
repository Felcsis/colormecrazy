// Hierarchikus szolgáltatás adatstruktúra
// Főpaklik → Al-paklik → Al-al-paklik → Al-al-al-paklik → Kártyák

export const servicesData = {
  mainDecks: [
    // ═══════════════════════════════════════════════════════════════
    // 🎨 FODRÁSZAT FŐPAKLI
    // ═══════════════════════════════════════════════════════════════
    {
      id: 'fodraszat',
      name: 'Fodrászat',
      englishName: 'Hairdressing',
      icon: '🎨',
      arcana: 'PAKLI',
      type: 'main-deck',
      deckCount: 4,
      totalCards: '130+',

      subDecks: [
        // ─────────────────────────────────────────────────────────
        // I. FESTÉS TECHNIKÁK (Direct cards - 9 kártya)
        // ─────────────────────────────────────────────────────────
        {
          id: 'festes-technikak',
          name: 'Festés Technikák',
          englishName: 'Coloring Techniques',
          icon: '🎨',
          arcana: 'I',
          type: 'sub-deck',
          directCards: true,
          cardCount: 9,

          cards: [
            {
              id: 'allover',
              arcana: 'I',
              title: 'Egyszínű festés',
              subtitle: 'All Over Color',
              icon: '🎨',
              image: null, // Később feltöltésre
              duration: '2 óra',
              description: 'Egyenletes, egyszínű hajfestés a teljes hajra.',
              steps: [
                'Konzultáció a kívánt színről',
                'Haj előkészítése és védelem',
                'Festék egyenletes felvitele',
                'Behatási idő',
                'Kimosás és ápolás',
                'Szárítás és formázás'
              ]
            },
            {
              id: 'balayage',
              arcana: 'II',
              title: 'Balayage',
              subtitle: 'Kézzel festett melírozás',
              icon: '🎨',
              image: null,
              duration: '4 óra',
              description: 'Kézzel festett, természetes átmenetű melírozás.',
              steps: [
                'Hajszín elemzése',
                'Egyedi technika megtervezése',
                'Kézzel festett melír felvitele',
                'Természetes átmenetek kialakítása',
                'Tónerezés',
                'Ápolás és styling'
              ]
            },
            {
              id: 'bleaching',
              arcana: 'III',
              title: 'Szőkítés és árnyalás',
              subtitle: 'Bleaching & Toning',
              icon: '🎨',
              image: null,
              duration: '3 óra',
              description: 'Professzionális szőkítés és színárnyalás.',
              steps: [
                'Hajállapot felmérése',
                'Szőkítő felvitele',
                'Folyamat monitorozása',
                'Sárgás árnyalat semlegesítése',
                'Tóner alkalmazása',
                'Intenzív hajápolás'
              ]
            },
            {
              id: 'correction',
              arcana: 'IV',
              title: 'Színkorrekció',
              subtitle: 'Color Correction',
              icon: '🎨',
              image: null,
              duration: '5 óra',
              description: 'Sikertelen festés javítása és színkorrekció.',
              steps: [
                'Részletes hajszín-analízis',
                'Korrekciós terv készítése',
                'Nem kívánt pigmentek eltávolítása',
                'Fokozatos színkorrekció',
                'Tónerezés és kiegyenlítés',
                'Speciális ápolási protokoll'
              ]
            },
            {
              id: 'consultation',
              arcana: 'V',
              title: 'Konzultáció',
              subtitle: 'Consultation',
              icon: '💬',
              image: null,
              duration: '30 perc',
              price: 'Ingyenes',
              description: 'Személyes konzultáció hajfestési lehetőségekről.',
              steps: [
                'Hajtípus meghatározása',
                'Hajállapot felmérése',
                'Kívánt végeredmény megbeszélése',
                'Technika kiválasztása',
                'Időbeosztás tervezése',
                'Árajánlat készítése'
              ]
            },
            {
              id: 'vivid',
              arcana: 'VI',
              title: 'Dupla folyamat',
              subtitle: 'Vivid Color Process',
              icon: '🌈',
              image: null,
              duration: '5 óra 30 perc',
              description: 'Szőkítés + élénk színek (pink, kék, lila, stb.).',
              steps: [
                'Haj előkészítése',
                'Teljes szőkítés világosszőke alapra',
                'Tisztítás és szárítás',
                'Élénk szín felvitele',
                'Hosszú behatási idő',
                'Színrögzítés és ápolás'
              ]
            },
            {
              id: 'fullfoil',
              arcana: 'VII',
              title: 'Teljes melír fóliával',
              subtitle: 'Full Foil Highlights',
              icon: '📋',
              image: null,
              duration: '4 óra',
              description: 'Teljes fej melírozása fóliás technikával.',
              steps: [
                'Hajfelosztás szekciókra',
                'Fóliázási technika alkalmazása',
                'Teljes fej melírozása',
                'Egyenletes szín elérése',
                'Árnyalás tónerrel',
                'Dimenzió és mélység kialakítása'
              ]
            },
            {
              id: 'partialfoil',
              arcana: 'VIII',
              title: 'Részleges melír',
              subtitle: 'Partial Foil',
              icon: '📋',
              image: null,
              duration: '3 óra 30 perc',
              description: 'Fej felső részének melírozása.',
              steps: [
                'Stratégiai zónák kijelölése',
                'Fejtető és oldalsó részek melírozása',
                'Természetes fényhatás',
                'Visszafogott dimenzió',
                'Tónerezés',
                'Finom árnyalatok kialakítása'
              ]
            },
            {
              id: 'roottouch',
              arcana: 'IX',
              title: 'Tőfestés',
              subtitle: 'Root Touch Up',
              icon: '🎨',
              image: null,
              duration: '1,5 óra',
              description: 'Kinőtt hajszín frissítése tőből.',
              steps: [
                'Lenövés felmérése',
                'Színegyeztetés',
                'Tőfesték precíz felvitele',
                'Behatási idő',
                'Alapos öblítés',
                'Gyors szárítás'
              ]
            }
          ]
        },

        // ─────────────────────────────────────────────────────────
        // II. HAJVÁGÁS TECHNIKÁK (Has sub-sub-decks)
        // ─────────────────────────────────────────────────────────
        {
          id: 'hajvagas-technikak',
          name: 'Hajvágás Technikák',
          englishName: 'Cutting Techniques',
          icon: '✂️',
          arcana: 'II',
          type: 'sub-deck',
          directCards: false,
          deckCount: 4,
          totalCards: 111,

          subSubDecks: [
            // ┌─────────────────────────────────────────────────┐
            // │ II.A - ALAP TECHNIKÁK (Direct cards - 12)       │
            // └─────────────────────────────────────────────────┘
            {
              id: 'alap-technikak',
              name: 'Alap Technikák',
              englishName: 'Basic Techniques',
              icon: '📐',
              arcana: 'I',
              type: 'sub-sub-deck',
              directCards: true,
              cardCount: 12,
              description: 'Alapvető vágási technikák, minden fazon ebből épül fel',

              cards: [
                { id: 'tompa-vagas', arcana: '1', title: 'Tompa vágás', subtitle: 'Blunt cut', icon: '✂️', duration: '~45 perc', description: 'Egyenes, tompa vágás minden hajhosszban.' },
                { id: 'retegezett-vagas', arcana: '2', title: 'Rétegezett vágás', subtitle: 'Layered cut', icon: '✂️', duration: '~50 perc', description: 'Több rétegben vágott haj, térfogat és mozgás.' },
                { id: 'fokozatos-vagas', arcana: '3', title: 'Fokozatos vágás', subtitle: 'Graduation', icon: '✂️', duration: '~50 perc', description: 'Fokozatosan rövidülő hajhosszúságok.' },
                { id: 'lepcsozes', arcana: '4', title: 'Lépcsőzetes vágás', subtitle: 'Step cut', icon: '✂️', duration: '~50 perc', description: 'Látható lépcsők a hajban, dinamikus megjelenés.' },
                { id: 'egyhossz', arcana: '5', title: 'Egyhossz', subtitle: 'One length', icon: '✂️', duration: '~40 perc', description: 'Egyenletes hosszúságú haj, egyszerű klasszikus vágás.' },
                { id: 'belso-reteg', arcana: '6', title: 'Belső rétegezés', subtitle: 'Internal layering', icon: '✂️', duration: '~45 perc', description: 'Belül rövidebb rétegek, térfogat nélküli könnyedség.' },
                { id: 'texturalt', arcana: '7', title: 'Texturált vágás', subtitle: 'Textured cut', icon: '✂️', duration: '~50 perc', description: 'Textúrát adó technikák, természetes megjelenés.' },
                { id: 'ritkitas', arcana: '8', title: 'Ritkítás', subtitle: 'Thinning / Slicing', icon: '✂️', duration: '~30 perc', description: 'Haj ritkulása, térfogat csökkentés.' },
                { id: 'point-cut', arcana: '9', title: 'Point cut', subtitle: 'Pointed cutting', icon: '✂️', duration: '~45 perc', description: 'Fésű nélküli, finom texturálás olló hegyével.' },
                { id: 'slide-cut', arcana: '10', title: 'Slide cut', subtitle: 'Sliding technique', icon: '✂️', duration: '~50 perc', description: 'Csúsztatott vágás lágy átmenetekhez.' },
                { id: 'razor-cut', arcana: '11', title: 'Razor cut', subtitle: 'Borotvás vágás', icon: '🪒', duration: '~55 perc', description: 'Borotvával végzett vágás, puha textúra.' },
                { id: 'freehand', arcana: '12', title: 'Freehand vágás', subtitle: 'Freehand cutting', icon: '✂️', duration: '~60 perc', description: 'Szabad kézzel végzett művészi vágás.' }
              ]
            },

            // ┌─────────────────────────────────────────────────┐
            // │ II.B - NŐI HAJVÁGÁSOK (Has sub-sub-sub-decks)  │
            // └─────────────────────────────────────────────────┘
            {
              id: 'noi-hajvagasok',
              name: 'Női Hajvágások',
              englishName: 'Women\'s Haircuts',
              icon: '👩',
              arcana: 'II',
              type: 'sub-sub-deck',
              directCards: false,
              deckCount: 5,
              totalCards: 43,

              subSubSubDecks: [
                // Klasszikus női (7 kártya)
                {
                  id: 'klasszikus-noi',
                  name: 'Klasszikus Női',
                  englishName: 'Classic Women\'s',
                  icon: '💇',
                  arcana: 'A',
                  cardCount: 7,
                  cards: [
                    { id: 'egyenes-hosszu', arcana: '1', title: 'Egyenes hosszú haj', subtitle: 'Long straight hair', icon: '💇', duration: '~45 perc' },
                    { id: 'felhosszu', arcana: '2', title: 'Félhosszú haj', subtitle: 'Medium length', icon: '💇', duration: '~40 perc' },
                    { id: 'rovid-noi', arcana: '3', title: 'Rövid női haj', subtitle: 'Short women\'s hair', icon: '💇', duration: '~35 perc' },
                    { id: 'a-vonalu', arcana: '4', title: 'A-vonalú vágás', subtitle: 'A-line cut', icon: '💇', duration: '~45 perc' },
                    { id: 'v-vonalu', arcana: '5', title: 'V-vonalú vágás', subtitle: 'V-line cut', icon: '💇', duration: '~45 perc' },
                    { id: 'u-vonalu', arcana: '6', title: 'U-vonalú vágás', subtitle: 'U-line cut', icon: '💇', duration: '~45 perc' },
                    { id: 'egyenes-frufru', arcana: '7', title: 'Klasszikus frufruval', subtitle: 'With classic bangs', icon: '💇', duration: '~50 perc' }
                  ]
                },

                // Bubi variánsok (9 kártya)
                {
                  id: 'bubi-variansok',
                  name: 'Bubi Variánsok',
                  englishName: 'Bob Variations',
                  icon: '🎀',
                  arcana: 'B',
                  cardCount: 9,
                  cards: [
                    { id: 'bubi-bob', arcana: '1', title: 'Bubi', subtitle: 'Classic Bob', icon: '🎀', duration: '~45 perc', description: 'Klasszikus bubi vágás állhosszban.' },
                    { id: 'hosszu-bubi-lob', arcana: '2', title: 'Hosszú bubi', subtitle: 'Long Bob (Lob)', icon: '🎀', duration: '~50 perc', description: 'Vállhosszú bubi, modern és nőies.' },
                    { id: 'gradualt-bubi', arcana: '3', title: 'Graduált bubi', subtitle: 'Graduated Bob', icon: '🎀', duration: '~50 perc', description: 'Hátul rövidebb, elöl hosszabb dinamikus vágás.' },
                    { id: 'egyenes-bubi', arcana: '4', title: 'Egyenes bubi', subtitle: 'Straight Bob', icon: '🎀', duration: '~45 perc', description: 'Tökéletesen egyenes, tompa vágás.' },
                    { id: 'aszimmetrikus-bubi', arcana: '5', title: 'Aszimmetrikus bubi', subtitle: 'Asymmetric Bob', icon: '🎀', duration: '~55 perc', description: 'Két oldal különböző hosszúságú.' },
                    { id: 'olasz-bubi', arcana: '6', title: 'Olasz bubi', subtitle: 'Italian Bob', icon: '🎀', duration: '~50 perc', description: 'Rétegezett, könnyű, mediterrán stílus.' },
                    { id: 'francia-bubi', arcana: '7', title: 'Francia bubi', subtitle: 'French Bob', icon: '🎀', duration: '~50 perc', description: 'Rövid, fülig érő elegáns vágás.' },
                    { id: 'pageboy', arcana: '8', title: 'Pageboy', subtitle: 'Pageboy cut', icon: '🎀', duration: '~45 perc', description: 'Kerek, befelé hajló klasszikus forma.' },
                    { id: 'curly-bob', arcana: '9', title: 'Curly Bob', subtitle: 'Göndör bubi', icon: '🎀', duration: '~60 perc', description: 'Bubi göndör hajra optimalizálva.' }
                  ]
                },

                // Rétegezett hajak (9 kártya)
                {
                  id: 'retegezett-hajak',
                  name: 'Rétegezett Hajak',
                  englishName: 'Layered Hair',
                  icon: '🌊',
                  arcana: 'C',
                  cardCount: 9,
                  cards: [
                    { id: 'lepcsozes-hosszu', arcana: '1', title: 'Lépcsőzetes hosszú', subtitle: 'Step layers long', icon: '🌊', duration: '~60 perc', description: 'Hosszú haj lépcsőzetes rétegekkel.' },
                    { id: 'soft-layered', arcana: '2', title: 'Soft layered cut', subtitle: 'Lágy rétegek', icon: '🌊', duration: '~55 perc', description: 'Finom, lágy átmenetek.' },
                    { id: 'butterfly-cut', arcana: '3', title: 'Butterfly cut', subtitle: 'Pillangó vágás', icon: '🌊', duration: '~60 perc', description: 'Rövid rétegek felül, hosszú lent, pillangó forma.' },
                    { id: 'shag', arcana: '4', title: 'Shag', subtitle: 'Shaggy cut', icon: '🌊', duration: '~65 perc', description: 'Kusza, texturált, 70-es évek retro.' },
                    { id: 'modern-shag', arcana: '5', title: 'Modern shag', subtitle: 'Modernized shag', icon: '🌊', duration: '~65 perc', description: 'Shag mai interpretációja.' },
                    { id: 'wolf-cut', arcana: '6', title: 'Wolf cut', subtitle: 'Farkas vágás', icon: '🌊', duration: '~70 perc', description: 'Mullet + shag keverék, vadító megjelenés.' },
                    { id: 'octopus-cut', arcana: '7', title: 'Octopus cut', subtitle: 'Polip vágás', icon: '🌊', duration: '~70 perc', description: 'Extrém rétegezett, sok mozgás.' },
                    { id: 'vagott-reteg', arcana: '8', title: 'Vágott réteges', subtitle: 'Choppy layers', icon: '🌊', duration: '~60 perc', description: 'Darabos, texturált rétegek.' },
                    { id: 'texturalt-felhosszu', arcana: '9', title: 'Texturált félhosszú', subtitle: 'Textured medium', icon: '🌊', duration: '~55 perc', description: 'Félhosszú haj textúrával.' }
                  ]
                },

                // Frufru típusok (9 kártya)
                {
                  id: 'frufru-tipusok',
                  name: 'Frufru Típusok',
                  englishName: 'Bangs Types',
                  icon: '💁',
                  arcana: 'D',
                  cardCount: 9,
                  cards: [
                    { id: 'egyenes-frufru', arcana: '1', title: 'Egyenes frufru', subtitle: 'Straight bangs', icon: '💁', duration: '~20 perc', description: 'Klasszikus egyenes frufru.' },
                    { id: 'tomor-frufru', arcana: '2', title: 'Tömör frufru', subtitle: 'Blunt bangs', icon: '💁', duration: '~20 perc', description: 'Sűrű, tompa vágású frufru.' },
                    { id: 'ritkitott-frufru', arcana: '3', title: 'Ritkított frufru', subtitle: 'Wispy bangs', icon: '💁', duration: '~20 perc', description: 'Könnyű, légies frufru.' },
                    { id: 'curtain-bangs', arcana: '4', title: 'Curtain bangs', subtitle: 'Függöny frufru', icon: '💁', duration: '~25 perc', description: 'Középen szétváló, oldalt hosszabb.' },
                    { id: 'baby-bangs', arcana: '5', title: 'Baby bangs', subtitle: 'Mikrofrufru', icon: '💁', duration: '~20 perc', description: 'Nagyon rövid, a homlok közepéig.' },
                    { id: 'oldalra-fesult', arcana: '6', title: 'Oldalra fésült frufru', subtitle: 'Side-swept bangs', icon: '💁', duration: '~25 perc', description: 'Oldalra fésülhető aszimmetrikus.' },
                    { id: 'aszimmetrikus-frufru', arcana: '7', title: 'Aszimmetrikus frufru', subtitle: 'Asymmetric bangs', icon: '💁', duration: '~25 perc', description: 'Egyenetlen, különböző hosszúságú.' },
                    { id: 'mikrofrufru', arcana: '8', title: 'Mikrofrufru', subtitle: 'Micro bangs', icon: '💁', duration: '~15 perc', description: 'Extrém rövid, statement frufru.' },
                    { id: 'korean-see-through', arcana: '9', title: 'Korean see-through', subtitle: 'Áttetsző frufru', icon: '💁', duration: '~20 perc', description: 'Könnyű, áttetsző koreai stílus.' }
                  ]
                },

                // Rövid női (9 kártya)
                {
                  id: 'rovid-noi',
                  name: 'Rövid Női',
                  englishName: 'Short Women\'s',
                  icon: '⚡',
                  arcana: 'E',
                  cardCount: 9,
                  cards: [
                    { id: 'pixie', arcana: '1', title: 'Pixie', subtitle: 'Pixie cut', icon: '⚡', duration: '~40 perc', description: 'Klasszikus rövid tündér vágás.' },
                    { id: 'pixie-bob', arcana: '2', title: 'Pixie bob', subtitle: 'Hosszabb pixie', icon: '⚡', duration: '~45 perc', description: 'Pixie és bob keveréke.' },
                    { id: 'short-shag', arcana: '3', title: 'Short shag', subtitle: 'Rövid shag', icon: '⚡', duration: '~50 perc', description: 'Texturált rövid haj, retro feeling.' },
                    { id: 'garcon', arcana: '4', title: 'Garçon', subtitle: 'Fiús vágás', icon: '⚡', duration: '~35 perc', description: 'Nagyon rövid, androgén stílus.' },
                    { id: 'boyish-cut', arcana: '5', title: 'Boyish cut', subtitle: 'Tomboy vágás', icon: '⚡', duration: '~35 perc', description: 'Fiús hatású női vágás.' },
                    { id: 'undercut-noi', arcana: '6', title: 'Undercut női', subtitle: 'Women\'s undercut', icon: '⚡', duration: '~50 perc', description: 'Oldalra/ alul borotvált design.' },
                    { id: 'aszimmetrikus-rovid', arcana: '7', title: 'Aszimmetrikus rövid', subtitle: 'Asymmetric short', icon: '⚡', duration: '~50 perc', description: 'Aszimmetrikus rövid forma.' },
                    { id: 'alternativ-rovid', arcana: '8', title: 'Alternatív rövid', subtitle: 'Alternative short', icon: '⚡', duration: '~55 perc', description: 'Kreatív, egyedi rövid frizura.' },
                    { id: 'buzz-cut-noi', arcana: '9', title: 'Buzz cut női', subtitle: 'Women\'s buzz', icon: '⚡', duration: '~25 perc', description: 'Géppel vágott nagyon rövid.' }
                  ]
                }
              ]
            },

            // ┌─────────────────────────────────────────────────┐
            // │ II.C - FÉRFI HAJVÁGÁSOK (Has sub-sub-sub-decks)│
            // └─────────────────────────────────────────────────┘
            {
              id: 'ferfi-hajvagasok',
              name: 'Férfi Hajvágások',
              englishName: 'Men\'s Haircuts',
              icon: '👨',
              arcana: 'III',
              type: 'sub-sub-deck',
              directCards: false,
              deckCount: 4,
              totalCards: 33,

              subSubSubDecks: [
                // Klasszikus férfi (8 kártya)
                {
                  id: 'klasszikus-ferfi',
                  name: 'Klasszikus Férfi',
                  englishName: 'Classic Men\'s',
                  icon: '👔',
                  arcana: 'A',
                  cardCount: 8,
                  cards: [
                    { id: 'klasszikus-rovid', arcana: '1', title: 'Klasszikus rövid', subtitle: 'Classic short', icon: '👔', duration: '~30 perc' },
                    { id: 'oldalt-rovid', arcana: '2', title: 'Oldalt rövid, felül hosszabb', subtitle: 'Short sides long top', icon: '👔', duration: '~35 perc' },
                    { id: 'business-cut', arcana: '3', title: 'Business cut', subtitle: 'Üzleti vágás', icon: '👔', duration: '~30 perc' },
                    { id: 'gentleman-cut', arcana: '4', title: 'Gentleman cut', subtitle: 'Úriember vágás', icon: '👔', duration: '~35 perc' },
                    { id: 'ivy-league', arcana: '5', title: 'Ivy League', subtitle: 'Harvard clip', icon: '👔', duration: '~30 perc' },
                    { id: 'crew-cut', arcana: '6', title: 'Crew cut', subtitle: 'Csapat vágás', icon: '👔', duration: '~25 perc' },
                    { id: 'buzz-cut', arcana: '7', title: 'Buzz cut', subtitle: 'Géppel vágott', icon: '👔', duration: '~20 perc' },
                    { id: 'caesar-cut', arcana: '8', title: 'Caesar cut', subtitle: 'Cézár vágás', icon: '👔', duration: '~30 perc' }
                  ]
                },

                // Fade típusok (7 kártya)
                {
                  id: 'fade-tipusok',
                  name: 'Fade Típusok',
                  englishName: 'Fade Types',
                  icon: '🔥',
                  arcana: 'B',
                  cardCount: 7,
                  cards: [
                    { id: 'low-fade', arcana: '1', title: 'Low fade', subtitle: 'Alacsony fade', icon: '🔥', duration: '~40 perc', description: 'Fokozatos átmenet alul kezdődik.' },
                    { id: 'mid-fade', arcana: '2', title: 'Mid fade', subtitle: 'Közepes fade', icon: '🔥', duration: '~40 perc', description: 'Átmenet a fej közepén.' },
                    { id: 'high-fade', arcana: '3', title: 'High fade', subtitle: 'Magas fade', icon: '🔥', duration: '~40 perc', description: 'Magasan kezdődő átmenet.' },
                    { id: 'skin-fade', arcana: '4', title: 'Skin fade', subtitle: 'Bőrre fade', icon: '🔥', duration: '~45 perc', description: 'Bőrig borotvált alul.' },
                    { id: 'taper-fade', arcana: '5', title: 'Taper fade', subtitle: 'Taper átmenet', icon: '🔥', duration: '~40 perc', description: 'Lágy fokozatos rövidülés.' },
                    { id: 'drop-fade', arcana: '6', title: 'Drop fade', subtitle: 'Leeső fade', icon: '🔥', duration: '~45 perc', description: 'Hátul lejjebb eső átmenet.' },
                    { id: 'burst-fade', arcana: '7', title: 'Burst fade', subtitle: 'Burst átmenet', icon: '🔥', duration: '~45 perc', description: 'Félkör alakú fade fül körül.' }
                  ]
                },

                // Modern férfi (10 kártya)
                {
                  id: 'modern-ferfi',
                  name: 'Modern Férfi',
                  englishName: 'Modern Men\'s',
                  icon: '⚡',
                  arcana: 'C',
                  cardCount: 10,
                  cards: [
                    { id: 'undercut', arcana: '1', title: 'Undercut', subtitle: 'Aláborotvált', icon: '⚡', duration: '~45 perc', description: 'Felül hosszú, oldalra/alul borotvált.' },
                    { id: 'slick-back', arcana: '2', title: 'Slick back', subtitle: 'Hátra fésült', icon: '⚡', duration: '~35 perc', description: 'Elegánsan hátra simított haj.' },
                    { id: 'pompadour', arcana: '3', title: 'Pompadour', subtitle: 'Pompadúr', icon: '⚡', duration: '~40 perc', description: 'Felfelé és hátra fésült térfogat.' },
                    { id: 'quiff', arcana: '4', title: 'Quiff', subtitle: 'Kviff', icon: '⚡', duration: '~40 perc', description: 'Elöl feltúrt, oldalra rövid.' },
                    { id: 'french-crop', arcana: '5', title: 'French crop', subtitle: 'Francia crop', icon: '⚡', duration: '~35 perc', description: 'Rövid frufru előre, rövid oldalak.' },
                    { id: 'textured-crop', arcana: '6', title: 'Textured crop', subtitle: 'Texturált crop', icon: '⚡', duration: '~40 perc', description: 'Darabos textúrájú rövidített.' },
                    { id: 'messy-cut', arcana: '7', title: 'Messy cut', subtitle: 'Kusza vágás', icon: '⚡', duration: '~40 perc', description: 'Rendetlenül menő stílus.' },
                    { id: 'modern-mullet', arcana: '8', title: 'Modern mullet', subtitle: 'Mai mullet', icon: '⚡', duration: '~50 perc', description: 'Mullet modern változata.' },
                    { id: 'wolf-cut-ferfi', arcana: '9', title: 'Wolf cut férfi', subtitle: 'Men\'s wolf cut', icon: '⚡', duration: '~55 perc', description: 'Férfi változat a wolf cut-ból.' },
                    { id: 'faux-hawk', arcana: '10', title: 'Faux hawk', subtitle: 'Álmohawk', icon: '⚡', duration: '~40 perc', description: 'Mohawk light változat.' }
                  ]
                },

                // Hosszú férfi (8 kártya)
                {
                  id: 'hosszu-ferfi',
                  name: 'Hosszú Férfi',
                  englishName: 'Long Men\'s',
                  icon: '🌊',
                  arcana: 'D',
                  cardCount: 8,
                  cards: [
                    { id: 'felhosszu-ferfi', arcana: '1', title: 'Félhosszú férfi', subtitle: 'Medium men\'s', icon: '🌊', duration: '~45 perc' },
                    { id: 'hosszu-ferfi-hair', arcana: '2', title: 'Hosszú férfi haj', subtitle: 'Long men\'s hair', icon: '🌊', duration: '~55 perc' },
                    { id: 'man-bun', arcana: '3', title: 'Man bun', subtitle: 'Férfi konty', icon: '🌊', duration: '~50 perc' },
                    { id: 'top-knot', arcana: '4', title: 'Top knot', subtitle: 'Tetőkonty', icon: '🌊', duration: '~50 perc' },
                    { id: 'surfer-hair', arcana: '5', title: 'Surfer hair', subtitle: 'Szörfös haj', icon: '🌊', duration: '~50 perc' },
                    { id: 'layered-long-hair', arcana: '6', title: 'Layered long hair', subtitle: 'Rétegezett hosszú', icon: '🌊', duration: '~60 perc' },
                    { id: 'viking-hair', arcana: '7', title: 'Viking hair', subtitle: 'Viking haj', icon: '🌊', duration: '~55 perc' },
                    { id: 'rockstar-hair', arcana: '8', title: 'Rockstar hair', subtitle: 'Rocksztár haj', icon: '🌊', duration: '~60 perc' }
                  ]
                }
              ]
            },

            // ┌─────────────────────────────────────────────────┐
            // │ II.D - GYERMEK + SPECIÁLIS (Direct - 15)       │
            // └─────────────────────────────────────────────────┘
            {
              id: 'gyermek-specialis',
              name: 'Gyermek + Speciális',
              englishName: 'Kids + Special',
              icon: '👶✨',
              arcana: 'IV',
              type: 'sub-sub-deck',
              directCards: true,
              cardCount: 15,
              description: 'Gyermek hajvágások és speciális technikák',

              cards: [
                // Gyermek hajvágások (4)
                { id: 'klasszikus-gyerek', arcana: '1', title: 'Klasszikus gyerek', subtitle: 'Classic kids', icon: '👶', duration: '~25 perc', description: 'Hagyományos gyermek hajvágás.' },
                { id: 'rovid-gyerek', arcana: '2', title: 'Rövid gyerek', subtitle: 'Short kids', icon: '👶', duration: '~20 perc', description: 'Praktikus rövid gyerek haj.' },
                { id: 'felhosszu-gyerek', arcana: '3', title: 'Félhosszú gyerek', subtitle: 'Medium kids', icon: '👶', duration: '~25 perc', description: 'Félhosszú gyermek vágás.' },
                { id: 'unisex-gyerek', arcana: '4', title: 'Unisex gyerek', subtitle: 'Gender-neutral', icon: '👶', duration: '~25 perc', description: 'Nemtől független gyerek fazon.' },

                // Unisex/Alternatív (7)
                { id: 'shag-unisex', arcana: '5', title: 'Shag unisex', subtitle: 'Universal shag', icon: '✨', duration: '~60 perc', description: 'Shag bármely nemhez.' },
                { id: 'wolf-cut-unisex', arcana: '6', title: 'Wolf cut unisex', subtitle: 'Universal wolf', icon: '✨', duration: '~65 perc', description: 'Nemtől független wolf cut.' },
                { id: 'mullet-unisex', arcana: '7', title: 'Mullet', subtitle: 'Classic mullet', icon: '✨', duration: '~50 perc', description: 'Elöl-oldalt rövid, hátul hosszú.' },
                { id: 'aszimmetrikus-unisex', arcana: '8', title: 'Aszimmetrikus', subtitle: 'Asymmetric', icon: '✨', duration: '~55 perc', description: 'Aszimmetrikus kreatív vágás.' },
                { id: 'undercut-unisex', arcana: '9', title: 'Undercut unisex', subtitle: 'Universal undercut', icon: '✨', duration: '~50 perc', description: 'Nemtől független undercut.' },
                { id: 'genderless-cut', arcana: '10', title: 'Genderless cut', subtitle: 'Nemtelen vágás', icon: '✨', duration: '~50 perc', description: 'Teljesen nemtől független stílus.' },
                { id: 'mohawk', arcana: '11', title: 'Mohawk', subtitle: 'Irokéz', icon: '✨', duration: '~45 perc', description: 'Oldalt borotvált, középen állva.' },

                // Speciális technikák (4)
                { id: 'afro-vagas', arcana: '12', title: 'Afro hajvágás', subtitle: 'Afro cut', icon: '🌟', duration: '~60 perc', description: 'Afro textúrájú haj vágása.' },
                { id: 'gondor-curl-by-curl', arcana: '13', title: 'Göndör - curl by curl', subtitle: 'Deva cut', icon: '🌟', duration: '~75 perc', description: 'Göndör szálankénti vágása.' },
                { id: 'dry-cut', arcana: '14', title: 'Dry cut', subtitle: 'Szárazon vágás', icon: '🌟', duration: '~50 perc', description: 'Száraz hajon vágás természetes formához.' },
                { id: 'kreativ-editorial', arcana: '15', title: 'Kreatív / editorial', subtitle: 'Artistic cut', icon: '🌟', duration: '~90 perc', description: 'Művészi, egyedi kreatív vágás.' }
              ]
            }
          ]
        },

        // ─────────────────────────────────────────────────────────
        // III. KEZELÉSEK (Direct cards - 5 kártya)
        // ─────────────────────────────────────────────────────────
        {
          id: 'kezelesek',
          name: 'Kezelések',
          englishName: 'Treatments',
          icon: '✨',
          arcana: 'III',
          type: 'sub-deck',
          directCards: true,
          cardCount: 5,

          cards: [
            { id: 'keratin-kezeles', arcana: '1', title: 'Keratin kezelés', subtitle: 'Keratin treatment', icon: '✨', duration: '~120 perc', description: 'Haj kiegyenesítés és ápolás keratinnal.' },
            { id: 'olaplex', arcana: '2', title: 'Olaplex kezelés', subtitle: 'Bond building', icon: '✨', duration: '~45 perc', description: 'Hajszerkezet helyreállítás.' },
            { id: 'melytaplalo', arcana: '3', title: 'Mélyápoló pakolás', subtitle: 'Deep conditioning', icon: '✨', duration: '~60 perc', description: 'Intenzív hidratáló hajpakolás.' },
            { id: 'hajbotes', arcana: '4', title: 'Hajbőr kezelés', subtitle: 'Scalp treatment', icon: '✨', duration: '~45 perc', description: 'Hajbőr ápolás és masszázs.' },
            { id: 'protein-kezeles', arcana: '5', title: 'Protein kezelés', subtitle: 'Protein treatment', icon: '✨', duration: '~60 perc', description: 'Fehérje pótló regeneráló kezelés.' }
          ]
        },

        // ─────────────────────────────────────────────────────────
        // IV. RASZTA/DREADLOCK (Direct cards - 4 kártya)
        // ─────────────────────────────────────────────────────────
        {
          id: 'raszta-dreadlock',
          name: 'Raszta/Dreadlock',
          englishName: 'Rasta/Dreadlocks',
          icon: '🔗',
          arcana: 'IV',
          type: 'sub-deck',
          directCards: true,
          cardCount: 4,

          cards: [
            { id: 'raszta-keszites', arcana: '1', title: 'Raszta készítés', subtitle: 'Braiding', icon: '🔗', duration: '~4-6 óra', description: 'Fonott raszta frizura készítése.' },
            { id: 'dreadlock-keszites', arcana: '2', title: 'Dreadlock készítés', subtitle: 'Dread making', icon: '🔗', duration: '~6-10 óra', description: 'Dreadlock tincsek kialakítása.' },
            { id: 'raszta-karbantartas', arcana: '3', title: 'Raszta karbantartás', subtitle: 'Braid maintenance', icon: '🔗', duration: '~2-3 óra', description: 'Meglévő raszta frissítése, ápolása.' },
            { id: 'dreadlock-karbantartas', arcana: '4', title: 'Dreadlock karbantartás', subtitle: 'Dread maintenance', icon: '🔗', duration: '~2-4 óra', description: 'Dreadlock tincsek karbantartása.' }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // 💎 KOZMETIKA FŐPAKLI
    // ═══════════════════════════════════════════════════════════════
    {
      id: 'kozmetika',
      name: 'Kozmetika',
      englishName: 'Cosmetology',
      icon: '💎',
      arcana: 'PAKLI',
      type: 'main-deck',
      deckCount: 2,
      totalCards: 12,

      subDecks: [
        // ─────────────────────────────────────────────────────────
        // I. ARCKEZELÉSEK (Direct cards - 9 kártya)
        // ─────────────────────────────────────────────────────────
        {
          id: 'arckezelesek',
          name: 'Arckezelések',
          englishName: 'Facial Treatments',
          icon: '💆',
          arcana: 'I',
          type: 'sub-deck',
          directCards: true,
          cardCount: 9,

          cards: [
            {
              id: 'expressz',
              arcana: '1',
              title: 'Expressz kiskezelés',
              subtitle: 'Express facial',
              icon: '⚡',
              duration: '30 perc',
              price: '11.000 Ft',
              description: 'Gyors arckezelés időhiányban szenvedőknek.',
              steps: [
                'Letisztítás: Bőrtípusnak megfelelő letisztító',
                'Peelingezés: Elhalt hámsejtek eltávolítása',
                'Szükség szerint pH visszaállítás, vagy további hámoldás',
                'Pakolás: Tápláló, hidratáló, vagy gyulladáscsökkentő krémes arcpakolás bőrtípustól függően',
                'Befejező krém: Bőrtípusnak és napszaknak megfelelő hidratáló krém'
              ]
            },
            {
              id: 'tini-kezeles',
              arcana: '2',
              title: 'Tini kezelés 16 éves korig',
              subtitle: 'Teen treatment',
              icon: '👶',
              duration: '120 perc',
              price: '17.500 Ft',
              description: '17 éven aluliak számára, aknés, gyulladt bőr esetén.',
              steps: [
                'Letisztítás: Bőrtípusnak megfelelő letisztító',
                'Peelingezés: Elhalt hámsejtek eltávolítása',
                'Szükség szerint pH visszaállítás, vagy további hámoldás',
                'Gőzölés: Bőr felpuhítása',
                'Tisztítás: Kitisztítjuk az eltömődött pórusokat. Aknék és komedók szakszerű tisztítása',
                'Pakolás: Tápláló, hidratáló, vagy gyulladáscsökkentő krémes arcpakolás bőrtípustól függően',
                'Befejező krém: Bőrtípusnak és napszaknak megfelelő hidratáló krém'
              ]
            },
            {
              id: 'nutri-peptide',
              arcana: '3',
              title: 'Nutri Peptide bőrmegújító',
              subtitle: 'Anti-aging treatment',
              icon: '💎',
              duration: '60 perc (+60p tisztítás)',
              price: '18.000 Ft',
              description: 'Személyre szabható Nutri Peptide anti-aging kezelések (1. Víz- és zsírhiányos, érett bőrre, 2. Aktív hidratáló, vitalizáló, fehérítő kezelés, 3. Aktív hidratáló, vitalizáló faggyúműködést csökkentő kezelés)',
              steps: [
                'Letisztítás: Nutri Peptide letisztító zselével',
                'Peelingezés: Elhalt hámsejtek eltávolítása enzimes peelinggel',
                'Szükség szerint pH visszaállítás, vagy további hámoldás Nutri Peptide tejsavas peelinggel',
                'Gőzölés: Bőr felpuhítása, eközben pihentető arcmasszázs',
                'Tisztítás: Igény szerint + 5000 Ft',
                'Booster bevitel: Bőrtípusnak megfelelő hatásfokozó',
                'Pakolás: Hidratáló, vitalizáló, regeneráló, gyulladáscsökkentő, faggyútermelés szabályzó krémes arcpakolás bőrtípustól függően. + Nutri Peptide fehérjékben gazdag aranymaszk (nyomatmaszk)',
                'Befejező krém: Nutri Peptide vitalizáló szérum + azonnal hidratáló krém'
              ]
            },
            {
              id: 'texture',
              arcana: '4',
              title: 'Texture teljes arc-nyak-dekoltázs',
              subtitle: 'Full face-neck treatment',
              icon: '✨',
              duration: '60 perc (+60p tisztítás)',
              price: '19.500 Ft',
              description: 'Komplex kezelés arc, nyak és dekoltázs területére.',
              steps: [
                'Letisztítás: Bőrtípusnak megfelelő letisztító',
                'Peelingezés: Elhalt hámsejtek eltávolítása koffein alapú enzimes peelinggel, majd szemkörnyéket és nyakat célzó laktobionsav-formulát tartalmazó booster peelinggel',
                'Gőzölés: Igény szerint bőr felpuhítása, eközben pihentető arcmasszázs',
                'Tisztítás: Igény szerint + 5000 Ft',
                'Hidratáló és feszesítő koncentrátum: Komponensekben gazdag hidratáló, feszesítő koncentrátum. Felgyorsítja és serkenti a bőr természetes folyamatait',
                'Age delay maszk a szemkörnyékre és nyakra: Hidratáló hatóanyagokat, vitaminokat, aminosavakat és növényi kivonatokat tartalmazó aktív maszk. Majd probiotikumos hidratáló, bőrmegújító maszk',
                'Tápláló szemránckrém: Segít eltüntetni a finom redőket és a sötét karikákat',
                'Befejező krém: Probiotikumos, feszesítő, regeneráló krém'
              ]
            },
            {
              id: 'carboxy',
              arcana: '5',
              title: 'Carboxy terápia',
              subtitle: 'CO2 therapy',
              icon: '🫧',
              duration: '70 perc (+60p tisztítás)',
              price: '22.500 Ft',
              description: 'Széndioxidos bőrmegújító kezelés.',
              steps: [
                'Letisztítás: Bőrtípusnak megfelelő letisztító',
                'Peelingezés: Elhalt hámsejtek eltávolítása',
                'Szükség szerint pH visszaállítás, vagy további hámoldás',
                'Gőzölés: Igény szerint bőr felpuhítása, eközben pihentető arcmasszázs',
                'Tisztítás: Igény szerint + 5000 Ft',
                'Carboxy gél: Na-karbonátot tartalmazó gél, mely majd citromsavval reakcióba lépve széndioxidot szabadít fel a bőr felszínén. A széndioxid ezután diffundál az epidermisz és dermisz rétegeibe',
                'Carboxy aktivátor: Aszkorbinsavat, citromsavat és egy Thymulen nevezetű bőr regenerálódást elősegítő peptidet tartalmaz',
                'Pakolás: Hidratáló, vitalizáló, regeneráló krém maszk + fehérjékben gazdag aranymaszk (nyomatmaszk)',
                'Befejező krém: Vitalizáló szérum + azonnal hidratáló krém'
              ]
            },
            {
              id: 'new-age-g4',
              arcana: '6',
              title: 'NEW AGE G4 ragyogást fokozó',
              subtitle: 'Radiance boosting',
              icon: '🌟',
              duration: '60 perc',
              price: '23.500 Ft',
              description: 'Prémium ragyogást fokozó bőrmegújító kezelés.',
              steps: [
                'Letisztítás Ester C lágy, tisztító szappannal',
                'NEW AGE G4 Dermabráziós peeling – peelingezés gyümölcssavakkal és bambusz őrleménnyel',
                'NEW AGE G4 Ragyogást fokozó masszázs – Arc-, nyak-, dekoltázs masszázs. Intenzíven hidratáló, regeneráló masszázskrém az epidermális gát gyors helyreállításához',
                'NEW AGE G4 Dream maszk – Peptid komplexet tartalmazó, öregedésgátló, ráncsimító mélyhidratáló maszk',
                'NEW AGE G4 fiatalító alga peel off maszk - innovatív alginát maszk barna és zöld algákkal, amelyek antioxidáns védelmet és méregtelenítőhatást biztosítanak',
                'NEW AGE G4 Ragyogást fokozó szérum – azonnali lifting hatást biztosító szérum, mely antioxidáns védelmet és mélyhidratálást biztosít',
                'NEW AGE G4 Hidratáló krém SPF20 – Hidratáló krém hialuronsavval, peptid komplexszel és fényvédővel az eljárás eredményeinek megszilárdítására'
              ]
            },
            {
              id: 'elektroporacio-arc',
              arcana: '7',
              title: 'Elektroporáció - Teljes Arc',
              subtitle: 'Needle-free mesotherapy',
              icon: '⚡',
              duration: '60 perc',
              price: '23.500 Ft',
              description: 'Tű nélküli mezoterápia arcra.',
              steps: [
                'Letisztítás: Bőrtípusnak megfelelő letisztító',
                'Peelingezés: Elhalt hámsejtek eltávolítása',
                'Szükség szerint pH visszaállítás, vagy további hámoldás',
                'Elektroporációs eljárás: Orvosi tisztaságú, 10% DMAE tartalmú, B-vitamin komplexben gazdag, magas hialuronsav tartalmú ampulla, melyet a megereszkedett, volumen vesztett, mély ráncokkal rendelkező bőr kezelésére fejlesztettek ki',
                'Pakolás: Tápláló, hidratáló regeneráló krémes arcpakolás',
                'Befejező krém: Bőrtípusnak és napszaknak megfelelő hidratáló krém'
              ]
            },
            {
              id: 'elektroporacio-nyak',
              arcana: '8',
              title: 'Elektroporáció - Arc-nyak-dekoltázs',
              subtitle: 'Full area mesotherapy',
              icon: '⚡',
              duration: '60 perc',
              price: '25.500 Ft',
              description: 'Tű nélküli mezoterápia arc, nyak és dekoltázs területére.',
              steps: [
                'Letisztítás: Bőrtípusnak megfelelő letisztító',
                'Peelingezés: Elhalt hámsejtek eltávolítása',
                'Szükség szerint pH visszaállítás, vagy további hámoldás',
                'Elektroporációs eljárás: Orvosi tisztaságú, 10% DMAE tartalmú, B-vitamin komplexben gazdag, magas hialuronsav tartalmú ampulla arc-nyak-dekoltázs területére',
                'Pakolás: Tápláló, hidratáló regeneráló krémes arcpakolás',
                'Befejező krém: Bőrtípusnak és napszaknak megfelelő hidratáló krém'
              ]
            },
            {
              id: 'arcmasszazs',
              arcana: '9',
              title: 'Arcmasszázs',
              subtitle: 'Facial massage',
              icon: '💆',
              duration: '40 perc',
              price: '8.500 Ft',
              description: 'Pihentető, ragyogást fokozó arcmasszázs.',
              steps: [
                'Letisztítás: Bőrtípusnak megfelelő letisztító',
                'Peelingezés: Elhalt hámsejtek eltávolítása',
                'Szükség szerint pH visszaállítás, vagy további hámoldás',
                'Arcmasszázs: pihentető, ragyogását fokozó arcmasszázs',
                'Befejező krém: Bőrtípusnak és napszaknak megfelelő hidratáló krém'
              ]
            }
          ]
        },

        // ─────────────────────────────────────────────────────────
        // II. KIEGÉSZÍTŐ SZOLGÁLTATÁSOK (Direct - 3 kártya)
        // ─────────────────────────────────────────────────────────
        {
          id: 'kiegeszito-szolgaltatasok',
          name: 'Kiegészítő Szolgáltatások',
          englishName: 'Additional Services',
          icon: '➕',
          arcana: 'II',
          type: 'sub-deck',
          directCards: true,
          cardCount: 3,

          cards: [
            {
              id: 'ultrahang',
              arcana: '1',
              title: 'Ultrahang',
              subtitle: 'Ultrasonic treatment',
              icon: '🔊',
              price: '3.000 Ft',
              duration: '+15 perc',
              description: 'Ultrahangos kezelés mélytisztításra és anyagbevitelre.'
            },
            {
              id: 'arany-maszk',
              arcana: '2',
              title: 'Arany maszk',
              subtitle: 'Gold mask',
              icon: '✨',
              price: '3.000 Ft',
              duration: '+20 perc',
              description: 'Luxus aranymaszk bőrmegújító hatással.'
            },
            {
              id: 'krem-pakolas',
              arcana: '3',
              title: 'Krém pakolás',
              subtitle: 'Cream mask',
              icon: '🧴',
              price: '2.500 Ft',
              duration: '+15 perc',
              description: 'Extra tápláló krémes arcpakolás.'
            }
          ]
        }
      ]
    }
  ]
};

// Segédfüggvény: Kártya keresése ID alapján
export const findCardById = (cardId) => {
  for (const mainDeck of servicesData.mainDecks) {
    for (const subDeck of mainDeck.subDecks) {
      if (subDeck.directCards && subDeck.cards) {
        const card = subDeck.cards.find(c => c.id === cardId);
        if (card) return card;
      }

      if (subDeck.subSubDecks) {
        for (const subSubDeck of subDeck.subSubDecks) {
          if (subSubDeck.directCards && subSubDeck.cards) {
            const card = subSubDeck.cards.find(c => c.id === cardId);
            if (card) return card;
          }

          if (subSubDeck.subSubSubDecks) {
            for (const subSubSubDeck of subSubDeck.subSubSubDecks) {
              if (subSubSubDeck.cards) {
                const card = subSubSubDeck.cards.find(c => c.id === cardId);
                if (card) return card;
              }
            }
          }
        }
      }
    }
  }
  return null;
};

// Segédfüggvény: Pakli keresése ID alapján
export const findDeckById = (deckId) => {
  for (const mainDeck of servicesData.mainDecks) {
    if (mainDeck.id === deckId) return mainDeck;

    for (const subDeck of mainDeck.subDecks) {
      if (subDeck.id === deckId) return subDeck;

      if (subDeck.subSubDecks) {
        for (const subSubDeck of subDeck.subSubDecks) {
          if (subSubDeck.id === deckId) return subSubDeck;

          if (subSubDeck.subSubSubDecks) {
            for (const subSubSubDeck of subSubDeck.subSubSubDecks) {
              if (subSubSubDeck.id === deckId) return subSubSubDeck;
            }
          }
        }
      }
    }
  }
  return null;
};
