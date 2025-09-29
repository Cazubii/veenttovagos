import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-4 text-white">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-shadow-lg">
          O Futuro é Elétrico
        </h1>
        <p className="mt-4 text-xl md:text-2xl max-w-2xl mx-auto font-light">
          Descubra a liberdade de pilotar com zero emissões. Performance,
          design e tecnologia em duas rodas.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 rounded-full"
          >
            Ver Modelos
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-4 rounded-full border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Agende um Test-Ride
          </Button>
        </div>
      </div>
    </section>
  );
}
