import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Gem, ShieldCheck } from 'lucide-react';

const values = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: 'Nossa Missão',
    description:
      'Celebrar a beleza e a individualidade de cada mulher, oferecendo produtos que realçam a sua essência.',
  },
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: 'Nossos Valores',
    description:
      'Qualidade, inovação e o compromisso em criar produtos que cuidam de você e do meio ambiente.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Nosso Compromisso',
    description:
      'Fórmulas eficazes, com ativos de alta performance, para garantir a sua satisfação e bem-estar.',
  },
];

export function About() {
  return (
    <section id="about" className="w-full bg-secondary py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              Nossa Essência
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nascemos do desejo de celebrar a beleza e a individualidade de cada
              mulher.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-3 lg:gap-12">
          {values.map((value) => (
            <Card
              key={value.title}
              className="h-full transform border-0 bg-transparent shadow-none transition-transform duration-300 hover:scale-105"
            >
              <CardHeader className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  {value.icon}
                </div>
                <CardTitle className="font-headline text-2xl">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
