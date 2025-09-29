import Link from 'next/link';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const navLinks = [
    { href: '#products', label: 'Produtos' },
    { href: '#about', label: 'Sobre Nós' },
    { href: '#testimonials', label: 'Depoimentos' },
    { href: '#seo-optimizer', label: 'Otimizador' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-headline text-xl font-bold tracking-wide text-primary">
              Veentto
            </span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
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
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild>
            <Link href="#contact">Fale Conosco</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
