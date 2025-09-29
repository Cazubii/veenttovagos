import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section
      className="relative w-full py-20 md:py-32 bg-primary text-primary-foreground"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(0,0,0,0.8) 25px, rgba(0,0,0,0.8) 50px, transparent 50px, transparent 75px, rgba(0,0,0,0.8) 75px), repeating-linear-gradient(-45deg, rgba(0,0,0,0.8) 25px, rgba(0,0,0,0.8) 50px, transparent 50px, transparent 75px, rgba(0,0,0,0.8) 75px)",
        backgroundSize: '100px 100px',
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
          Alerta!
        </h1>
        <p className="mt-2 text-4xl md:text-6xl font-bold text-white uppercase">
          Seguro Obrigatório
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-4"
          >
            Consulte seu agente de seguros
          </Button>
        </div>
      </div>
    </section>
  );
}
