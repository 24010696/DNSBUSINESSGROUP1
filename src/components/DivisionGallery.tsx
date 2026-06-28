import { useState } from "react";
import { GalleryLightbox } from "./GalleryLightbox";

type Props = {
  images: { src: string; alt: string }[];
  title: string;
};

export function DivisionGallery({ images, title }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!images.length) return null;

  return (
    <>
      <section className="container-prose py-20 sm:py-28">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="text-sm text-muted-foreground">Click any image to view full size.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => { setLightboxIndex(idx); setLightboxOpen(true); }}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-soft transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)]"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={1280}
                height={960}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </button>
          ))}
        </div>
      </section>
      <GalleryLightbox
        images={images}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}