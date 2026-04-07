// frontend/src/assets/images/gownImages.ts
//
// Add an entry here whenever a new gown is added to the DB.
// Key  → the EXACT gown name stored in the database (case-sensitive)
// Value → the imported image asset (Vite resolves & optimises these at build time)
//
// Images live in: frontend/src/assets/images/
//   e.g.  frontend/src/assets/images/mech.png
//         frontend/src/assets/images/comp.png

import mechImage from "./men-blue.png";
import compImage from "./men-yellow.png";

const gownImages: Record<string, string> = {
    "Mechanical Engineering Gown Black 1": mechImage,
    "Computer Science Engineering 1": compImage,
};

/**
 * Returns the image src for a given gown name.
 * Falls back to a placeholder if no image is mapped yet.
 */
export function getGownImage(gownName: string): string {
    return gownImages[gownName] ?? "./placeholder-gown.png";
}

export default gownImages;