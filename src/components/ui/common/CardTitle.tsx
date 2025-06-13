import React from 'react';

interface CardTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'center' | 'left';
}

const CardTitle: React.FC<CardTitleProps> = ({
  title,
  subtitle,
  description,
  align = 'left',
}) => {
  const alignmentClasses = align === 'left' ? 'text-left' : 'text-center';

  return (
    <div className={`flex flex-col ${alignmentClasses}`}>
      <h3 className="text-xl font-semibold leading-tight   text-[#C0C0C0] mb-2 ">{title}</h3>

      {subtitle && (
        <p className="text-[#EDEADE] ">{subtitle}</p>
      )}

      {description && (
        <p className="text-[#B0B0B0] tracking-wide	  leading-[24px] ">{description}</p>
      )}
    </div>
  );
};

export default CardTitle;