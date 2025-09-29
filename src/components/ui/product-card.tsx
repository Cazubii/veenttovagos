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
};

export function ProductCard({ title, description, imageUrl, imageHint }: ProductCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 duration-300">
      <CardHeader className="p-0">
        <div className="relative aspect-square w-full">
          <Image
            src={imageUrl}
            alt={description}
            fill
            className="object-cover"
            data-ai-hint={imageHint}
          />
        </div>
      </CardHeader>
      <div className="flex flex-1 flex-col p-6">
        <CardTitle className="font-headline text-2xl">{title}</CardTitle>
        <CardDescription className="mt-2 flex-1">{description}</CardDescription>
        <CardFooter className="mt-4 p-0">
          <Button className="w-full" variant="secondary">Saiba Mais</Button>
        </CardFooter>
      </div>
    </Card>
  );
}
