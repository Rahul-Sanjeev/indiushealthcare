import React, { useState, memo } from "react";
import { Building2 } from "lucide-react";

const SafeImage = memo(({ src, alt, className }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`bg-slate-50 flex items-center justify-center ${className}`}
      >
        <Building2 className="text-slate-200" size={32} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} transition-opacity duration-500 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
      onError={() => setError(true)}
      onLoad={() => setLoaded(true)}
      loading="lazy"
      decoding="async"
    />
  );
});

export default SafeImage;
