# How to update the Mikey's iHub website

**Live website:** https://aadomakoapp.github.io/mikeys-ihub/

You don't need to install anything. Everything you'd normally
want to change lives in **3 small files** and **1 photo folder**, and you edit them
right here on the GitHub website. Every time you save a change, the website
rebuilds itself and goes live automatically in about **2 minutes**.

| I want to change… | Edit this |
|---|---|
| Products, storage options, product photos | [`content/inventory.json`](content/inventory.json) |
| Phone numbers, WhatsApp, email, address, opening hours, social media links | [`content/store-info.json`](content/store-info.json) |
| Headline, front-page picture carousel, categories, customer reviews, ratings | [`content/site-text.json`](content/site-text.json) |
| Photos (upload new ones here) | [`public/images/`](public/images) folder |

---

## 1. How to edit a file (works on phone or computer)

1. Open the file (click one of the links in the table above).
2. Click the **pencil icon** (✏️) at the top-right of the file.
3. Make your change.
4. Click the green **Commit changes…** button, then **Commit changes** again.
5. Done. Wait ~2 minutes and refresh the live site.

**Golden rule:** only change what's between the quotation marks. Keep the
quotes `"` and the commas `,` exactly as they are.

---

## 2. Adding a new product

In `content/inventory.json`, copy an existing product block — everything from `{` to `},` —
and paste it below, then edit the details:

```json
{
  "name": "iPhone 16 Pro",
  "color": "Desert Titanium",
  "storage": ["256GB", "512GB"],
  "condition": "Brand New",
  "image": "iphone-16-pro.jpg"
},
```

Notes:

- **Prices are not shown on the website.** Each product card says
  *"Message us for today's best price"* and customers tap **Order** to ask on
  WhatsApp — so you never need to update the site when prices change.

- `condition` — anything containing the word "New" gets a **green** badge
  (e.g. "Brand New"). Anything else (e.g. "UK Used") gets an **orange** badge.
- Every product block ends with `},` **except the last one**, which ends with `}` (no comma).
- To **remove** a product, delete its whole block from `{` to `},`.

## 3. Product photos — two ways

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

**The rotating pictures on the front page** come from the `"images"` list under
`"hero"` in `content/site-text.json`. Same rules: each entry is either a file
name from `public/images` or a full `https://` link. Add, remove or reorder
lines to change the carousel.

## 4. Changing phone numbers, hours, address

Open `content/store-info.json`. Everything is labelled. Two things to know:

- `whatsappNumber` is **digits only, starting with the country code**, no `+` and no spaces:
  `"whatsappNumber": "233560965636"`
- `phones` are display numbers — write them however you want them to look on the site.

## 5. Customer reviews — from email to website

Visitors can fill in the **"Leave a review"** form on the website. **Nothing
they type goes live by itself.** Instead, every review is emailed to you, and
*you* decide which ones get published. Here is the whole process:

**Step 1 — The review arrives in your email.** Each submission comes to the
address in `content/store-info.json` (`"email"`) with the subject
*"New website review for Mikey's iHub"*, showing the customer's name, town,
star rating and message. (Check Spam the first few times and mark it
**"Not spam"** so future ones reach your inbox.)

**Step 2 — Decide.** Spam or fake? Just **delete the email** — it will never
touch the website. Good review? Continue:

**Step 3 — Open [`content/site-text.json`](content/site-text.json)** and click
the **pencil icon** (✏️) to edit.

**Step 4 — Publish it.** Find the `"testimonials"` list and paste in a new
block with the details from the email. Copy an existing block as your template:

```json
"testimonials": [
  {
    "name": "Ama B.",
    "location": "Kumasi",
    "text": "Great phone, fast delivery!",
    "rating": 5
  },
  { ...the reviews that were already there... }
]
```

**Step 5 — Click the green "Commit changes" button** (twice). Wait ~2 minutes,
refresh the website — the review is now live for everyone to see.

Things to know:

- Reviews show in the order they're listed — paste new ones at the **top**
  so the newest shows first.
- Every review block ends with `},` **except the last one**, which ends with
  `}` (no comma). This is the most common typo — see section 6 if the site
  doesn't update.
- `"rating"` is optional — leave it out and the review shows 5 stars.
  Write `"rating": 4` to show 4 filled stars, and so on.

**One-time setup:** the form is powered by a free service called
[FormSubmit](https://formsubmit.co). The **first time** someone sends a review,
FormSubmit emails you a confirmation — open it and click **Activate**. After
that one click, every review lands straight in your inbox. (If you change the
`"email"` in `store-info.json` later, you'll get a new activation email the
first time the new address is used.)

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
