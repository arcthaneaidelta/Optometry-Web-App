import React, { useState, useMemo } from 'react';
import { ProductModal } from '../components/ui/ProductModal';
import { EYEWEAR_COLLECTION } from '../data/eyewear';
import type { EyewearProduct } from '../data/eyewear';
import { ArrowUpDown, Sparkles, Ruler, ArrowUpRight } from 'lucide-react';

interface EyewearProps {
  onOpenAppointment: (serviceType?: string) => void;
}

export const Eyewear: React.FC<EyewearProps> = ({ onOpenAppointment }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [selectedProduct, setSelectedProduct] = useState<EyewearProduct | null>(null);

  const categories = ['All', 'Classic', 'Minimal', 'Contemporary', 'Optical'];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...EYEWEAR_COLLECTION];

    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, sortBy]);

  return (
    <div className="bg-ivory text-charcoal pt-24 sm:pt-28">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-stone-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.22em] text-forest font-semibold block mb-3">
              Artisanal Eyewear Collection
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-charcoal font-normal leading-editorial">
              Frames that feel <span className="italic text-forest">like you.</span>
            </h1>
            <p className="mt-5 text-base sm:text-xl text-olive font-light leading-relaxed">
              Discover thoughtfully selected styles that bring ergonomic comfort, personal identity, and optical clarity together in harmony.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FILTER & SORT TOOLBAR
          ========================================================================= */}
      <section className="sticky top-16 sm:top-20 z-20 bg-ivory/95 backdrop-blur-md border-b border-stone-border py-4 transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? EYEWEAR_COLLECTION.length
                  : EYEWEAR_COLLECTION.filter((p) => p.category === cat).length;
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-200 border ${
                    isActive
                      ? 'bg-forest text-ivory border-forest shadow-sm'
                      : 'bg-white/80 text-charcoal border-stone-border hover:border-forest/40 hover:bg-white'
                  }`}
                >
                  <span>{cat === 'All' ? 'All Frames' : cat}</span>
                  <span className={`ml-1.5 text-[10px] ${isActive ? 'text-sage-light' : 'text-olive'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center space-x-3 self-end md:self-auto shrink-0">
            <label className="text-xs uppercase tracking-wider text-olive font-medium flex items-center">
              <ArrowUpDown className="w-3.5 h-3.5 mr-1.5" />
              Sort By:
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs bg-white border border-stone-border rounded-lg px-3 py-1.5 text-charcoal font-medium focus:outline-none focus:ring-1 focus:ring-forest"
            >
              <option value="featured">Featured Curations</option>
              <option value="name-asc">Name (A – Z)</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
            </select>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRODUCT GRID
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-stone-soft">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="mb-8 flex items-center justify-between text-xs text-olive font-mono">
            <span>Showing {filteredProducts.length} handcrafted models</span>
            <span>Tax and bespoke fitting included</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-stone-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Visual Area */}
                <div className="relative aspect-[4/3] bg-ivory p-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.colors[0].image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider text-charcoal font-medium shadow-xs">
                    {item.category}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded text-[10px] font-mono text-olive shadow-xs">
                    {item.weight}
                  </div>
                </div>

                {/* Details Area */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-baseline justify-between mb-1.5">
                      <h3 className="font-serif text-xl sm:text-2xl text-charcoal group-hover:text-forest transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-base font-serif font-medium text-charcoal">
                        ${item.price}
                      </span>
                    </div>

                    <p className="text-xs text-olive line-clamp-2 leading-relaxed mb-4">
                      {item.tagline}
                    </p>

                    {/* Color Swatch Dots */}
                    <div className="flex items-center space-x-2 mb-6">
                      {item.colors.map((c) => (
                        <span
                          key={c.name}
                          title={c.name}
                          className="w-3.5 h-3.5 rounded-full border border-black/10 inline-block shadow-xs"
                          style={{ backgroundColor: c.hex }}
                        />
                      ))}
                      <span className="text-[10px] text-olive font-light ml-1">
                        {item.colors.length} colorways
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-2 border-t border-stone-border/80">
                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="w-full py-2.5 rounded-full text-xs uppercase tracking-wider font-medium bg-forest text-ivory hover:bg-forest-dark transition-all duration-200 active:scale-[0.98] shadow-xs"
                    >
                      View Frame Details
                    </button>
                    <button
                      onClick={() => onOpenAppointment(`Eyewear Fitting - ${item.name}`)}
                      className="w-full py-2 rounded-full text-[11px] uppercase tracking-wider font-medium text-charcoal hover:text-forest hover:bg-stone-soft transition-colors"
                    >
                      Try On in Studio
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center bg-white rounded-2xl border border-stone-border p-8">
              <p className="font-serif text-2xl text-charcoal">No frames found in this category.</p>
              <button
                onClick={() => setActiveCategory('All')}
                className="mt-4 text-xs uppercase tracking-wider text-forest font-semibold underline"
              >
                Reset to All Frames
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          THE BESPOKE FITTING EXPERIENCE SECTION
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-ivory border-t border-stone-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] uppercase tracking-[0.22em] text-forest font-semibold block">
                The Fitting Ritual
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-charcoal font-normal leading-editorial">
                Crafted to fit your face, <span className="italic text-forest">not just the chart.</span>
              </h2>
              <p className="text-sm sm:text-base text-olive font-light leading-relaxed">
                A truly exceptional pair of glasses does not slip down your nose or pinch behind your ears. During your optical consultation, our licensed dispensing specialists take precise measurements to ensure seamless visual mechanics.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-sage/20 text-forest flex items-center justify-center shrink-0 mt-0.5">
                    <Ruler className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-charcoal font-medium">
                      Sub-Millimeter Pupillometry
                    </h4>
                    <p className="text-xs text-olive leading-relaxed font-light">
                      We calibrate your optical centers to your unique interpupillary distance and pantoscopic tilt.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-sage/20 text-forest flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-charcoal font-medium">
                      Weight & Pressure Balance
                    </h4>
                    <p className="text-xs text-olive leading-relaxed font-light">
                      Temples and nose bridges are hand-formed with micro-heaters for pressure-free all-day wear.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenAppointment('Prescription Eyewear Consultation')}
                  className="inline-flex items-center px-7 py-3.5 rounded-full text-xs uppercase tracking-widest font-medium bg-forest text-ivory hover:bg-forest-dark transition-all shadow-sm"
                >
                  <span>Book Frame Styling Consultation</span>
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-stone-border">
                <img
                  src="https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1200&q=80"
                  alt="Precision optical frame adjustment in Vision House studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        allProducts={filteredProducts}
        onClose={() => setSelectedProduct(null)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onRequestFitting={(p) => onOpenAppointment(`Eyewear Fitting - ${p.name}`)}
      />
    </div>
  );
};
