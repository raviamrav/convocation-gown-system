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

// import black-bitter_lemon from "./black-bitter_lemon.png";
// import black-bitter_lemon_thumb from "./black-bitter_lemon_thumb.png";
// import black-blue from "./black-blue.png";
// import black-blue_thumb from "./black-blue_thumb.png";
// import black-cobalt_blue from "./black-cobalt_blue.png";
// import black-cobalt_blue_thumb from "./black-cobalt_blue_thumb.png";
// import black-green from "./black-green.png";
// import black-green_thumb from "./black-green_thumb.png";
// import black-kelly_green from "./black-kelly_green.png";
// import black-kelly_green_thumb from "./black-kelly_green_thumb.png";
// import black-navy_blue from "./black-navy_blue.png";
// import black-navy_blue_thumb from "./black-navy_blue_thumb.png";
// import black-orange from "./black-orange.png";
// import black-orange_thumb from "./black-orange_thumb.png";
// import black-purple from "./black-purple.png";
// import black-purple_thumb from "./black-purple_thumb.png";
// import black-red from "./black-red.png";
// import black-red_thumb from "./black-red_thumb.png";
// import black-silver from "./black-silver.png";
// import black-silver_thumb from "./black-silver_thumb.png";
// import black-yellow from "./black-yellow.png";
// import black-yellow_thumb from "./black-yellow_thumb.png";



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