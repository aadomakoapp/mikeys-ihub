import { Apple } from "lucide-react";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export const Logo = ({ className = "", variant = "default" }: LogoProps) => {
  const textColor = variant === "light" ? "text-white" : "text-foreground";
  const subColor = variant === "light" ? "text-white/70" : "text-muted-foreground";
  return (
    <a href="#top" className={`flex items-center gap-2.5 ${className}`}>
      <div className="bg-foreground rounded-md p-1.5 flex items-center justify-center ring-2 ring-primary/80">
        <Apple className="h-4 w-4 text-background" strokeWidth={2} fill="currentColor" />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-base font-extrabold tracking-tight ${textColor}`}>
          Mikey's <span className="text-primary">iHub</span>
        </span>
        <span className={`text-[9px] font-bold tracking-[0.2em] mt-0.5 ${subColor}`}>
          #WEPRIORITIZEQUALITY
        </span>
      </div>
    </a>
  );
};
