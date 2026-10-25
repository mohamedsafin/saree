// Shop details used across the site. Replace the WhatsApp number with the shop's real one.
export const site = {
  name: "Sri Meenakshi Silk House",
  tamilName: "ஸ்ரீ மீனாட்சி சில்க் ஹவுஸ்",
  area: "Mylapore, Chennai",
  instagram: "https://www.instagram.com/srimeenakshisilkhouse/",
  instagramHandle: "@srimeenakshisilkhouse",
  whatsapp: "919999999999",
  maps: "https://www.google.com/maps/search/?api=1&query=Sri+Meenakshi+Silk+House+Mylapore+Chennai",
  reviews: "https://www.google.com/search?q=sri+meenakshi+silk+house+chennai+reviews",
  rating: 4.5,
  reviewCount: 27,
};

export function whatsappLink(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function inr(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
