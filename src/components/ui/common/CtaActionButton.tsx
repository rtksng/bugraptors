import React from 'react';

/**
 * Props for the CtaActionButton component.
 * @interface CtaActionButtonProps
 * @property {string} text - The text to display inside the button.
 * @property {string} [link] - The URL to navigate to when the button is clicked. If provided, the button will render as an <a> tag.
 * @property {'primary' | 'secondary' | 'ghost' | 'tertiary'} [variant='primary'] - The visual style of the button. 'tertiary' is specifically for link-style buttons.
 * @property {'sm' | 'md' | 'lg'} [size='md'] - The size of the button (small, medium, large).
 * @property {string} [className] - Additional Tailwind CSS classes to apply to the button.
 * @property {() => void} [onClick] - An optional click handler. For 'link' and 'tertiary' variants, this augments navigation.
 * @property {boolean} [disabled=false] - If true, the button will be disabled and non-interactive.
 */
interface CtaActionButtonProps {
  text: string;
  link?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean; // New prop for disabled state
}

/**
 * A versatile call-to-action button component with various styles and sizes.
 * It can function as either a button or a link depending on the 'link' prop or 'tertiary' variant.
 *
 * @param {CtaActionButtonProps} props - The props for the component.
 */
const CtaActionButton: React.FC<CtaActionButtonProps> = ({
  text,
  link,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false, // Default to not disabled
}) => {
  // Base classes for the button/link
  const baseClasses = `
    group relative rounded-lg shadow-lg transform transition-all duration-300 overflow-hidden
    text-sm sm:text-base cursor-pointer font-light flex items-center justify-center
    ${disabled ? 'opacity-50 pointer-events-none' : ''}
  `;

  // Size-specific classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm',
    md: 'px-4 py-2 sm:px-6 sm:py-3',
    lg: 'px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg',
  }[size];

  // Variant-specific classes
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

  // If a link is provided or variant is tertiary, render an <a> tag, otherwise render a <button>
  const isLink = link || variant === 'tertiary';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (disabled) {
      e.preventDefault(); // Prevent default link/button action if disabled
      return;
    }
    onClick?.(); // Call the provided onClick handler if it exists
  };

  if (isLink) {
    return (
      <a
        href={link || '#'} // Fallback href for tertiary if not provided
        onClick={handleClick}
        className={combinedClasses}
        aria-disabled={disabled} // ARIA attribute for accessibility
        tabIndex={disabled ? -1 : 0} // Make disabled links not focusable via tab
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

export default CtaActionButton;
