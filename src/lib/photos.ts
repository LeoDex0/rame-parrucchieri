/**
 * Curated, verified Unsplash photography used across the site.
 * Every ID below was checked (visually, at fetch time) to confirm it is
 * hair-salon-appropriate and free of third-party product branding.
 */
const BASE = "https://images.unsplash.com/";

function url(id: string, w: number, q = 80) {
  return `${BASE}${id}?q=${q}&w=${w}&auto=format&fit=crop`;
}

export const photoId = {
  flyingHair: "photo-1470259078422-826894b933aa",
  handsInHair: "photo-1522337360788-8b13dee7a37e",
  afroPortrait: "photo-1519699047748-de8e457a634e",
  rainbowHair: "photo-1554519515-242161756769",
  barberColor: "photo-1567894340315-735d7c361db0",
  curlingIron: "photo-1560869713-7d0a29430803",
  stylistBlowDry: "photo-1562322140-8baeececf3df",
  roundBrush: "photo-1580618672591-eb180b1a973f",
  salonInterior: "photo-1560066984-138dadb4c035",
  hairWash: "photo-1595476108010-b4d1f102b1b1",
  moodySalon: "photo-1585747860715-2ba37e788b70",
  brunettePortrait: "photo-1580489944761-15a19d654956",
} as const;

export type PhotoKey = keyof typeof photoId;

export function photo(key: PhotoKey, w: number, q = 80) {
  return url(photoId[key], w, q);
}
