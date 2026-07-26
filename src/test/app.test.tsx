import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
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

  it("search bar filters the stock grid", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/search iphone/i);

    fireEvent.change(input, { target: { value: "macbook" } });
    expect(screen.queryByText("iPhone 15 Pro Max")).not.toBeInTheDocument();
    expect(screen.getAllByText(/MacBook/).length).toBeGreaterThan(0);

    // no matches → friendly WhatsApp fallback instead of an empty grid
    fireEvent.change(input, { target: { value: "playstation" } });
    expect(screen.getByText(/we don't have that listed/i)).toBeInTheDocument();

    // clearing brings everything back
    fireEvent.change(input, { target: { value: "" } });
    expect(screen.getAllByText("iPhone 15 Pro Max").length).toBeGreaterThan(0);
  });
});
