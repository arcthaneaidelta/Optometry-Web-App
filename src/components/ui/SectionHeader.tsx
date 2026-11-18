import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  italicWord?: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  italicWord,
  description,
  align = 'left',
  dark = false,
  className = '',
}) => {
  return (
    <div
      className={`mb-12 sm:mb-16 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'
      } ${className}`}
    >
      {eyebrow && (
        <span
          className={`text-[11px] uppercase tracking-[0.22em] font-medium block mb-3.5 ${
            dark ? 'text-sage' : 'text-forest'
          }`}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-editorial ${
          dark ? 'text-ivory' : 'text-charcoal'
        }`}
      >
        {title}{' '}
        {italicWord && (
          <span
            className={`italic font-normal ${
              dark ? 'text-sage-light' : 'text-forest'
            }`}
          >
            {italicWord}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed font-light ${
            dark ? 'text-ivory/70' : 'text-olive'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
