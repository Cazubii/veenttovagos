import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { VeenttoIcon } from './veentto-icon';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Loja</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="#" className="hover:text-primary">Motos Elétricas</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">Acessórios</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">Peças</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">Agende um Test-Ride</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="#" className="hover:text-primary">Contato</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">Perguntas Frequentes</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">Envios e Entregas</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">Garantia</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="#" className="hover:text-primary">Sobre Nós</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">Blog</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">Imprensa</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">Carreiras</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-foreground/60 hover:text-primary">
                <Facebook />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-foreground/60 hover:text-primary">
                <Instagram />
              </Link>
              <Link href="#" aria-label="Youtube" className="text-foreground/60 hover:text-primary">
                <Youtube />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-foreground/60 hover:text-primary">
                <Twitter />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p>© {currentYear} Veentto. Todos os direitos reservados.</p>
          <div className="flex items-center space-x-2">
            <VeenttoIcon className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
}
