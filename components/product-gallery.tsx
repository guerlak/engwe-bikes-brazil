'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductGalleryProps {
  images: string[];
  name: string;
  tag?: string;
}

export function ProductGallery({ images, name, tag }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-[4/3] bg-zinc-100 rounded-3xl overflow-hidden relative shadow-inner group">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={activeImage}
              alt={name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        
        {tag && (
          <div className="absolute top-6 left-6 bg-orange-500 text-white text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg z-20">
            {tag}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveImage(img)}
            className={`aspect-square bg-zinc-50 rounded-2xl overflow-hidden relative cursor-pointer transition-all duration-300 ${
              activeImage === img 
                ? 'ring-2 ring-orange-500 scale-95 shadow-md z-10' 
                : 'hover:ring-2 ring-orange-500/30 opacity-60 hover:opacity-100'
            }`}
          >
            <Image
              src={img}
              alt={`${name} view ${i + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
