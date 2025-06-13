import React from 'react';

// --- Start: Embedded CtaActionButton Component ---
// This component has been embedded here to resolve the import error.
// In a typical project, CtaActionButton would be in its own file.

interface CtaActionButtonProps {
  text: string;
  link?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const CtaActionButton: React.FC<CtaActionButtonProps> = ({
  text,
  link,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
}) => {
  const baseClasses = `
    group relative rounded-lg shadow-lg transform transition-all duration-300 overflow-hidden
    text-sm sm:text-base cursor-pointer font-light flex items-center justify-center
    ${disabled ? 'opacity-50 pointer-events-none' : ''}
  `;

  const sizeClasses = {
    sm: 'px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm',
    md: 'px-4 py-2 sm:px-6 sm:py-3',
    lg: 'px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg',
  }[size];

  const variantClasses = {
    primary: `
      custom-bg-color text-white
      hover:from-purple-700 hover:to-blue-700 hover:scale-105
      focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:outline-none
      active:scale-95
    `,
    secondary: `
      bg-transparent text-purple-400 border border-purple-500
      hover:bg-purple-900/20 hover:border-purple-600 hover:scale-105
      focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:outline-none
      active:scale-95 active:bg-purple-900/30
    `,
    ghost: `
      bg-transparent text-white border border-white/20
      hover:bg-white/10 hover:scale-105
      focus:ring-2 focus:ring-offset-2 focus:ring-white/50 focus:outline-none
      active:scale-95
    `,
    tertiary: `
      bg-transparent text-cyan-400 font-medium no-underline
      hover:text-cyan-300 hover:underline
      focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:outline-none
      active:text-cyan-500 active:scale-95
      shadow-none hover:shadow-none transform-none
      ${size === 'sm' ? 'px-0 py-0' : 'px-1 py-0'}
    `,
  }[variant];

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  const isLink = link || variant === 'tertiary';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.();
  };

  if (isLink) {
    return (
      <a
        href={link || '#'}
        onClick={handleClick}
        className={combinedClasses}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
      >
        <span className="relative z-10 flex items-center">
          {text}
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </a>
    );
  }

  return (
    <button onClick={handleClick} className={combinedClasses} disabled={disabled}>
      <span className="relative z-10 flex items-center">
        {text}
        <svg
          className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
    </button>
  );
};
// --- End: Embedded CtaActionButton Component ---


/**
 * Props for the BlogCardsTitle component.
 * @interface BlogCardsTitleProps
 * @property {string} title - The main title of the blog card. (Required)
 * @property {string} [description] - The descriptive text for the blog post. (Optional)
 * @property {string} [date] - The date of the blog post, displayed as a chip. (Optional)
 * @property {string} [ctaText] - The text for the call-to-action link (e.g., "Read More"). (Optional)
 * @property {string} [ctaLink] - The URL that the call-to-action link points to. (Optional)
 * @property {number} [lineClamp] - Optional: Number of lines to clamp the description text to.
 * This uses native CSS `webkit-line-clamp` properties.
 * @property {string} [className] - Optional: Additional Tailwind CSS classes for the main card container.
 */
interface BlogCardsTitleProps {
  title: string; // Now required
  description?: string; // Now optional
  date?: string; // Now optional
  ctaText?: string; // Now optional
  ctaLink?: string; // Now optional
  lineClamp?: number;
  className?: string;
}

/**
 * A specialized card component designed for displaying blog post previews.
 * It includes a date chip, a prominent title, a description (with optional line clamping),
 * and a call-to-action link using the CtaActionButton component.
 *
 * @param {BlogCardsTitleProps} props - The props for the component.
 */
const BlogCardsTitle: React.FC<BlogCardsTitleProps> = ({
  title,
  description,
  date,
  ctaText,
  ctaLink,
  lineClamp,
  className = '',
}) => {
  // Define the style object for line clamping if lineClamp is provided.
  // This uses native CSS properties for cross-browser compatibility without a plugin.
  const descriptionStyle: React.CSSProperties = lineClamp
    ? {
        display: '-webkit-box',
        WebkitLineClamp: lineClamp, // Applies the specified number of lines
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden', // Hides content that exceeds the defined lines
        textOverflow: 'ellipsis', // Adds an ellipsis (...) at the end of clamped text
      }
    : {}; // If no lineClamp value, no special styles are applied

  return (
    <div className={`flex flex-col  ${className}`}>
      {/* Date Chip: Conditionally displays the blog post date */}
      {date && (
        <div className="text-sm font-light text-gray-400 mb-2">
          {date}
        </div>
      )}

      {/* Card Title: The main heading for the blog post */}
      <h3 className="text-xl leading-tight font-medium  text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 pb-1 group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-300 line-clamp-2">{title}</h3>
       

      {/* Description: The snippet or summary of the blog post. Conditionally rendered. */}
      {description && (
        <p
          className="text-[#EDEADE] font-light leading-[24px] mb-4 line-clamp-2"
          style={descriptionStyle}
        >
          {description}
        </p>
      )}

      {/* Call to Action (CTA): Conditionally rendered if both ctaText and ctaLink are provided. */}
      {(ctaText && ctaLink) && (
        <div className="mt-auto">
          <CtaActionButton
            text={ctaText}
            link={ctaLink}
            variant="tertiary"
            size="md"
            className="justify-start"
          />
        </div>
      )}
    </div>
  );
};

export default BlogCardsTitle;
