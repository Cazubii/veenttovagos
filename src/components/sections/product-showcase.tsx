import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardHeader,
} from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '../ui/button';

export function ProductShowcase() {
  const products = [
    {
      title: 'Motos Elétricas',
      id: 'product1',
    },
    {
      title: 'Acessórios',
      id: 'product2',
    },
    {
      title: 'Peças',
      id: 'product3',
    },
    {
      title: 'Carregadores',
      id: 'product4',
    },
  ];

  const productImages = PlaceHolderImages.filter((img) =>
    products.map((p) => p.id).includes(img.id)
  );

  return (
    <section id="products" className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Nossas Categorias</h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore nossa seleção de produtos feitos para a sua jornada elétrica.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const image = productImages.find((img) => img.id === product.id);
            return (
              <div
                key={product.id}
                className="animate-in fade-in-0 slide-in-from-bottom-12 duration-500"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'backwards',
                }}
              >
                <Link href="#">
                  <Card className="overflow-hidden transition-all hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 duration-300 border-border text-center group bg-secondary rounded-lg">
                    <CardHeader className="p-0 relative aspect-[4/3]">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-0 p-4 w-full">
                        <h3 className="font-bold text-xl text-white">
                          {product.title}
                        </h3>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Ver todos os produtos
          </Button>
        </div>
      </div>
    </section>
  );
}
