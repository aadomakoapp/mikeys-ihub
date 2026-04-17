import { Smartphone } from "lucide-react";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export const Logo = ({ className = "", variant = "default" }: LogoProps) => (
  <a href="#top" className={`flex items-center gap-2.5 ${className}`}>
    <div className="bg-primary rounded-md p-1.5 flex items-center justify-center">
      <Smartphone className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
    </div>
    <div className="flex items-baseline gap-1 leading-none">
      <span className={`text-base font-extrabold tracking-tight ${variant === "light" ? "text-white" : "text-foreground"}`}>
        Mikey's
      </span>
      <span className={`text-[11px] font-bold tracking-[0.18em] ${variant === "light" ? "text-white/70" : "text-muted-foreground"}`}>
        iHUB
      </span>
    </div>
  </a>
);
