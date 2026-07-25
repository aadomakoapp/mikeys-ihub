# How to update the Mikey's iHub website

**Live website:** https://aadomakoapp.github.io/sell-my-shiny-phone/

You don't need to install anything or know how to code. Everything you'd normally
want to change lives in **3 small files** and **1 photo folder**, and you edit them
right here on the GitHub website. Every time you save a change, the website
rebuilds itself and goes live automatically in about **2 minutes**.

| I want to change… | Edit this |
|---|---|
| Products, prices, storage options, product photos | [`content/inventory.json`](content/inventory.json) |
| Phone numbers, WhatsApp, email, address, opening hours, social media links | [`content/store-info.json`](content/store-info.json) |
| Headline, categories, customer reviews, ratings, wording | [`content/site-text.json`](content/site-text.json) |
| Photos (upload new ones here) | [`public/images/`](public/images) folder |

---

## 1. How to edit a file (works on phone or computer)

1. Open the file (click one of the links in the table above).
2. Click the **pencil icon** (✏️) at the top-right of the file.
3. Make your change.
4. Click the green **Commit changes…** button, then **Commit changes** again.
5. Done. Wait ~2 minutes and refresh the live site.

---

## 2. Changing a price

Open `content/inventory.json`, find the product, and change the number:

```json
"price": "12,500",
```

becomes

```json
"price": "11,900",
```

**Golden rule:** only change what's between the quotation marks. Keep the
quotes `"` and the commas `,` exactly as they are.

## 3. Adding a new product

In `content/inventory.json`, copy an existing product block — everything from `{` to `},` —
and paste it below, then edit the details:

```json
{
  "name": "iPhone 16 Pro",
  "color": "Desert Titanium",
  "storage": ["256GB", "512GB"],
  "condition": "Brand New",
  "price": "16,000",
  "image": "iphone-16-pro.jpg"
},
```

Notes:

- `condition` — anything containing the word "New" gets a **green** badge
  (e.g. "Brand New"). Anything else (e.g. "UK Used") gets an **orange** badge.
- Every product block ends with `},` **except the last one**, which ends with `}` (no comma).
- To **remove** a product, delete its whole block from `{` to `},`.

## 4. Product photos — two ways

**Option A — upload a photo (recommended):**

1. Go to the [`public/images`](public/images) folder.
2. Click **Add file → Upload files**, choose the photo from your phone/computer,
   then **Commit changes**.
3. In `content/inventory.json`, set the image to the exact file name:

```json
"image": "iphone-16-pro.jpg"
```

The name must match exactly, including `.jpg`/`.png` and capital letters.

**Option B — use a link from the internet:**

```json
"image": "https://example.com/photo-of-phone.jpg"
```

Any link that starts with `https://` is used as-is.

Square-ish photos on a plain background look best on the product cards.

## 5. Changing phone numbers, hours, address

Open `content/store-info.json`. Everything is labelled. Two things to know:

- `whatsappNumber` is **digits only, starting with the country code**, no `+` and no spaces:
  `"whatsappNumber": "233560965636"`
- `phones` are display numbers — write them however you want them to look on the site.

## 6. If something goes wrong

The site is protected: if you save a file with a typo (usually a missing comma
or quotation mark), the **live site stays as it was** — your broken change simply
doesn't go live.

To see what happened, open the **Actions** tab at the top of this page:

- ✅ Green tick — your change is live.
- ❌ Red X — your last edit has a typo. Open the file again and check the spot
  you edited: is there a missing `,` between items? A missing `"`? Fix it and
  commit again.

You can always compare against this guide's examples, or view the file's
**History** (clock icon on the file page) to see exactly what changed and undo it.

---

*For developers: this is a Vite + React + Tailwind site. See [README.md](README.md).*
