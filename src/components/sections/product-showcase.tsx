import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardHeader,
} from '@/components/ui/card';

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
      title: 'Peças Mecânicas',
      id: 'product3',
    },
    {
      title: 'Peças Elétricas',
      id: 'product4',
    },
  ];

  const productImages = PlaceHolderImages.filter((img) =>
    products.map((p) => p.id).includes(img.id)
  );

  return (
    <section id="products" className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4">
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
                <Card className="overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 duration-300 border-0 text-center group">
                  <CardHeader className="p-0 relative h-64">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <h3 className="font-bold text-xl text-white">
                        {product.title}
                      </h3>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
