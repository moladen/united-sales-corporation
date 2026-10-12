// CSS-only entrance animation for above-the-fold content: no JavaScript
// dependency, so headings render immediately and LCP is not delayed.
// Neutralised by the prefers-reduced-motion rule in globals.css.
export default function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <div className={`animate-fade-up ${className}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}
