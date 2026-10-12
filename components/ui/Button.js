import Link from 'next/link';

const base =
  'group inline-flex items-center justify-center gap-2 rounded-[3px] px-5 py-3 text-[0.9375rem] font-semibold tracking-[0.005em] transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60';

const variants = {
  primary: 'bg-amber-500 text-navy-950 hover:bg-amber-400',
  navy: 'bg-navy-900 text-white hover:bg-navy-700',
  outline: 'border border-navy-900/20 text-ink hover:border-navy-900 hover:bg-navy-900 hover:text-white',
  'outline-light': 'border border-white/30 text-white hover:border-white hover:bg-white hover:text-navy-950',
  link: 'px-0 py-0 text-brand-600 hover:text-brand-700 underline-offset-4 hover:underline',
};

export function buttonClasses(variant = 'primary', className = '') {
  return `${base} ${variants[variant]} ${className}`;
}

export default function Button({ href, variant = 'primary', className = '', children, ...props }) {
  const classes = buttonClasses(variant, className);
  if (href) {
    const external = /^(https?:|mailto:|tel:)/.test(href);
    if (external) {
      return (
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
