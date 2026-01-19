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
      icon: 'faPaintBrush',
      arcana: 'PAKLI',
      type: 'main-deck',
      deckCount: 5,
      totalCards: '114',

      subDecks: [
        // ─────────────────────────────────────────────────────────
        // I. FESTÉS TECHNIKÁK (Direct cards - 8 kártya)
        // ─────────────────────────────────────────────────────────
        {
          id: 'festes-technikak',
          name: 'Festés Technikák',
          englishName: 'Coloring Techniques',
          icon: 'faPaintBrush',
          arcana: 'I',
          type: 'sub-deck',
          directCards: true,
          cardCount: 8,

          cards: [
            {
              id: 'allover',
              arcana: 'I',
              title: 'Egyszínű festés',
              title_en: 'All Over Color',
              subtitle: 'All Over Color',
              subtitle_en: 'Single Color Application',
              icon: 'faPaintBrush',
              image: null,
              duration: '2 óra',
              description: 'Egyenletes, egyszínű hajfestés a teljes hajra.',
              description_en: 'Even, single-color hair coloring for the entire hair.',
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
              title_en: 'Balayage',
              subtitle: 'Kézzel festett melírozás',
              subtitle_en: 'Hand-Painted Highlights',
              icon: 'faPaintBrush',
              image: null,
              duration: '4 óra',
              description: 'Kézzel festett, természetes átmenetű melírozás.',
              description_en: 'Hand-painted highlights with natural-looking transitions.',
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
              title_en: 'Bleaching & Toning',
              subtitle: 'Bleaching & Toning',
              subtitle_en: 'Professional Lightening',
              icon: 'faPaintBrush',
              image: null,
              duration: '3 óra',
              description: 'Professzionális szőkítés és színárnyalás.',
              description_en: 'Professional bleaching and color toning service.',
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
              title_en: 'Color Correction',
              subtitle: 'Color Correction',
              subtitle_en: 'Fix & Correct',
              icon: 'faPaintBrush',
              image: null,
              duration: '5 óra',
              description: 'Sikertelen festés javítása és színkorrekció.',
              description_en: 'Fixing unsuccessful coloring and comprehensive color correction.',
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
              id: 'vivid',
              arcana: 'VI',
              title: 'Dupla folyamat',
              title_en: 'Double Process',
              subtitle: 'Vivid Color Process',
              subtitle_en: 'Bleach + Vivid Color',
              icon: 'faRainbow',
              image: null,
              duration: '5 óra 30 perc',
              description: 'Szőkítés + élénk színek (pink, kék, lila, stb.).',
              description_en: 'Bleaching + vivid colors (pink, blue, purple, etc.).',
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
              title_en: 'Full Foil Highlights',
              subtitle: 'Full Foil Highlights',
              subtitle_en: 'Complete Foil Highlights',
              icon: 'faClipboard',
              image: null,
              duration: '4 óra',
              description: 'Teljes fej melírozása fóliás technikával.',
              description_en: 'Full head highlighting using foil technique.',
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
              title_en: 'Partial Highlights',
              subtitle: 'Partial Foil',
              subtitle_en: 'Partial Foil Highlights',
              icon: 'faClipboard',
              image: null,
              duration: '3 óra 30 perc',
              description: 'Fej felső részének melírozása.',
              description_en: 'Highlighting the upper part of the head.',
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
              title_en: 'Root Touch Up',
              subtitle: 'Root Touch Up',
              subtitle_en: 'Root Color Refresh',
              icon: 'faPaintBrush',
              image: null,
              duration: '1,5 óra',
              description: 'Kinőtt hajszín frissítése tőből.',
              description_en: 'Refreshing grown-out hair color from the roots.',
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
          icon: 'faCut',
          arcana: 'II',
          type: 'sub-deck',
          directCards: false,
          deckCount: 5,
          totalCards: 96,

          subSubDecks: [
            // ┌─────────────────────────────────────────────────┐
            // │ II.A - ALAP TECHNIKÁK (Direct cards - 4)        │
            // └─────────────────────────────────────────────────┘
            {
              id: 'alap-technikak',
              name: 'Alap Technikák',
              englishName: 'Basic Techniques',
              icon: 'faRuler',
              arcana: 'I',
              type: 'sub-sub-deck',
              directCards: true,
              cardCount: 4,
              description: 'Alapvető vágási technikák, minden fazon ebből épül fel',

              cards: [
                {
                  id: 'kompakt',
                  arcana: '1',
                  title: 'Kompakt',
                  title_en: 'Solid Form',
                  subtitle: 'Egy hosszú',
                  subtitle_en: 'One Length',
                  icon: 'faCut',
                  duration: '30–45 perc',
                  description: 'Zárt, tömör hajforma. A haj egy hosszra van vágva, súlyos, telt hatású frizura. Klasszikus bobok, egyenes vonalak alapja.',
                  description_en: 'Closed, solid hair form. Hair cut to one length, creating a heavy, full effect. Foundation for classic bobs and straight lines.',
                  steps: [
                    'Natúr esésben fésült haj',
                    'Fix vezetőhossz meghatározása',
                    'Vágás nulla vagy minimális elevációval (0–10°)',
                    'Vízszintes szekcionálás',
                    'Kontúr precíz kialakítása',
                    'Szárítás után ellenőrzés, finomítás'
                  ]
                },
                {
                  id: 'lepcsozes',
                  arcana: '2',
                  title: 'Lépcsőzetes',
                  title_en: 'Layered',
                  subtitle: 'Layered',
                  subtitle_en: 'Graduated Layers',
                  icon: 'faCut',
                  duration: '45–60 perc',
                  description: 'Mozgásdús, levegős forma. A haj különböző hosszúságú rétegekből áll, könnyebb esést és volument ad.',
                  description_en: 'Dynamic, airy form. Hair consists of layers of varying lengths, creating lighter fall and volume.',
                  steps: [
                    'Haj szekcionálása (ált. fejformához igazítva)',
                    'Vezető tincs kijelölése',
                    'Emeléssel történő vágás (45–90°)',
                    'Rétegek fokozatos kialakítása',
                    'Texturálás (ritkítás, sliccelés igény szerint)',
                    'Szárítás + formára igazítás'
                  ]
                },
                {
                  id: 'lefele-hosszabbodo',
                  arcana: '3',
                  title: 'Lefelé hosszabbodó',
                  title_en: 'Graduated',
                  subtitle: 'Graduated',
                  subtitle_en: 'Forward Graduation',
                  icon: 'faCut',
                  duration: '40–55 perc',
                  description: 'Elöl hosszabb, hátul rövidebb hajforma. Dinamikus, karakteres, jól keretezi az arcot (pl. A-vonal, long bob).',
                  description_en: 'Longer in front, shorter in back. Dynamic, distinctive shape that beautifully frames the face (e.g., A-line, long bob).',
                  steps: [
                    'Hátsó rész rövidebb alapjának kialakítása',
                    'Előre haladva fokozatos hosszabbítás',
                    'Diagonál vagy vertikál vágási irány',
                    'Folyamatos ellenőrzés szimmetriára',
                    'Kontúrozás, átmenetek puhítása'
                  ]
                },
                {
                  id: 'uniform',
                  arcana: '4',
                  title: 'Uniform',
                  title_en: 'Uniform Layer',
                  subtitle: 'Mindenhol egyforma hosszú',
                  subtitle_en: 'Equal Length Throughout',
                  icon: 'faCut',
                  duration: '35–50 perc',
                  description: 'Kiegyensúlyozott, gömbszerű forma. A haj minden ponton azonos hosszú, természetes volumen keletkezik.',
                  description_en: 'Balanced, spherical form. Hair is the same length at every point, creating natural volume.',
                  steps: [
                    'Fej közepéből kiinduló vezető tincs',
                    '90°-os eleváció minden irányba',
                    'Körkörös szekcionálás',
                    'Azonos hossz tartása végig',
                    'Finom texturálás a túlzott tömeg csökkentésére'
                  ]
                }
              ]
            },

            // ┌─────────────────────────────────────────────────┐
            // │ II.B - NŐI HAJVÁGÁSOK (3 direct pakli - 44)    │
            // └─────────────────────────────────────────────────┘
            {
              id: 'noi-hajvagasok',
              name: 'Női Hajvágások',
              englishName: 'Women\'s Haircuts',
              icon: 'faUser',
              arcana: 'II',
              type: 'sub-sub-deck',
              directCards: false,
              deckCount: 3,
              totalCards: 44,

              subSubSubDecks: [
                // 1. Divat frizurák (17 kártya: 10 divat + 7 klasszikus)
                {
                  id: 'divat-frizurak',
                  name: 'Divat Frizurák',
                  englishName: 'Trendy Hairstyles',
                  icon: 'faWandMagicSparkles',
                  arcana: 'A',
                  type: 'sub-sub-sub-deck',
                  directCards: true,
                  cardCount: 17,
                  cards: [
                    {
                      id: 'butterfly-cut',
                      arcana: '1',
                      title: 'Butterfly haircut',
                      title_en: 'Butterfly Haircut',
                      subtitle: 'Pillangó vágás',
                      subtitle_en: 'Butterfly Cut',
                      icon: 'faWandMagicSparkles',
                      duration: '~60 perc',
                      description: 'Hosszú marad a haj, de elöl rövid rétegek. Dupla érzet: rövid + hosszú egyszerre. 90°–180° eleváció, erős face framing.',
                      description_en: 'Hair stays long but with short layers in front. Dual feel: short + long simultaneously. 90°–180° elevation, strong face framing.'
                    },
                    {
                      id: 'wolf-cut',
                      arcana: '2',
                      title: 'Wolf cut',
                      title_en: 'Wolf Cut',
                      subtitle: 'Farkas vágás',
                      subtitle_en: 'Wolf Cut',
                      icon: 'faPaw',
                      duration: '~70 perc',
                      description: 'Vadabb, rockosabb verzió. Erősen lépcsőzött, rövid korona. Texturált, szaggatott végek. Butterfly „rosszcsont testvére".',
                      description_en: 'Wilder, rockier version. Heavily layered, short crown. Textured, choppy ends. Butterfly\'s "edgy sibling".'
                    },
                    {
                      id: 'modern-shag',
                      arcana: '3',
                      title: 'Shag haircut',
                      title_en: 'Shag Haircut',
                      subtitle: 'Modern shag',
                      subtitle_en: 'Modern Shag',
                      icon: 'faWater',
                      duration: '~65 perc',
                      description: 'Lágyabb, hordhatóbb wolf. Sok réteg, de kevesebb kontraszt. Frufruval nagyon üt. Butterfly + vintage vibe.',
                      description_en: 'Softer, more wearable wolf. Lots of layers but less contrast. Looks amazing with bangs. Butterfly + vintage vibe.'
                    },
                    {
                      id: 'octopus-cut',
                      arcana: '4',
                      title: 'Octopus cut',
                      title_en: 'Octopus Cut',
                      subtitle: 'Polip vágás',
                      subtitle_en: 'Octopus Cut',
                      icon: 'faStar',
                      duration: '~70 perc',
                      description: 'Erős súly a koronán. Hosszú, vékony „csápok" lent. Fashion forward, editorial. Extrémebb butterfly-rokon.',
                      description_en: 'Heavy weight at the crown. Long, thin "tentacles" at bottom. Fashion forward, editorial. More extreme butterfly relative.'
                    },
                    {
                      id: 'long-layered',
                      arcana: '5',
                      title: 'Long layered cut',
                      title_en: 'Long Layered Cut',
                      subtitle: 'Hosszú rétegezett',
                      subtitle_en: 'Long Layers',
                      icon: 'faWater',
                      duration: '~60 perc',
                      description: 'Klasszikus, biztonságos. Finom lépcsők, természetes mozgás. Kevesebb dráma, több elegancia. Butterfly light verzió.',
                      description_en: 'Classic, safe choice. Subtle layers, natural movement. Less drama, more elegance. Butterfly light version.'
                    },
                    {
                      id: 'face-framing',
                      arcana: '6',
                      title: 'Face-framing layered cut',
                      title_en: 'Face-Framing Layers',
                      subtitle: 'Arc keretező rétegek',
                      subtitle_en: 'Face-Framing Cut',
                      icon: 'faWandMagicSparkles',
                      duration: '~55 perc',
                      description: 'Arc körüli hangsúly. Elöl rövidebb, hátul hosszabb. Frufru opcionális. Butterfly fókusz az arcon.',
                      description_en: 'Focus around the face. Shorter in front, longer in back. Bangs optional. Butterfly focus on the face.'
                    },
                    {
                      id: 'curtain-bangs-layers',
                      arcana: '7',
                      title: 'Curtain bangs + layers',
                      title_en: 'Curtain Bangs + Layers',
                      subtitle: 'Függöny frufru rétegekkel',
                      subtitle_en: 'Curtain Bangs with Layers',
                      icon: 'faUser',
                      duration: '~60 perc',
                      description: 'Középen nyíló frufru. Rétegezett hossz. Nőies, időtálló. Butterfly „frufrus kiadása".',
                      description_en: 'Center-parted bangs. Layered length. Feminine, timeless. Butterfly "bangs edition".'
                    },
                    {
                      id: 'hush-cut',
                      arcana: '8',
                      title: 'Hush cut',
                      title_en: 'Hush Cut',
                      subtitle: 'Koreai trend',
                      subtitle_en: 'Korean Trend',
                      icon: 'faGlobe',
                      duration: '~55 perc',
                      description: 'Lágy, leomló rétegek. Természetes, nem túlvágott. Könnyű formázás. Minimalista butterfly.',
                      description_en: 'Soft, cascading layers. Natural, not over-cut. Easy styling. Minimalist butterfly.'
                    },
                    {
                      id: 'soft-mullet-noi',
                      arcana: '9',
                      title: 'Soft mullet',
                      title_en: 'Soft Mullet',
                      subtitle: 'Női mullet',
                      subtitle_en: 'Women\'s Mullet',
                      icon: 'faStar',
                      duration: '~65 perc',
                      description: 'Rövidebb felső rész. Hosszabb tarkó. Modern, nem retro. Butterfly + mullet finomítva.',
                      description_en: 'Shorter top section. Longer nape. Modern, not retro. Butterfly + mullet refined.'
                    },
                    {
                      id: 'v-cut-layers',
                      arcana: '10',
                      title: 'V-cut layers',
                      title_en: 'V-Cut Layers',
                      subtitle: 'V-alakú rétegek',
                      subtitle_en: 'V-Shaped Layers',
                      icon: 'faCut',
                      duration: '~60 perc',
                      description: 'Hátul V-alakban hosszabb. Elöl réteges. Karcsúsítja a hátképet. Butterfly geometrikus változat.',
                      description_en: 'Longer in a V-shape at back. Layered in front. Slims the back view. Butterfly geometric variant.'
                    },
                    // Klasszikus női (7 kártya)
                    {
                      id: 'egyenes-hosszu',
                      arcana: '11',
                      title: 'Egyenes hosszú haj',
                      title_en: 'Long Straight Hair',
                      subtitle: 'Long straight hair',
                      subtitle_en: 'Classic Long',
                      icon: 'faCut',
                      duration: '~45 perc',
                      description: 'Klasszikus egyenes hosszú haj vágás.',
                      description_en: 'Classic straight long hair cut.'
                    },
                    {
                      id: 'felhosszu',
                      arcana: '12',
                      title: 'Félhosszú haj',
                      title_en: 'Medium Length Hair',
                      subtitle: 'Medium length',
                      subtitle_en: 'Shoulder Length',
                      icon: 'faCut',
                      duration: '~40 perc',
                      description: 'Vállhosszú vagy kicsit rövidebb női haj.',
                      description_en: 'Shoulder-length or slightly shorter women\'s hair.'
                    },
                    {
                      id: 'rovid-noi',
                      arcana: '13',
                      title: 'Rövid női haj',
                      title_en: 'Short Women\'s Hair',
                      subtitle: 'Short women\'s hair',
                      subtitle_en: 'Classic Short',
                      icon: 'faCut',
                      duration: '~35 perc',
                      description: 'Klasszikus rövid női hajvágás.',
                      description_en: 'Classic short women\'s haircut.'
                    },
                    {
                      id: 'a-vonalu',
                      arcana: '14',
                      title: 'A-vonalú vágás',
                      title_en: 'A-Line Cut',
                      subtitle: 'A-line cut',
                      subtitle_en: 'A-Line Shape',
                      icon: 'faCut',
                      duration: '~45 perc',
                      description: 'Hátul rövidebb, elöl hosszabb A-alakú forma.',
                      description_en: 'Shorter at back, longer at front in A-shape.'
                    },
                    {
                      id: 'v-vonalu',
                      arcana: '15',
                      title: 'V-vonalú vágás',
                      title_en: 'V-Line Cut',
                      subtitle: 'V-line cut',
                      subtitle_en: 'V-Shaped Back',
                      icon: 'faCut',
                      duration: '~45 perc',
                      description: 'V-alakban vágott haj hátul.',
                      description_en: 'V-shaped cut at the back.'
                    },
                    {
                      id: 'u-vonalu',
                      arcana: '16',
                      title: 'U-vonalú vágás',
                      title_en: 'U-Line Cut',
                      subtitle: 'U-line cut',
                      subtitle_en: 'Rounded U-Shape',
                      icon: 'faCut',
                      duration: '~45 perc',
                      description: 'U-alakban kerekített hajvágás.',
                      description_en: 'Rounded haircut in U-shape.'
                    },
                    {
                      id: 'egyenes-frufru',
                      arcana: '17',
                      title: 'Klasszikus frufruval',
                      title_en: 'Classic with Bangs',
                      subtitle: 'With classic bangs',
                      subtitle_en: 'Straight with Bangs',
                      icon: 'faCut',
                      duration: '~50 perc',
                      description: 'Klasszikus egyenes vágás frufruval.',
                      description_en: 'Classic straight cut with bangs.'
                    }
                  ]
                },

                // 2. Rövid frizurák (18 kártya: 9 rövid + 9 bubi)
                {
                  id: 'rovid-frizurak',
                  name: 'Rövid Frizurák',
                  englishName: 'Short Hairstyles',
                  icon: 'faBolt',
                  arcana: 'B',
                  type: 'sub-sub-sub-deck',
                  directCards: true,
                  cardCount: 18,
                  cards: [
                    // Rövid női vágások (9 kártya)
                    { id: 'pixie', arcana: '1', title: 'Pixie', subtitle: 'Pixie cut', icon: 'faBolt', duration: '~40 perc', description: 'Klasszikus rövid tündér vágás.' },
                    { id: 'pixie-bob', arcana: '2', title: 'Pixie bob', subtitle: 'Hosszabb pixie', icon: 'faBolt', duration: '~45 perc', description: 'Pixie és bob keveréke.' },
                    { id: 'short-shag', arcana: '3', title: 'Short shag', subtitle: 'Rövid shag', icon: 'faBolt', duration: '~50 perc', description: 'Texturált rövid haj, retro feeling.' },
                    { id: 'garcon', arcana: '4', title: 'Garçon', subtitle: 'Fiús vágás', icon: 'faBolt', duration: '~35 perc', description: 'Nagyon rövid, androgén stílus.' },
                    { id: 'boyish-cut', arcana: '5', title: 'Boyish cut', subtitle: 'Tomboy vágás', icon: 'faBolt', duration: '~35 perc', description: 'Fiús hatású női vágás.' },
                    { id: 'undercut-noi', arcana: '6', title: 'Undercut női', subtitle: 'Women\'s undercut', icon: 'faBolt', duration: '~50 perc', description: 'Oldalra/ alul borotvált design.' },
                    { id: 'aszimmetrikus-rovid', arcana: '7', title: 'Aszimmetrikus rövid', subtitle: 'Asymmetric short', icon: 'faBolt', duration: '~50 perc', description: 'Aszimmetrikus rövid forma.' },
                    { id: 'alternativ-rovid', arcana: '8', title: 'Alternatív rövid', subtitle: 'Alternative short', icon: 'faBolt', duration: '~55 perc', description: 'Kreatív, egyedi rövid frizura.' },
                    { id: 'buzz-cut-noi', arcana: '9', title: 'Buzz cut női', subtitle: 'Women\'s buzz', icon: 'faBolt', duration: '~25 perc', description: 'Géppel vágott nagyon rövid.' },
                    // Bubi variánsok (9 kártya)
                    { id: 'bubi-bob', arcana: '10', title: 'Bubi', subtitle: 'Classic Bob', icon: 'faHeart', duration: '~45 perc', description: 'Klasszikus bubi vágás állhosszban.' },
                    { id: 'hosszu-bubi-lob', arcana: '11', title: 'Hosszú bubi', subtitle: 'Long Bob (Lob)', icon: 'faHeart', duration: '~50 perc', description: 'Vállhosszú bubi, modern és nőies.' },
                    { id: 'gradualt-bubi', arcana: '12', title: 'Graduált bubi', subtitle: 'Graduated Bob', icon: 'faHeart', duration: '~50 perc', description: 'Hátul rövidebb, elöl hosszabb dinamikus vágás.' },
                    { id: 'egyenes-bubi', arcana: '13', title: 'Egyenes bubi', subtitle: 'Straight Bob', icon: 'faHeart', duration: '~45 perc', description: 'Tökéletesen egyenes, tompa vágás.' },
                    { id: 'aszimmetrikus-bubi', arcana: '14', title: 'Aszimmetrikus bubi', subtitle: 'Asymmetric Bob', icon: 'faHeart', duration: '~55 perc', description: 'Két oldal különböző hosszúságú.' },
                    { id: 'olasz-bubi', arcana: '15', title: 'Olasz bubi', subtitle: 'Italian Bob', icon: 'faHeart', duration: '~50 perc', description: 'Rétegezett, könnyű, mediterrán stílus.' },
                    { id: 'francia-bubi', arcana: '16', title: 'Francia bubi', subtitle: 'French Bob', icon: 'faHeart', duration: '~50 perc', description: 'Rövid, fülig érő elegáns vágás.' },
                    { id: 'pageboy', arcana: '17', title: 'Pageboy', subtitle: 'Pageboy cut', icon: 'faHeart', duration: '~45 perc', description: 'Kerek, befelé hajló klasszikus forma.' },
                    { id: 'curly-bob', arcana: '18', title: 'Curly Bob', subtitle: 'Göndör bubi', icon: 'faHeart', duration: '~60 perc', description: 'Bubi göndör hajra optimalizálva.' }
                  ]
                },

                // 3. Frufru típusok (9 kártya)
                {
                  id: 'frufru-tipusok',
                  name: 'Frufru Típusok',
                  englishName: 'Bangs Types',
                  icon: 'faUser',
                  arcana: 'C',
                  type: 'sub-sub-sub-deck',
                  directCards: true,
                  cardCount: 9,
                  cards: [
                    { id: 'egyenes-frufru', arcana: '1', title: 'Egyenes frufru', subtitle: 'Straight bangs', icon: 'faUser', duration: '~20 perc', description: 'Klasszikus egyenes frufru.' },
                    { id: 'tomor-frufru', arcana: '2', title: 'Tömör frufru', subtitle: 'Blunt bangs', icon: 'faUser', duration: '~20 perc', description: 'Sűrű, tompa vágású frufru.' },
                    { id: 'ritkitott-frufru', arcana: '3', title: 'Ritkított frufru', subtitle: 'Wispy bangs', icon: 'faUser', duration: '~20 perc', description: 'Könnyű, légies frufru.' },
                    { id: 'curtain-bangs', arcana: '4', title: 'Curtain bangs', subtitle: 'Függöny frufru', icon: 'faUser', duration: '~25 perc', description: 'Középen szétváló, oldalt hosszabb.' },
                    { id: 'baby-bangs', arcana: '5', title: 'Baby bangs', subtitle: 'Mikrofrufru', icon: 'faUser', duration: '~20 perc', description: 'Nagyon rövid, a homlok közepéig.' },
                    { id: 'oldalra-fesult', arcana: '6', title: 'Oldalra fésült frufru', subtitle: 'Side-swept bangs', icon: 'faUser', duration: '~25 perc', description: 'Oldalra fésülhető aszimmetrikus.' },
                    { id: 'aszimmetrikus-frufru', arcana: '7', title: 'Aszimmetrikus frufru', subtitle: 'Asymmetric bangs', icon: 'faUser', duration: '~25 perc', description: 'Egyenetlen, különböző hosszúságú.' },
                    { id: 'mikrofrufru', arcana: '8', title: 'Mikrofrufru', subtitle: 'Micro bangs', icon: 'faUser', duration: '~15 perc', description: 'Extrém rövid, statement frufru.' },
                    { id: 'korean-see-through', arcana: '9', title: 'Korean see-through', subtitle: 'Áttetsző frufru', icon: 'faUser', duration: '~20 perc', description: 'Könnyű, áttetsző koreai stílus.' }
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
              icon: 'faUser',
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
                  icon: 'faBriefcase',
                  arcana: 'A',
                  cardCount: 8,
                  cards: [
                    { id: 'klasszikus-rovid', arcana: '1', title: 'Klasszikus rövid', subtitle: 'Classic short', icon: 'faBriefcase', duration: '~30 perc' },
                    { id: 'oldalt-rovid', arcana: '2', title: 'Oldalt rövid, felül hosszabb', subtitle: 'Short sides long top', icon: 'faBriefcase', duration: '~35 perc' },
                    { id: 'business-cut', arcana: '3', title: 'Business cut', subtitle: 'Üzleti vágás', icon: 'faBriefcase', duration: '~30 perc' },
                    { id: 'gentleman-cut', arcana: '4', title: 'Gentleman cut', subtitle: 'Úriember vágás', icon: 'faBriefcase', duration: '~35 perc' },
                    { id: 'ivy-league', arcana: '5', title: 'Ivy League', subtitle: 'Harvard clip', icon: 'faBriefcase', duration: '~30 perc' },
                    { id: 'crew-cut', arcana: '6', title: 'Crew cut', subtitle: 'Csapat vágás', icon: 'faBriefcase', duration: '~25 perc' },
                    { id: 'buzz-cut', arcana: '7', title: 'Buzz cut', subtitle: 'Géppel vágott', icon: 'faBriefcase', duration: '~20 perc' },
                    { id: 'caesar-cut', arcana: '8', title: 'Caesar cut', subtitle: 'Cézár vágás', icon: 'faBriefcase', duration: '~30 perc' }
                  ]
                },

                // Fade típusok (7 kártya)
                {
                  id: 'fade-tipusok',
                  name: 'Fade Típusok',
                  englishName: 'Fade Types',
                  icon: 'faFire',
                  arcana: 'B',
                  cardCount: 7,
                  cards: [
                    { id: 'low-fade', arcana: '1', title: 'Low fade', subtitle: 'Alacsony fade', icon: 'faFire', duration: '~40 perc', description: 'Fokozatos átmenet alul kezdődik.' },
                    { id: 'mid-fade', arcana: '2', title: 'Mid fade', subtitle: 'Közepes fade', icon: 'faFire', duration: '~40 perc', description: 'Átmenet a fej közepén.' },
                    { id: 'high-fade', arcana: '3', title: 'High fade', subtitle: 'Magas fade', icon: 'faFire', duration: '~40 perc', description: 'Magasan kezdődő átmenet.' },
                    { id: 'skin-fade', arcana: '4', title: 'Skin fade', subtitle: 'Bőrre fade', icon: 'faFire', duration: '~45 perc', description: 'Bőrig borotvált alul.' },
                    { id: 'taper-fade', arcana: '5', title: 'Taper fade', subtitle: 'Taper átmenet', icon: 'faFire', duration: '~40 perc', description: 'Lágy fokozatos rövidülés.' },
                    { id: 'drop-fade', arcana: '6', title: 'Drop fade', subtitle: 'Leeső fade', icon: 'faFire', duration: '~45 perc', description: 'Hátul lejjebb eső átmenet.' },
                    { id: 'burst-fade', arcana: '7', title: 'Burst fade', subtitle: 'Burst átmenet', icon: 'faFire', duration: '~45 perc', description: 'Félkör alakú fade fül körül.' }
                  ]
                },

                // Modern férfi (10 kártya)
                {
                  id: 'modern-ferfi',
                  name: 'Modern Férfi',
                  englishName: 'Modern Men\'s',
                  icon: 'faBolt',
                  arcana: 'C',
                  cardCount: 10,
                  cards: [
                    { id: 'undercut', arcana: '1', title: 'Undercut', subtitle: 'Aláborotvált', icon: 'faBolt', duration: '~45 perc', description: 'Felül hosszú, oldalra/alul borotvált.' },
                    { id: 'slick-back', arcana: '2', title: 'Slick back', subtitle: 'Hátra fésült', icon: 'faBolt', duration: '~35 perc', description: 'Elegánsan hátra simított haj.' },
                    { id: 'pompadour', arcana: '3', title: 'Pompadour', subtitle: 'Pompadúr', icon: 'faBolt', duration: '~40 perc', description: 'Felfelé és hátra fésült térfogat.' },
                    { id: 'quiff', arcana: '4', title: 'Quiff', subtitle: 'Kviff', icon: 'faBolt', duration: '~40 perc', description: 'Elöl feltúrt, oldalra rövid.' },
                    { id: 'french-crop', arcana: '5', title: 'French crop', subtitle: 'Francia crop', icon: 'faBolt', duration: '~35 perc', description: 'Rövid frufru előre, rövid oldalak.' },
                    { id: 'textured-crop', arcana: '6', title: 'Textured crop', subtitle: 'Texturált crop', icon: 'faBolt', duration: '~40 perc', description: 'Darabos textúrájú rövidített.' },
                    { id: 'messy-cut', arcana: '7', title: 'Messy cut', subtitle: 'Kusza vágás', icon: 'faBolt', duration: '~40 perc', description: 'Rendetlenül menő stílus.' },
                    { id: 'modern-mullet', arcana: '8', title: 'Modern mullet', subtitle: 'Mai mullet', icon: 'faBolt', duration: '~50 perc', description: 'Mullet modern változata.' },
                    { id: 'wolf-cut-ferfi', arcana: '9', title: 'Wolf cut férfi', subtitle: 'Men\'s wolf cut', icon: 'faBolt', duration: '~55 perc', description: 'Férfi változat a wolf cut-ból.' },
                    { id: 'faux-hawk', arcana: '10', title: 'Faux hawk', subtitle: 'Álmohawk', icon: 'faBolt', duration: '~40 perc', description: 'Mohawk light változat.' }
                  ]
                },

                // Hosszú férfi (8 kártya)
                {
                  id: 'hosszu-ferfi',
                  name: 'Hosszú Férfi',
                  englishName: 'Long Men\'s',
                  icon: 'faWater',
                  arcana: 'D',
                  cardCount: 8,
                  cards: [
                    { id: 'felhosszu-ferfi', arcana: '1', title: 'Félhosszú férfi', subtitle: 'Medium men\'s', icon: 'faWater', duration: '~45 perc' },
                    { id: 'hosszu-ferfi-hair', arcana: '2', title: 'Hosszú férfi haj', subtitle: 'Long men\'s hair', icon: 'faWater', duration: '~55 perc' },
                    { id: 'man-bun', arcana: '3', title: 'Man bun', subtitle: 'Férfi konty', icon: 'faWater', duration: '~50 perc' },
                    { id: 'top-knot', arcana: '4', title: 'Top knot', subtitle: 'Tetőkonty', icon: 'faWater', duration: '~50 perc' },
                    { id: 'surfer-hair', arcana: '5', title: 'Surfer hair', subtitle: 'Szörfös haj', icon: 'faWater', duration: '~50 perc' },
                    { id: 'layered-long-hair', arcana: '6', title: 'Layered long hair', subtitle: 'Rétegezett hosszú', icon: 'faWater', duration: '~60 perc' },
                    { id: 'viking-hair', arcana: '7', title: 'Viking hair', subtitle: 'Viking haj', icon: 'faWater', duration: '~55 perc' },
                    { id: 'rockstar-hair', arcana: '8', title: 'Rockstar hair', subtitle: 'Rocksztár haj', icon: 'faWater', duration: '~60 perc' }
                  ]
                }
              ]
            },

            // ┌─────────────────────────────────────────────────┐
            // │ II.D - GYERMEK HAJVÁGÁSOK (Direct - 4)         │
            // └─────────────────────────────────────────────────┘
            {
              id: 'gyermek-hajvagasok',
              name: 'Gyermek Hajvágások',
              englishName: 'Kids Haircuts',
              icon: 'faChild',
              arcana: 'IV',
              type: 'sub-sub-deck',
              directCards: true,
              cardCount: 4,
              description: 'Gyermek hajvágások',

              cards: [
                { id: 'klasszikus-gyerek', arcana: '1', title: 'Klasszikus gyerek', subtitle: 'Classic kids', icon: 'faChild', duration: '~25 perc', description: 'Hagyományos gyermek hajvágás.' },
                { id: 'rovid-gyerek', arcana: '2', title: 'Rövid gyerek', subtitle: 'Short kids', icon: 'faChild', duration: '~20 perc', description: 'Praktikus rövid gyerek haj.' },
                { id: 'felhosszu-gyerek', arcana: '3', title: 'Félhosszú gyerek', subtitle: 'Medium kids', icon: 'faChild', duration: '~25 perc', description: 'Félhosszú gyermek vágás.' },
                { id: 'unisex-gyerek', arcana: '4', title: 'Unisex gyerek', subtitle: 'Gender-neutral', icon: 'faChild', duration: '~25 perc', description: 'Nemtől független gyerek fazon.' }
              ]
            },

            // ┌─────────────────────────────────────────────────┐
            // │ II.E - SPECIÁLIS HAJVÁGÁSOK (Direct - 11)      │
            // └─────────────────────────────────────────────────┘
            {
              id: 'specialis-hajvagasok',
              name: 'Speciális Hajvágások',
              englishName: 'Special Haircuts',
              icon: 'faStar',
              arcana: 'V',
              type: 'sub-sub-deck',
              directCards: true,
              cardCount: 11,
              description: 'Unisex, alternatív és speciális vágási technikák',

              cards: [
                // Unisex/Alternatív (7)
                { id: 'shag-unisex', arcana: '1', title: 'Shag unisex', subtitle: 'Universal shag', icon: 'faWandMagicSparkles', duration: '~60 perc', description: 'Shag bármely nemhez.' },
                { id: 'wolf-cut-unisex', arcana: '2', title: 'Wolf cut unisex', subtitle: 'Universal wolf', icon: 'faWandMagicSparkles', duration: '~65 perc', description: 'Nemtől független wolf cut.' },
                { id: 'mullet-unisex', arcana: '3', title: 'Mullet', subtitle: 'Classic mullet', icon: 'faWandMagicSparkles', duration: '~50 perc', description: 'Elöl-oldalt rövid, hátul hosszú.' },
                { id: 'aszimmetrikus-unisex', arcana: '4', title: 'Aszimmetrikus', subtitle: 'Asymmetric', icon: 'faWandMagicSparkles', duration: '~55 perc', description: 'Aszimmetrikus kreatív vágás.' },
                { id: 'undercut-unisex', arcana: '5', title: 'Undercut unisex', subtitle: 'Universal undercut', icon: 'faWandMagicSparkles', duration: '~50 perc', description: 'Nemtől független undercut.' },
                { id: 'genderless-cut', arcana: '6', title: 'Genderless cut', subtitle: 'Nemtelen vágás', icon: 'faWandMagicSparkles', duration: '~50 perc', description: 'Teljesen nemtől független stílus.' },
                { id: 'mohawk', arcana: '7', title: 'Mohawk', subtitle: 'Irokéz', icon: 'faWandMagicSparkles', duration: '~45 perc', description: 'Oldalt borotvált, középen állva.' },

                // Speciális technikák (4)
                { id: 'afro-vagas', arcana: '8', title: 'Afro hajvágás', subtitle: 'Afro cut', icon: 'faStar', duration: '~60 perc', description: 'Afro textúrájú haj vágása.' },
                { id: 'gondor-curl-by-curl', arcana: '9', title: 'Göndör - curl by curl', subtitle: 'Deva cut', icon: 'faStar', duration: '~75 perc', description: 'Göndör szálankénti vágása.' },
                { id: 'dry-cut', arcana: '10', title: 'Dry cut', subtitle: 'Szárazon vágás', icon: 'faStar', duration: '~50 perc', description: 'Száraz hajon vágás természetes formához.' },
                { id: 'kreativ-editorial', arcana: '11', title: 'Kreatív / editorial', subtitle: 'Artistic cut', icon: 'faStar', duration: '~90 perc', description: 'Művészi, egyedi kreatív vágás.' }
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
          icon: 'faWandMagicSparkles',
          arcana: 'III',
          type: 'sub-deck',
          directCards: true,
          cardCount: 5,

          cards: [
            {
              id: 'joico-4-lepeses',
              arcana: '1',
              title: 'JOICO 4 lépéses hajújraépítés',
              title_en: 'JOICO 4-Step Hair Reconstruction',
              subtitle: 'JOICO K-PAK Treatment',
              subtitle_en: 'Complete Hair Rebuilding',
              icon: 'faWandMagicSparkles',
              duration: '~1,5 óra',
              description: 'Nem csak sérült, roncsolt hajra! Feltölti nedvességgel a porózus kutikulát (száraz haj). Megjavítja a haj sérült keratinláncát (sérült, károsodott haj). Erőt és tartást ad a hajnak (vékony, gyenge haj). Rugalmasságot ad a kinyúlt hullámoknak (göndör haj). Minden vegyszeres beavatkozást hatékonyabbá tesz, legyen az festés vagy tartós hullámosítás. Eredmény: A legerősebb, legegészségesebb, legszebb haj, amit csak el lehet képzelni! Már az első kezelés után ámulatba ejtő különbség érezhető.',
              description_en: 'Not just for damaged hair! Fills porous cuticles with moisture (dry hair). Repairs damaged keratin chains (damaged hair). Gives strength and hold (thin, weak hair). Adds elasticity to stretched waves (curly hair). Makes all chemical treatments more effective, whether coloring or perming. Result: The strongest, healthiest, most beautiful hair imaginable! Amazing difference felt after the first treatment.',
            },
            {
              id: 'steampod',
              arcana: '2',
              title: 'Steampod kezelés',
              title_en: 'Steampod Treatment',
              subtitle: 'Gőzös hajvasalás + ápolás',
              subtitle_en: 'Steam Hair Straightening + Care',
              icon: 'faWandMagicSparkles',
              duration: '~90 perc',
              description: 'A Steampod gőzzel dolgozó hajvasalás + ápolás, ami nem csak kisimít, hanem közben kezel is. A gőz segít, hogy az ápoló anyag mélyebbre jusson a hajszálba, miközben kevesebb hőkárosodás éri a hajat. 2-4 hétig tart, nem nő le hanem kikopik az ápoló anyag.',
              description_en: 'Steampod is a steam-powered hair straightening + care treatment that not only smooths but also treats. The steam helps the nourishing ingredients penetrate deeper into the hair shaft while causing less heat damage. Lasts 2-4 weeks, doesn\'t grow out but gradually fades as the treatment washes out.',
            },
            { id: 'keratin-kezeles', arcana: '3', title: 'Keratin kezelés', subtitle: 'Keratin treatment', icon: 'faWandMagicSparkles', duration: '~120 perc', description: 'Haj kiegyenesítés és ápolás keratinnal.' },
            { id: 'melytaplalo', arcana: '4', title: 'Mélyápoló pakolás', subtitle: 'Deep conditioning', icon: 'faWandMagicSparkles', duration: '~60 perc', description: 'Intenzív hidratáló hajpakolás.' },
            { id: 'hajbotes', arcana: '5', title: 'Hajbőr kezelés', subtitle: 'Scalp treatment', icon: 'faWandMagicSparkles', duration: '~45 perc', description: 'Hajbőr ápolás és masszázs.' }
          ]
        },

        // ─────────────────────────────────────────────────────────
        // IV. RASZTA SZOLGÁLTATÁSOK (Direct cards - 5 kártya)
        // ─────────────────────────────────────────────────────────
        {
          id: 'raszta-szolgaltatasok',
          name: 'Raszta Szolgáltatások',
          englishName: 'Rasta Services',
          icon: 'faLink',
          arcana: 'IV',
          type: 'sub-deck',
          directCards: true,
          cardCount: 5,

          cards: [
            { id: 'raszta-haj-keszitese', arcana: '1', title: 'Raszta haj készítése', subtitle: 'Rasta braiding', icon: 'faLink', duration: '4-8 óra', description: 'Fonott raszta frizura készítése természetes hajból.' },
            { id: 'raszta-haj-karbantartasa', arcana: '2', title: 'Raszta haj karbantartása', subtitle: 'Rasta maintenance', icon: 'faLink', duration: '1,5-3 óra', description: 'Meglévő raszta frissítése, újrafonása, ápolása.' },
            { id: 'muraszta-haj-felfonas', arcana: '3', title: 'Műraszta haj felfonás', subtitle: 'Synthetic rasta braiding', icon: 'faLink', duration: '1,5-4 óra', description: 'Műszálas raszta haj befonása.' },
            { id: 'raszta-hajfestes-szokites', arcana: '4', title: 'Raszta hajfestés/szőkítés', subtitle: 'Rasta coloring/bleaching', icon: 'faLink', duration: '4-8 óra', description: 'Raszta haj színezése vagy szőkítése.' },
            { id: 'raszta-hajkibontas', arcana: '5', title: 'Raszta hajkibontás', subtitle: 'Rasta removal', icon: 'faLink', duration: '6-12 óra', description: 'Raszta haj szakszerű kibontása és ápolása.' }
          ]
        },

        // ─────────────────────────────────────────────────────────
        // V. KONZULTÁCIÓ (Egyedi kártya - azonnal megnyílik)
        // ─────────────────────────────────────────────────────────
        {
          id: 'konzultacio',
          name: 'Konzultáció',
          englishName: 'Consultation',
          icon: 'faComment',
          arcana: 'V',
          type: 'sub-deck',
          directCards: true,
          isSingleCard: true, // Speciális jelző: azonnal megnyitja a kártyát
          cardCount: 1,

          cards: [
            {
              id: 'consultation',
              arcana: 'I',
              title: 'Konzultáció',
              title_en: 'Consultation',
              subtitle: 'Consultation',
              subtitle_en: 'Color Consultation',
              icon: 'faComment',
              image: null,
              duration: '30 perc',
              price: 'Ingyenes',
              description: 'Személyes konzultáció hajfestési lehetőségekről.',
              description_en: 'Personal consultation about hair coloring options and possibilities.',
              steps: [
                'Hajtípus meghatározása',
                'Hajállapot felmérése',
                'Kívánt végeredmény megbeszélése',
                'Technika kiválasztása',
                'Időbeosztás tervezése',
                'Árajánlat készítése'
              ]
            }
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
      icon: 'faGem',
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
          icon: 'faSpa',
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
              icon: 'faBolt',
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
              icon: 'faChild',
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
              icon: 'faGem',
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
              icon: 'faWandMagicSparkles',
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
              icon: 'faDroplet',
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
              icon: 'faStar',
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
              icon: 'faBolt',
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
              icon: 'faBolt',
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
              icon: 'faSpa',
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
          icon: 'faPlus',
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
              icon: 'faVolumeHigh',
              price: '3.000 Ft',
              duration: '+15 perc',
              description: 'Ultrahangos kezelés mélytisztításra és anyagbevitelre.'
            },
            {
              id: 'arany-maszk',
              arcana: '2',
              title: 'Arany maszk',
              subtitle: 'Gold mask',
              icon: 'faWandMagicSparkles',
              price: '3.000 Ft',
              duration: '+20 perc',
              description: 'Luxus aranymaszk bőrmegújító hatással.'
            },
            {
              id: 'krem-pakolas',
              arcana: '3',
              title: 'Krém pakolás',
              subtitle: 'Cream mask',
              icon: 'faPumpSoap',
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
