type Props = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export function DivisionHero({ eyebrow, title, description, image }: Props) {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-ink)] text-white">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover opacity-40"
          width={1280}
          height={960}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-ink)] via-[var(--brand-ink)]/85 to-transparent" />
      </div>
      <div className="container-prose relative py-24 sm:py-32">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-2xl text-balance font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
