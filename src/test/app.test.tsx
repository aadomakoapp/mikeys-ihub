import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "@/App";
import { products, store } from "@/content";

describe("site smoke test", () => {
  it("renders the full home page from the content files", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    // every product from content/inventory.json shows up
    for (const p of products) {
      expect(screen.getAllByText(p.name).length).toBeGreaterThan(0);
    }
    // contact details from content/store-info.json show up
    expect(screen.getAllByText(store.phones[0]).length).toBeGreaterThan(0);
    expect(screen.getAllByText(store.email).length).toBeGreaterThan(0);
    // the "leave a review" form is on the page
    expect(screen.getByRole("button", { name: /send review/i })).toBeInTheDocument();
  });
});
