import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type ProductCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  price: string;
};

export function ProductCard({
  title,
  description,
  imageUrl,
  imageHint,
  price,
}: ProductCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 duration-300 border-0 text-center">
      <CardHeader className="p-0">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={imageUrl}
            alt={description}
            fill
            className="object-cover"
            data-ai-hint={imageHint}
          />
        </div>
      </CardHeader>
      <div className="flex flex-1 flex-col p-6 items-center">
        <CardTitle className="font-headline text-2xl">{title}</CardTitle>
        <p className="mt-2 font-bold text-lg">{price}</p>
        <CardFooter className="mt-4 p-0">
          <Button className="w-full">Comprar</Button>
        </CardFooter>
      </div>
    </Card>
  );
}
