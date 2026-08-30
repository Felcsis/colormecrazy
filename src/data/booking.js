/**
 * Online időpontfoglalás.
 *
 * Egyelőre csak a kozmetikushoz (Bogi) lehet online foglalni – a fodrász
 * időpontok telefonon és Messengeren mennek.
 *
 * Ha új foglalóoldal jön (vagy más dolgozóhoz is lesz), itt kell módosítani:
 * a gombok több helyen ebből az egy fájlból dolgoznak.
 */

export const BOOKING = {
  bogi: {
    url: 'https://szep-boglarka-kozmetikus-color-me-crazy.salonic.hu/',
    label: 'Bogi',        // kihez tartozik
    service: 'kozmetika'
  }
};

// Van-e egyáltalán beállított foglalólink? Ha nincs, a gombok nem jelennek
// meg – így soha nem kerül ki üres/hibás link az élő oldalra.
export const getBookingUrl = (member) => {
  const entry = BOOKING[member];
  return entry?.url ? entry.url : null;
};

export const hasAnyBooking = () =>
  Object.values(BOOKING).some((b) => b.url);
