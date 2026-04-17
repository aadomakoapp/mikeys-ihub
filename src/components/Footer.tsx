import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="relative border-t border-border mt-10">
    <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
      <Logo />
      <p className="text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} Mikey's iHub · Adum, Melcom · #WePrioritizeQuality
      </p>
    </div>
  </footer>
);
