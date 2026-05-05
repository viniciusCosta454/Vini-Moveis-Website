export default function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'light' }) {
  const centered = align === 'center';
  const dark = tone === 'dark';

  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl`}>
      {eyebrow ? (
        <p className={`mb-4 text-xs font-bold uppercase tracking-[0.28em] ${dark ? 'text-vini-bronze' : 'text-vini-wood'}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-display text-4xl leading-tight md:text-5xl ${dark ? 'text-vini-ivory' : 'text-vini-ink'}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 md:text-lg ${dark ? 'text-white/68' : 'text-vini-charcoal/75'}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
