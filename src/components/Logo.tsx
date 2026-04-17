import { Smartphone } from "lucide-react";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => (
  <a href="#top" className={`flex items-center gap-2 group ${className}`}>
    <div className="relative">
      <div className="absolute inset-0 bg-primary blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
      <div className="relative bg-gradient-red rounded-lg p-1.5 shadow-glow">
        <Smartphone className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
      </div>
    </div>
    <div className="flex items-baseline gap-1 leading-none">
      <span className="text-lg font-extrabold tracking-tight text-gradient-red">MIKEY'S</span>
      <span className="text-xs font-bold tracking-[0.2em] text-foreground/80">iHUB</span>
    </div>
  </a>
);
