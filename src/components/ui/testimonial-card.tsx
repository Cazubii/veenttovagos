import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';

type TestimonialCardProps = {
  name: string;
  quote: string;
  imageUrl?: string;
  imageHint?: string;
};

export function TestimonialCard({ name, quote, imageUrl, imageHint }: TestimonialCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between bg-card text-center">
      <CardHeader>
        <div className="flex justify-center text-primary">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <blockquote className="text-lg italic text-foreground">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </CardContent>
      <CardFooter className="mt-4 flex flex-col items-center gap-2">
        <Avatar>
          {imageUrl && <AvatarImage src={imageUrl} alt={name} data-ai-hint={imageHint} />}
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="font-bold">{name}</div>
      </CardFooter>
    </Card>
  );
}
