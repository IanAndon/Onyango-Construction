/**
 * Image URLs using Picsum placeholders (reliable, no 404s).
 * Replace with your own /images/... paths when you have assets in public/images.
 */

// const picsum = (seed: string, w: number, h?: number) =>
//   `https://picsum.photos/seed/${seed}/${w}/${h ?? Math.round((w * 3) / 4)}`;

// export const images = {
//   /** Hero top-right (construction/infrastructure), use heroSlides for slideshow */
//   hero: picsum("construction-hero", 900, 600),
//   /** Appointment page left panel */
//   appointment: picsum("consultation", 800, 560),
//   /** Project placeholders */
//   projects: {
//     commercial: picsum("commercial", 600, 450),
//     road: picsum("road", 600, 450),
//     residential: picsum("residential", 600, 450),
//     industrial: picsum("industrial", 600, 450),
//     road2: picsum("highway", 600, 450),
//     renovation: picsum("renovation", 600, 450),
//   },
// } as const;


// Local image loader
const localPic = (name: string) => `/images/construction/${name}.jpg`;

export const images = {
  /** Hero top-right (construction/infrastructure), use heroSlides for slideshow */
  hero: localPic("construction"),
  /** Appointment page left panel */
  appointment: localPic("consultation"),
  /** Project placeholders */
  projects: {
    commercial: localPic("commercial"),
    road: localPic("consultation"),
    residential: localPic("residential"),
    industrial: localPic("industrial"),
    road2: localPic("highway"),
    renovation: localPic("renovation"),
  },
} as const;


/** Hero slideshow with real Onyango project images in public/images */
export const heroSlides = [
  { src: "/images/hero-1.png", alt: "Residential building extension under construction with scaffolding" },
  { src: "/images/hero-2.png", alt: "Top-down view of workers on a reinforced concrete slab" },
  { src: "/images/hero-3.png", alt: "Aerial view of heavy equipment working on an earthworks site" },
  { src: "/images/hero-4.png", alt: "Site worker cutting reinforcement steel on a construction site" },
  { src: "/images/hero-5.png", alt: "Aerial view of large-scale urban construction site with towers" },
  { src: "/images/hero-6.png", alt: "Workers and reinforcement bars on a building construction deck" },
] as const;

/** Service page uses one image per service for advanced layout (all local images) */
export const serviceImages: Record<string, { src: string; alt: string }> = {
  "building-construction": heroSlides[0],
  "civil-works": heroSlides[1],
  "road-infrastructure": heroSlides[2],
  "renovation-maintenance": heroSlides[3],
};

