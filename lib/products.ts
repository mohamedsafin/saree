import type { ArtProps } from "@/components/SareeArt";

export type Category = "sarees" | "dhotis" | "vastrams";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  price: number;
  mrp?: number;
  tag?: string;
  fabric: string;
  weave: string;
  length: string;
  blouse?: string;
  sizes?: string[];
  description: string;
  care: string;
  art: ArtProps;
};

export const categories: { id: Category; label: string; blurb: string }[] = [
  {
    id: "sarees",
    label: "Silk sarees",
    blurb: "Kanchipuram, soft silk, Arani and silk cotton",
  },
  {
    id: "dhotis",
    label: "Dhotis & veshtis",
    blurb: "Pure silk and cotton veshtis, angavastram sets",
  },
  {
    id: "vastrams",
    label: "Divine vastrams",
    blurb: "Pavadais and vastrams for Amman, Perumal and Pillaiyar, in any size",
  },
];

const silkCare =
  "Dry clean only. Store folded in a muslin cloth and refold every few months so the zari doesn't crease. Keep away from perfume and direct sunlight.";

export const products: Product[] = [
  {
    slug: "arakku-kanchipuram-peacock-border",
    name: "Arakku red Kanchipuram with peacock border",
    category: "sarees",
    price: 38500,
    mrp: 42000,
    tag: "Bridal",
    fabric: "Pure mulberry silk",
    weave: "Kanchipuram, korvai border",
    length: "6.2 m with blouse",
    blouse: "Contrast peacock blue, unstitched",
    description:
      "Deep arakku red body scattered with gold mango buttas, joined to a peacock blue border by the traditional korvai interlock. The pallu carries rows of zari stripes and a full mango band.",
    care: silkCare,
    art: { kind: "saree", body: "#8E1B2C", border: "#155A5A", motif: "mango" },
  },
  {
    slug: "mustard-kanchipuram-maroon-korvai",
    name: "Mustard Kanchipuram with maroon korvai",
    category: "sarees",
    price: 24900,
    tag: "New",
    fabric: "Pure mulberry silk",
    weave: "Kanchipuram, korvai border",
    length: "6.2 m with blouse",
    blouse: "Maroon with zari, unstitched",
    description:
      "Turmeric mustard silk with small gold buttas and a deep maroon border. A festive classic that also works for a reception.",
    care: silkCare,
    art: { kind: "saree", body: "#C98F22", border: "#6E1626", motif: "butta" },
  },
  {
    slug: "rani-pink-kanchipuram-checks",
    name: "Rani pink Kanchipuram checks",
    category: "sarees",
    price: 29500,
    fabric: "Pure mulberry silk",
    weave: "Kanchipuram, kattam checks",
    length: "6.2 m with blouse",
    blouse: "Violet, unstitched",
    description:
      "Kattam checks woven in fine gold over rani pink, finished with a contrast violet border and pallu.",
    care: silkCare,
    art: { kind: "saree", body: "#B92C62", border: "#3B2A6B", motif: "checks" },
  },
  {
    slug: "peacock-blue-soft-silk",
    name: "Peacock blue soft silk",
    category: "sarees",
    price: 12800,
    tag: "New",
    fabric: "Soft silk",
    weave: "Zari stripes",
    length: "6.3 m with blouse",
    blouse: "Gold zari, unstitched",
    description:
      "A lighter silk that drapes easily for long functions. Fine vertical zari stripes and a slim gold border.",
    care: silkCare,
    art: { kind: "saree", body: "#1C5E73", border: "#B88B36", zari: "#EBD08C", motif: "stripes" },
  },
  {
    slug: "mango-yellow-green-bridal",
    name: "Mango yellow and parrot green bridal silk",
    category: "sarees",
    price: 46000,
    tag: "Bridal",
    fabric: "Pure mulberry silk",
    weave: "Kanchipuram, rettai pettu border",
    length: "6.2 m with blouse",
    blouse: "Parrot green, unstitched",
    description:
      "The Meenakshi colours: mango yellow body with a wide parrot green double border and a heavy zari pallu.",
    care: silkCare,
    art: { kind: "saree", body: "#DDAE36", border: "#2D6A3E", motif: "mango" },
  },
  {
    slug: "bottle-green-arani-silk",
    name: "Bottle green Arani silk",
    category: "sarees",
    price: 9400,
    fabric: "Silk",
    weave: "Arani, butta body",
    length: "6.2 m with blouse",
    blouse: "Red, unstitched",
    description:
      "Everyday silk from Arani with a bottle green body, gold buttas and a bright red border.",
    care: silkCare,
    art: { kind: "saree", body: "#1F5137", border: "#A3242F", motif: "butta" },
  },
  {
    slug: "lavender-soft-silk",
    name: "Lavender soft silk",
    category: "sarees",
    price: 11200,
    fabric: "Soft silk",
    weave: "Butta body",
    length: "6.3 m with blouse",
    blouse: "Plum, unstitched",
    description: "Pale lavender with scattered gold buttas and a plum border. Light enough for daytime functions.",
    care: silkCare,
    art: { kind: "saree", body: "#9585BA", border: "#5A2D5E", motif: "butta" },
  },
  {
    slug: "sandal-silk-cotton-temple-border",
    name: "Sandal silk cotton with temple border",
    category: "sarees",
    price: 4650,
    fabric: "Silk cotton",
    weave: "Temple border",
    length: "6.2 m with blouse",
    blouse: "Maroon, unstitched",
    description: "A plain sandal body with a maroon temple border. Comfortable for daily wear and temple visits.",
    care: "Gentle hand wash in cold water the first time, or dry clean. Dry in shade.",
    art: { kind: "saree", body: "#E5D2AC", border: "#7B1E2B", motif: "plain" },
  },
  {
    slug: "pure-silk-veshti-gold-border",
    name: "Pure silk veshti, one-inch gold border",
    category: "dhotis",
    price: 3450,
    tag: "New",
    fabric: "Pure silk",
    weave: "Zari border",
    length: "4 or 8 muzham",
    sizes: ["4 muzham", "8 muzham"],
    description: "Off-white pattu veshti with a one-inch gold zari border, for weddings, poojas and temple visits.",
    care: silkCare,
    art: { kind: "dhoti", body: "#F3ECDB", border: "#C09A4A", motif: "plain" },
  },
  {
    slug: "pattu-veshti-angavastram-maroon",
    name: "Pattu veshti and angavastram set, maroon border",
    category: "dhotis",
    price: 5900,
    fabric: "Pure silk",
    weave: "Zari and maroon border",
    length: "8 muzham veshti with angavastram",
    sizes: ["Regular", "Large"],
    description: "A matching veshti and angavastram with a maroon and gold border. Popular with grooms and their families.",
    care: silkCare,
    art: { kind: "dhoti", body: "#F1E7D0", border: "#7B1E2B", motif: "plain" },
  },
  {
    slug: "cotton-veshti-silver-jari",
    name: "Cotton veshti, silver jari",
    category: "dhotis",
    price: 1150,
    fabric: "Fine cotton",
    weave: "Silver jari border",
    length: "4 muzham",
    sizes: ["4 muzham", "8 muzham"],
    description: "Soft, breathable cotton with a slim silver jari border for daily wear.",
    care: "Machine wash gentle, or hand wash. Iron while slightly damp.",
    art: { kind: "dhoti", body: "#F7F4EC", border: "#9BA3A8", zari: "#E3E6E8", motif: "plain" },
  },
  {
    slug: "amman-pattu-pavadai-red-gold",
    name: "Amman pattu pavadai, red and gold",
    category: "vastrams",
    price: 1850,
    tag: "Made to size",
    fabric: "Silk",
    weave: "Zari temple border",
    length: "Stitched to idol height",
    sizes: ["6 inch", "9 inch", "12 inch", "18 inch", "24 inch"],
    description:
      "A pleated pavadai in red silk with a gold temple border, for Amman idols at home or in temples. Other sizes are stitched on request.",
    care: "Dry clean, or brush gently. Store flat.",
    art: { kind: "vastram", body: "#A51F2E", border: "#C9A14A", zari: "#F1D791", motif: "butta" },
  },
  {
    slug: "perumal-vastram-yellow-silk",
    name: "Perumal vastram, yellow silk",
    category: "vastrams",
    price: 2400,
    tag: "Made to size",
    fabric: "Silk",
    weave: "Maroon zari border",
    length: "Stitched to idol height",
    sizes: ["9 inch", "12 inch", "18 inch", "24 inch"],
    description: "Pitambaram yellow silk with a maroon and gold border, the traditional colour for Perumal.",
    care: "Dry clean, or brush gently. Store flat.",
    art: { kind: "vastram", body: "#E1AE35", border: "#7B1E2B", motif: "mango" },
  },
  {
    slug: "pillaiyar-vastram-green",
    name: "Pillaiyar vastram set, green",
    category: "vastrams",
    price: 1250,
    tag: "Made to size",
    fabric: "Silk",
    weave: "Gold border",
    length: "Stitched to idol height",
    sizes: ["6 inch", "9 inch", "12 inch"],
    description: "A green silk vastram and angavastram for Pillaiyar, with a gold border.",
    care: "Dry clean, or brush gently. Store flat.",
    art: { kind: "vastram", body: "#2C6B45", border: "#C9A14A", zari: "#F1D791", motif: "checks" },
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
