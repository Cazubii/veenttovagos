'use client';

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonialsData = [
  {
    name: 'Juliana S.',
    quote:
      'Os produtos da Veentto transformaram minha rotina de autocuidado. Sinto minha pele mais radiante e minha confiança aumentou muito. É mais que maquiagem, é amor-próprio em um frasco!',
    image: PlaceHolderImages.find((img) => img.id === 'testimonial1'),
  },
  {
    name: 'Fernanda L.',
    quote:
      'Finalmente encontrei uma marca que celebra a beleza real. A qualidade é incrível e eu amo saber que estou usando produtos que são bons para minha pele e para o planeta. Recomendo de olhos fechados!',
    image: PlaceHolderImages.find((img) => img.id === 'testimonial2'),
  },
  {
    name: 'Carlos M.',
    quote:
      'Comprei de presente e foi um sucesso absoluto. A apresentação é impecável e a filosofia da marca é inspiradora. A Veentto ganhou um cliente fiel.',
    image: PlaceHolderImages.find((img) => img.id === 'testimonial3'),
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Histórias reais de confiança e beleza. Veja como a Veentto está fazendo a diferença.
            </p>
          </div>
        </div>
        <div className="py-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2 h-full">
                    <TestimonialCard
                      name={testimonial.name}
                      quote={testimonial.quote}
                      imageUrl={testimonial.image?.imageUrl}
                      imageHint={testimonial.image?.imageHint}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
