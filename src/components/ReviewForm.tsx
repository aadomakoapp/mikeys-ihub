import { useState } from "react";
import { CheckCircle2, Loader2, Send, Star } from "lucide-react";
import { Button } from "./ui/button";
import { store, whatsappLink } from "@/content";

const starOn = "fill-[hsl(45_93%_55%)] text-[hsl(45_93%_55%)]";
const inputClasses =
  "w-full rounded-md surface border border-border text-sm px-3 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent placeholder:text-muted-foreground";

/**
 * Sends the review to the store's email (store-info.json → "email") via
 * formsubmit.co — no server needed. The owner then publishes the ones they
 * like by adding them to content/site-text.json under "testimonials".
 */
export const ReviewForm = () => {
  const [rating, setRating] = useState(5);
  const [hovered, setHovered] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_honey")) return; // hidden field only bots fill in
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${store.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New website review for ${store.storeName}`,
          _template: "table",
          _captcha: "false",
          name: data.get("name"),
          location: data.get("location") || "—",
          rating: `${rating} / 5`,
          review: data.get("review"),
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-background border border-border rounded-xl p-6 md:p-8">
      {status === "sent" ? (
        <div className="text-center py-6" role="status">
          <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-3" />
          <h3 className="font-bold text-lg mb-1">Thank you!</h3>
          <p className="text-sm text-muted-foreground">
            Your review has been sent to {store.storeName}. It will appear here
            once it's been read and approved.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-5">
            <h3 className="font-bold text-lg">Leave a review</h3>
            <p className="text-sm text-muted-foreground">
              Bought from us? Tell others how it went — reviews are checked
              before they appear on the site.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="review-name" className="block text-sm font-medium mb-1.5">
                  Your name
                </label>
                <input
                  id="review-name"
                  name="name"
                  type="text"
                  required
                  maxLength={60}
                  placeholder="e.g. Kwame A."
                  className={`${inputClasses} h-10`}
                />
              </div>
              <div>
                <label htmlFor="review-location" className="block text-sm font-medium mb-1.5">
                  Town / city <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <input
                  id="review-location"
                  name="location"
                  type="text"
                  maxLength={60}
                  placeholder="e.g. Kumasi"
                  className={`${inputClasses} h-10`}
                />
              </div>
            </div>

            <div>
              <span className="block text-sm font-medium mb-1.5">Your rating</span>
              <div className="flex items-center gap-1" onMouseLeave={() => setHovered(0)}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setRating(n)}
                    onMouseEnter={() => setHovered(n)}
                    aria-label={`${n} star${n > 1 ? "s" : ""}`}
                    aria-pressed={rating === n}
                    className="p-0.5"
                  >
                    <Star
                      className={`h-7 w-7 transition-colors ${
                        n <= (hovered || rating) ? starOn : "text-muted-foreground/40"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="review-text" className="block text-sm font-medium mb-1.5">
                Your review
              </label>
              <textarea
                id="review-text"
                name="review"
                required
                rows={4}
                maxLength={600}
                placeholder="What did you buy, and how was the experience?"
                className={`${inputClasses} py-2.5 resize-y`}
              />
            </div>

            <Button type="submit" disabled={status === "sending"} className="w-full sm:w-auto">
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send review
                </>
              )}
            </Button>

            {status === "error" && (
              <p className="text-sm text-destructive" role="alert">
                Sorry — your review couldn't be sent right now. Please try again,
                or{" "}
                <a
                  href={whatsappLink(store.whatsappQuestion)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium"
                >
                  tell us on WhatsApp
                </a>
                .
              </p>
            )}
          </form>
        </>
      )}
    </div>
  );
};
