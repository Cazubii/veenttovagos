import Link from 'next/link';
import { Button } from './ui/button';
import {
  Search,
  Heart,
  ShoppingCart,
  Menu,
} from 'lucide-react';
import { VeenttoIcon } from './veentto-icon';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Header() {
  const navLinks = [
    { href: '#', label: 'MOTOS' },
    { href: '#', label: 'ACESSÓRIOS' },
    { href: '#', label: 'SOBRE NÓS' },
    { href: '#', label: 'CONTATO' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <VeenttoIcon className="h-10" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-semibold text-foreground/60 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Search />
              <span className="sr-only">Pesquisar</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Heart />
              <span className="sr-only">Lista de Desejos</span>
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart />
              <span className="sr-only">Carrinho</span>
            </Button>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu />
                    <span className="sr-only">Abrir menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background text-foreground">
                  <nav className="flex flex-col space-y-4 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="font-semibold text-lg hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
