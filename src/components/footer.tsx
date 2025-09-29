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
            <h3 className="font-bold text-lg mb-4">Apoio ao Cliente</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Contactos</Link>
              </li>
              <li>
                <Link href="#">Perguntas Frequentes (FAQ)</Link>
              </li>
              <li>
                <Link href="#">Envios e Entregas</Link>
              </li>
              <li>
                <Link href="#">Trocas e Devoluções</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Institucional</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Quem Somos</Link>
              </li>
              <li>
                <Link href="#">As Nossas Lojas</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Recrutamento</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Informações</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Termos e Condições</Link>
              </li>
              <li>
                <Link href="#">Política de Privacidade</Link>
              </li>
              <li>
                <Link href="#">Política de Cookies</Link>
              </li>
              <li>
                <Link href="#">Resolução de Litígios</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram />
              </Link>
              <Link href="#" aria-label="Youtube">
                <Youtube />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {currentYear} Veentto. Todos os direitos reservados.</p>
          <div className="flex items-center space-x-2">
            <VeenttoIcon className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
}
