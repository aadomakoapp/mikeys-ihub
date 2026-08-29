interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export const Logo = ({ className = "", variant = "default" }: LogoProps) => {
  const textColor = variant === "light" ? "text-white" : "text-foreground";
  const subColor = variant === "light" ? "text-white/70" : "text-muted-foreground";
  // The mark is a dark "M" — on the dark footer it sits on a white tile so it stays visible.
  const markWrap = variant === "light" ? "rounded-md bg-white px-1.5 py-1" : "";
  return (
    <a href="#top" className={`flex items-center gap-2.5 ${className}`}>
      <span className={`flex shrink-0 items-center ${markWrap}`}>
        <img
          src={`${import.meta.env.BASE_URL}logo-mark.png`}
          alt="Mikey's iHub"
          width={69}
          height={40}
          className="h-10 w-auto object-contain"
        />
      </span>
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
