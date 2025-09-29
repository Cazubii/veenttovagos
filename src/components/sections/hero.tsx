import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-card">
      <div className="container relative z-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center md:min-h-[80vh]">
          <h1 className="font-headline text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">
            Realce sua Beleza,
            <br />
            <span className="text-primary">Abrace o Amor-Próprio</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Descubra produtos que não apenas realçam sua beleza exterior, mas também nutrem sua confiança interior. Bem-vinda à Veentto.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#products">Ver Produtos</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#about">Saiba Mais</Link>
            </Button>
          </div>
        </div>
      </div>
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: 'radial-gradient(circle at center, hsl(var(--primary) / 0.1), transparent 60%)',
        }}
      />
    </section>
  );
}
