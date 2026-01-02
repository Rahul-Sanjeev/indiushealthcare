import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

const SafeImage = ({ src, alt, className }) => {
    const [error, setError] = useState(false);
    if (error || !src) {
        return (
            <div className={`bg-slate-50 flex items-center justify-center ${className}`}>
                <Building2 className="text-slate-200" size={32} />
            </div>
        );
    }
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={() => setError(true)}
            loading="lazy"
        />
    );
};

export default SafeImage;
