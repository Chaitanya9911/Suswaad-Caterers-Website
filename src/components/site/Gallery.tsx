import chef from "@/assets/chef-plating.jpg";
import wedding from "@/assets/wedding-table.jpg";
import buffet from "@/assets/buffet.jpg";
import desserts from "@/assets/desserts.jpg";

const images = [
  { src: wedding, alt: "Outdoor wedding catering table at sunset", className: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" },
  { src: chef, alt: "Chef plating gourmet appetizers", className: "aspect-square" },
  { src: desserts, alt: "Elegant dessert table with cakes and tarts", className: "aspect-square" },
  { src: buffet, alt: "Mediterranean buffet spread", className: "md:col-span-2 aspect-[2/1]" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Recent events</span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-medium tracking-tight">
              Moments worth <em className="italic text-primary">savouring</em>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">A glimpse into the events, plates and people we've had the joy of feeding.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
