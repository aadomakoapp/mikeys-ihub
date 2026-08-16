interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export const Logo = ({ className = "", variant = "default" }: LogoProps) => {
  const textColor = variant === "light" ? "text-white" : "text-foreground";
  const subColor = variant === "light" ? "text-white/70" : "text-muted-foreground";
  return (
    <a href="#top" className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={`${import.meta.env.BASE_URL}logo.png`}
        alt="Mikey's iHub"
        width={36}
        height={36}
        className="h-9 w-9 shrink-0 rounded-md object-cover ring-2 ring-primary/80"
      />
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
