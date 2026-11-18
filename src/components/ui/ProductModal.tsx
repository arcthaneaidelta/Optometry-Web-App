import React, { useState, useEffect } from 'react';
import type { EyewearProduct } from '../../data/eyewear';
import { X, ChevronLeft, ChevronRight, Check, Sparkles, ArrowRight } from 'lucide-react';

interface ProductModalProps {
  product: EyewearProduct | null;
  allProducts: EyewearProduct[];
  onClose: () => void;
  onSelectProduct: (product: EyewearProduct) => void;
  onRequestFitting: (product: EyewearProduct) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  allProducts,
  onClose,
  onSelectProduct,
  onRequestFitting,
}) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  // Reset selected color when product changes
  useEffect(() => {
    setSelectedColorIndex(0);
  }, [product]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, allProducts]);

  if (!product) return null;

  const currentIndex = allProducts.findIndex((p) => p.id === product.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + allProducts.length) % allProducts.length;
    onSelectProduct(allProducts[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % allProducts.length;
    onSelectProduct(allProducts[nextIndex]);
  };

  const activeColor = product.colors[selectedColorIndex] || product.colors[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-charcoal/60 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Content */}
      <div className="relative z-10 bg-white w-full max-w-4xl rounded-2xl border border-stone-border shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 backdrop-blur text-charcoal hover:bg-stone-soft transition-colors focus:outline-none"
          aria-label="Close product preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Imagery & Color Preview */}
        <div className="md:w-1/2 bg-ivory flex flex-col justify-between p-6 sm:p-8 relative border-b md:border-b-0 md:border-r border-stone-border">
          {/* Subtle category badge */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 bg-stone-border/60 text-charcoal rounded-full font-medium">
              {product.category} Series
            </span>

            {/* Prev/Next arrows on top */}
            <div className="flex items-center space-x-1.5">
              <button
                onClick={handlePrev}
                className="p-1.5 rounded-full hover:bg-stone-border/60 text-charcoal transition-colors"
                title="Previous frame (Left arrow)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-olive font-mono">
                {currentIndex + 1} / {allProducts.length}
              </span>
              <button
                onClick={handleNext}
                className="p-1.5 rounded-full hover:bg-stone-border/60 text-charcoal transition-colors"
                title="Next frame (Right arrow)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Visual Display */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-soft/60 flex items-center justify-center my-auto">
            <img
              src={activeColor.image}
              alt={`${product.name} in ${activeColor.name}`}
              className="w-full h-full object-cover transition-all duration-500 ease-out hover:scale-105"
            />
            {/* Color label tag */}
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-medium text-charcoal shadow-sm flex items-center space-x-1.5">
              <span
                className="w-2.5 h-2.5 rounded-full border border-black/20"
                style={{ backgroundColor: activeColor.hex }}
              />
              <span>{activeColor.name}</span>
            </div>
          </div>

          {/* Color Swatch Selectors */}
          <div className="pt-4">
            <span className="text-[11px] uppercase tracking-wider text-olive block mb-2 font-medium">
              Select Colorway
            </span>
            <div className="flex items-center space-x-3">
              {product.colors.map((color, idx) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColorIndex(idx)}
                  className={`group relative flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs transition-all border ${
                    selectedColorIndex === idx
                      ? 'border-forest bg-white shadow-sm ring-1 ring-forest'
                      : 'border-stone-border hover:border-forest/40 bg-white/60'
                  }`}
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-charcoal font-medium text-[11px]">{color.name}</span>
                  {selectedColorIndex === idx && <Check className="w-3 h-3 text-forest" />}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Editorial Specs & Consultation Action */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-full">
          <div>
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-forest font-semibold block mb-1">
                  Vision House Eyewear
                </span>
                <h2 id="product-modal-title" className="text-3xl font-serif text-charcoal">
                  {product.name}
                </h2>
              </div>
              <div className="text-right">
                <span className="text-xl font-serif text-charcoal font-medium">
                  ${product.price}
                </span>
                <span className="block text-[10px] text-olive uppercase tracking-wider">
                  Frame Only
                </span>
              </div>
            </div>

            <p className="mt-2 text-xs italic text-olive">
              {product.tagline}
            </p>

            <p className="mt-4 text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Architectural Specs */}
            <div className="mt-6 pt-5 border-t border-stone-border grid grid-cols-3 gap-3 text-center">
              <div className="p-2.5 bg-ivory rounded-lg border border-stone-border">
                <span className="text-[10px] text-olive uppercase tracking-wider block">Measurements</span>
                <span className="text-xs font-mono font-medium text-charcoal mt-0.5 block">{product.measurements}</span>
              </div>
              <div className="p-2.5 bg-ivory rounded-lg border border-stone-border">
                <span className="text-[10px] text-olive uppercase tracking-wider block">Frame Weight</span>
                <span className="text-xs font-mono font-medium text-charcoal mt-0.5 block">{product.weight}</span>
              </div>
              <div className="p-2.5 bg-ivory rounded-lg border border-stone-border">
                <span className="text-[10px] text-olive uppercase tracking-wider block">Ideal Fit</span>
                <span className="text-xs font-medium text-charcoal mt-0.5 block">{product.fit}</span>
              </div>
            </div>

            {/* Engineering Highlights */}
            <div className="mt-6">
              <span className="text-[11px] uppercase tracking-wider text-forest font-semibold block mb-2 flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1" />
                Craftsmanship & Engineering
              </span>
              <ul className="space-y-1.5 text-xs text-charcoal/80">
                {product.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage mt-1.5 mr-2 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Button: Reserve Frame Styling */}
          <div className="pt-6 mt-6 border-t border-stone-border">
            <button
              onClick={() => {
                onClose();
                onRequestFitting(product);
              }}
              className="w-full py-3.5 px-6 rounded-full text-xs uppercase tracking-wider font-medium bg-forest text-ivory hover:bg-forest-dark transition-all flex items-center justify-center space-x-2 active:scale-[0.99] shadow-sm"
            >
              <span>Schedule Frame Fitting for {product.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-olive mt-2">
              Includes bespoke facial measuring & precision pupillary alignment in our studio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
