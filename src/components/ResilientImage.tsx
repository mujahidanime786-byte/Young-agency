import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  aspectClassName?: string;
  priority?: boolean;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Young Agency.co Visual',
  aspectClassName = 'aspect-[4/3]',
  priority = false,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-[#F7F7F7] border border-[#E8E8E8] text-[#666666] p-6 text-center ${aspectClassName} ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="w-6 h-6 text-[#C0C0C0] mb-2" aria-hidden="true" />
        <span className="text-xs font-medium tracking-wide uppercase text-[#666666]">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  const webpSrc = src.endsWith('.jpg') ? src.replace(/\.jpg$/, '.webp') : undefined;

  return (
    <picture className="block w-full h-full">
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'low'}
        onError={() => setHasError(true)}
        className={className}
      />
    </picture>
  );
}
