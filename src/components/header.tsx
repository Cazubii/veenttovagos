import Link from 'next/link';
import { Button } from './ui/button';
import {
  Search,
  Heart,
  ShoppingCart,
  Menu,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';
import { VeenttoIcon } from './veentto-icon';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Header() {
  const navLinks = [
    { href: '#', label: 'HOME' },
    { href: '#', label: 'LOJA ONLINE' },
    { href: '#', label: 'QUEM SOMOS' },
    { href: '#', label: 'LOJAS' },
    { href: '#', label: 'CONTACTOS' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2 text-xs">
          <div>
            <span>DÚVIDAS? LIGUE: 214 950 288</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-primary">
              NEWSLETTER
            </Link>
            <Link href="#" className="hover:text-primary">
              INFORMAÇÕES
            </Link>
            <div className="flex items-center space-x-2">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" aria-label="Youtube">
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <hr className="border-gray-700" />
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <VeenttoIcon className="h-10" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-semibold hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
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
              <span className="ml-2 text-sm">0,00 €</span>
            </Button>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu />
                    <span className="sr-only">Abrir menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-secondary text-secondary-foreground">
                  <nav className="flex flex-col space-y-4 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="font-semibold hover:text-primary transition-colors"
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
