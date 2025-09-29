import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ProductCard } from '@/components/ui/product-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ProductShowcase() {
  const products = PlaceHolderImages.filter((img) => img.id.startsWith('product')).slice(0, 3);
  const productTitles = ['Body Splash', 'Hair Mist', 'Kit Veentto'];

  return (
    <section id="products" className="w-full bg-secondary py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              Nossos Queridinhos
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore nossa seleção de produtos mais amados, criados para realçar sua beleza natural e inspirar confiança.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-3 lg:gap-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-in fade-in-0 slide-in-from-bottom-12 duration-500"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
            >
              <ProductCard
                title={productTitles[index]}
                description="Uma breve descrição que destaca os benefícios e o apelo deste item popular."
                imageUrl={product.imageUrl}
                imageHint={product.imageHint}
                price="R$ 89,90"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button size="lg">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
}
