import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section className="relative w-full overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div className="relative z-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 text-center md:text-left">
          <div className="py-12 md:py-24">
            <h1 className="font-headline text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              Cabelo & Corpo
              <br />
              <span className="text-primary">Perfumados</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl mx-auto md:mx-0">
              Conheça nossas linhas de Body Splash e Hair Mist e se apaixone por
              fragrâncias que te acompanham o dia todo.
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <Button size="lg" asChild>
                <Link href="#products">Ver Produtos</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative h-96 md:h-full min-h-[60vh] animate-in fade-in duration-1000">
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
        </div>
      </div>
    </section>
  );
}
