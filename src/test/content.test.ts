import { describe, it, expect } from "vitest";
import inventory from "../../content/inventory.json";
import storeInfo from "../../content/store-info.json";
import siteText from "../../content/site-text.json";

describe("content/inventory.json", () => {
  it("has at least one product", () => {
    expect(inventory.products.length).toBeGreaterThan(0);
  });

  it.each(inventory.products.map((p) => [p.name || "(missing name)", p]))(
    "product %s has all required fields",
    (_name, p) => {
      expect(p.name, "every product needs a name").toBeTruthy();
      expect(p.color, `${p.name}: needs a color`).toBeTruthy();
      expect(p.price, `${p.name}: needs a price`).toBeTruthy();
      expect(p.condition, `${p.name}: needs a condition (e.g. Brand New, UK Used)`).toBeTruthy();
      expect(p.image, `${p.name}: needs an image (file name in public/images or https:// link)`).toBeTruthy();
      expect(Array.isArray(p.storage), `${p.name}: storage must be a list like ["128GB", "256GB"]`).toBe(true);
      expect(p.storage.length, `${p.name}: storage list must not be empty`).toBeGreaterThan(0);
    }
  );
});

describe("content/store-info.json", () => {
  it("has the required contact details", () => {
    expect(storeInfo.storeName).toBeTruthy();
    expect(storeInfo.whatsappNumber.replace(/\D/g, "").length, "whatsappNumber must contain digits").toBeGreaterThanOrEqual(9);
    expect(storeInfo.phones.length).toBeGreaterThan(0);
    expect(storeInfo.email).toContain("@");
    expect(storeInfo.addressLine1).toBeTruthy();
    expect(storeInfo.openingHours.length).toBeGreaterThan(0);
  });
});

describe("content/site-text.json", () => {
  it("has hero, categories, steps and testimonials", () => {
    expect(siteText.hero.headlineStart).toBeTruthy();
    expect(siteText.hero.images.length, "hero needs at least one image").toBeGreaterThan(0);
    for (const img of siteText.hero.images) {
      expect(img, "hero images must be file names or https:// links").toBeTruthy();
    }
    expect(siteText.categories.length).toBeGreaterThan(0);
    expect(siteText.howItWorks.length).toBeGreaterThan(0);
    expect(siteText.testimonials.length).toBeGreaterThan(0);
    for (const t of siteText.testimonials) {
      expect(t.name).toBeTruthy();
      expect(t.text).toBeTruthy();
    }
  });
});
