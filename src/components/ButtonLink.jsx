export default function ButtonLink({
  href,
  children,
  icon: Icon,
  variant = 'primary',
  className = '',
  ...props
}) {
  const variants = {
    primary:
      'bg-vini-bronze text-vini-ink shadow-[0_12px_30px_rgba(22,20,17,0.18)] hover:-translate-y-0.5 hover:bg-vini-caramel hover:shadow-[0_18px_42px_rgba(176,138,87,0.32)] focus-visible:ring-vini-bronze',
    secondary:
      'border border-white/55 bg-white/10 text-white backdrop-blur hover:-translate-y-0.5 hover:border-vini-bronze hover:bg-vini-bronze/15 hover:shadow-[0_16px_34px_rgba(0,0,0,0.2)] focus-visible:ring-white',
    dark:
      'bg-vini-ink text-vini-ivory shadow-[0_12px_30px_rgba(22,20,17,0.16)] hover:-translate-y-0.5 hover:bg-vini-charcoal hover:shadow-[0_18px_42px_rgba(22,20,17,0.28)] focus-visible:ring-vini-ink',
    outline:
      'border border-vini-ink/20 bg-transparent text-vini-ink hover:-translate-y-0.5 hover:border-vini-bronze hover:bg-vini-bronze/10 hover:text-vini-wood hover:shadow-[0_14px_32px_rgba(22,20,17,0.1)] focus-visible:ring-vini-bronze',
    light:
      'bg-vini-ivory text-vini-ink shadow-[0_12px_30px_rgba(22,20,17,0.12)] hover:-translate-y-0.5 hover:bg-white hover:text-vini-wood hover:shadow-[0_18px_42px_rgba(22,20,17,0.2)] focus-visible:ring-vini-bronze',
  };

  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-300 ease-out active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-vini-paper ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {Icon ? (
        <Icon
          aria-hidden="true"
          className="h-4 w-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
          strokeWidth={1.8}
        />
      ) : null}
    </a>
  );
}
