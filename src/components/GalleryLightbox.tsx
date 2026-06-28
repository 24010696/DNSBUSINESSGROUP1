import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Props = {
  images: { src: string; alt: string }[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
};

export function GalleryLightbox({ images, initialIndex, isOpen, onClose }: Props) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => setCurrentIndex(initialIndex), [initialIndex]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, goToPrev, goToNext]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={onClose}>
      <button onClick={onClose} className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20">
        <X className="h-6 w-6" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); goToPrev(); }} className="absolute left-4 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); goToNext(); }} className="absolute right-4 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20">
        <ChevronRight className="h-6 w-6" />
      </button>
      <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="max-h-[85vh] max-w-[85vw] rounded-lg object-contain shadow-2xl"
        />
        <p className="mt-3 text-center text-sm text-white/80">
          {currentIndex + 1} / {images.length} — {images[currentIndex].alt}
        </p>
      </div>
    </div>
  );
}