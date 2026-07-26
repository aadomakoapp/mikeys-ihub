import inventoryJson from "../content/inventory.json";
import storeInfoJson from "../content/store-info.json";
import siteTextJson from "../content/site-text.json";

export interface Product {
  name: string;
  color: string;
  storage: string[];
  condition: string;
  price: string;
  image: string;
}

export interface Review {
  name: string;
  location?: string;
  text: string;
  /** 1–5 stars; omit for 5 */
  rating?: number;
}

export const products: Product[] = inventoryJson.products;
export const store = storeInfoJson;
export const siteText = siteTextJson;
export const reviews: Review[] = siteTextJson.testimonials;

/**
 * Images in the content files can be either a bare file name
 * (served from public/images/) or a full http(s) URL.
 */
export const imageUrl = (image: string): string =>
  /^https?:\/\//i.test(image) ? image : `${import.meta.env.BASE_URL}images/${image}`;

export const whatsappLink = (message?: string): string => {
  const base = `https://wa.me/${store.whatsappNumber.replace(/\D/g, "")}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const telLink = (phone: string): string => `tel:${phone.replace(/[^+\d]/g, "")}`;

export const isNewCondition = (condition: string): boolean =>
  condition.toLowerCase().includes("new");
