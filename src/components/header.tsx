import Link from 'next/link';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { ShoppingBag } from 'lucide-react';

export function Header() {
  const navLinks = [
    { href: '#products', label: 'Produtos' },
    { href: '#about', label: 'Sobre' },
    { href: '#testimonials', label: 'Depoimentos' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-headline text-2xl font-bold tracking-wide text-primary">
              veentto
            </span>
          </Link>
        </div>
        <nav className="flex-1 items-center space-x-6 text-sm font-medium hidden md:flex justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-6 w-6" />
            <span className="sr-only">Carrinho</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
