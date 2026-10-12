export default function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  as: Tag = 'h2',
  light = false,
  align = 'left',
  className = '',
}) {
  const centered = align === 'center';
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && <p className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>{eyebrow}</p>}
      <Tag
        id={id}
        className={`mt-4 text-[1.875rem] leading-[1.12] font-bold sm:text-4xl lg:text-[2.75rem] ${
          light ? 'text-white' : ''
        }`}
      >
        {title}
      </Tag>
      {intro && (
        <p className={`mt-5 text-[1.0625rem] leading-relaxed ${light ? 'text-white/70' : 'text-body'}`}>{intro}</p>
      )}
    </div>
  );
}
