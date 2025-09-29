'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Phone,
  Leaf,
  Battery,
  Shield,
  Bike,
  Star,
  Sparkles,
  ChevronRight,
  MessageSquare,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Section = ({
  id,
  children,
  className = '',
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`max-w-6xl mx-auto px-4 sm:px-6 ${className}`}>
    {children}
  </section>
);

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
  >
    {children}
  </a>
);

const ProductCard = ({
  title,
  price,
  range,
  speed,
  imgAlt = 'Moto elétrica',
  children,
}: {
  title: string;
  price?: string;
  range?: string;
  speed?: string;
  imgAlt?: string;
  children?: React.ReactNode;
}) => (
  <motion.div
    variants={fadeUp}
    className="group bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg flex flex-col"
  >
    <div className="aspect-[16/9] bg-gradient-to-b from-zinc-800 to-zinc-900 flex items-center justify-center">
      <Bike
        className="w-20 h-20 text-zinc-600 group-hover:text-zinc-400 transition-colors"
        aria-hidden
      />
      <span className="sr-only">{imgAlt}</span>
    </div>
    <div className="p-6 space-y-3 flex-grow flex flex-col">
      <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
      
      {children ? (
        <div className="flex-grow">{children}</div>
      ) : (
        <>
          {price && <p className="text-3xl font-bold text-zinc-50">{price}</p>}
          <div className="flex gap-4 text-zinc-400 text-sm flex-grow">
            {range && (
              <span className="flex items-center gap-2">
                <Battery className="w-4 h-4" /> {range}
              </span>
            )}
            {speed && (
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> {speed}
              </span>
            )}
          </div>
        </>
      )}
      <div className="pt-3 flex gap-3 mt-auto">
        <a
          href="#comprar"
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2 text-zinc-200 hover:bg-zinc-800"
        >
          <ShoppingCart className="w-4 h-4" /> Comprar
        </a>
        <a
          href="https://wa.me/351928272818"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 text-zinc-900 px-4 py-2 hover:bg-white"
        >
          <MessageSquare className="w-4 h-4" /> WhatsApp
        </a>
      </div>
    </div>
  </motion.div>
);

const BrizaOptions = () => {
  const options = [
    { id: '48V-15Ah', voltage: '48V', ah: '15Ah', price: '1.210,00 €', range: 'Aprox: 30 km' },
    { id: '48V-20Ah', voltage: '48V', ah: '20Ah', price: '1.450,00 €', range: 'Aprox: 35 km' },
    { id: '48V-24Ah', voltage: '48V', ah: '24Ah', price: '1.570,00 €', range: 'Aprox: 50 km' },
    { id: '48V-30Ah', voltage: '48V', ah: '30Ah', price: '1.690,00 €', range: 'Aprox: 65 km' },
    { id: '60V-20Ah', voltage: '60V', ah: '20Ah', price: '1.450,00 €', range: 'Aprox: 50 km' },
    { id: '60V-24Ah', voltage: '60V', ah: '24Ah', price: '1.650,00 €', range: 'Aprox: 60 km' },
    { id: '60V-30Ah', voltage: '60V', ah: '30Ah', price: '1.850,00 €', range: 'Aprox: 70 km' },
  ];
  
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (value: string) => {
    const option = options.find(o => o.id === value);
    if (option) {
      setSelectedOption(option);
    }
  };

  return (
    <div className="space-y-4">
       <p className="text-3xl font-bold text-zinc-50">{selectedOption.price}</p>
       <div className="flex gap-4 text-zinc-400 text-sm">
          <span className="flex items-center gap-2">
            <Battery className="w-4 h-4" /> {selectedOption.range}
          </span>
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Até 25 km/h
          </span>
        </div>
      <div>
        <label className="text-xs text-zinc-400">Opções de bateria</label>
        <Select onValueChange={handleSelect} defaultValue={selectedOption.id}>
          <SelectTrigger className="w-full bg-zinc-800 border-zinc-700 text-zinc-200">
            <SelectValue placeholder="Selecione uma opção" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-200">
            <optgroup label="Modelos 48V">
              {options.filter(o => o.voltage === '48V').map(option => (
                <SelectItem key={option.id} value={option.id} className="focus:bg-zinc-800">
                  {option.voltage} {option.ah} ({option.range})
                </SelectItem>
              ))}
            </optgroup>
            <optgroup label="Modelos 60V">
              {options.filter(o => o.voltage === '60V').map(option => (
                <SelectItem key={option.id} value={option.id} className="focus:bg-zinc-800">
                  {option.voltage} {option.ah} ({option.range})
                </SelectItem>
              ))}
            </optgroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default function OnePageVelocipedes() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black text-zinc-200">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-zinc-100 text-zinc-900 grid place-items-center font-bold">
              VV
            </div>
            <span className="text-sm md:text-base font-semibold tracking-wide text-zinc-100">
              Veentto Vagos
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#produtos">Produtos</NavLink>
            <NavLink href="#beneficios">Benefícios</NavLink>
            <NavLink href="#testemunhos">Testemunhos</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#contato">Contacto</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#comprar"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-zinc-100 text-zinc-900 px-4 py-2 hover:bg-white"
            >
              <ShoppingCart className="w-4 h-4" /> Comprar
            </a>
            <a
              href="https://wa.me/351928272818"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-3 py-2 hover:bg-zinc-800"
            >
              <Phone className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      <Section id="home" className="pt-14 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400">
              <Sparkles className="w-4 h-4" /> Nova mobilidade
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-zinc-50">
              Mobilidade elétrica{' '}
              <span className="text-zinc-300">sem carta</span> de condução
            </h1>
            <p className="text-lg text-zinc-400 max-w-prose">
              Descubra a liberdade dos nossos veículos elétricos: práticos,
              económicos e sustentáveis — ideais para a cidade.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#produtos"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 text-zinc-900 px-5 py-3 hover:bg-white"
              >
                Ver modelos <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/351928272818"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 hover:bg-zinc-800"
              >
                Falar no WhatsApp <MessageSquare className="w-4 h-4" />
              </a>
            </div>
            <div className="flex items-center gap-6 pt-2 text-zinc-400 text-sm">
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4" /> Zero emissões
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" /> Garantia 12 meses
              </div>
              <div className="flex items-center gap-2">
                <Battery className="w-4 h-4" /> Autonomia até 70 km*
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-2xl border border-zinc-800 grid place-items-center">
              <Bike className="w-40 h-40 text-zinc-600" aria-hidden />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-xs text-zinc-400">
                *Autonomia variável conforme uso.
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="produtos" className="py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-end justify-between">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">
              Modelos em destaque
            </h2>
            <a
              href="#comprar"
              className="hidden md:inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
            >
              Comprar agora <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            <ProductCard
              title="Scooter Power"
              price="990,00 €"
              range="30 km"
              speed="Até 25 km/h"
            />
            <ProductCard title="Scooter Briza">
              <BrizaOptions />
            </ProductCard>
            <ProductCard
              title="Scooter Nice"
              price="1.250,00 €"
              range="30 km"
              speed="Até 25 km/h"
            />
            <ProductCard
              title="Triciclo"
              price="1.690,00 €"
              range="40 km"
              speed="Até 25 km/h"
            />
            <ProductCard
              title="Quaciclo Guido"
              price="2.890,00 €"
              range="50 km"
              speed="Até 25 km/h"
            />
          </div>
        </motion.div>
      </Section>

      <Section id="beneficios" className="py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: <Leaf className="w-5 h-5" />,
              title: 'Sustentável',
              desc: 'Zero emissões, ruído reduzido e manutenção simples.',
            },
            {
              icon: <Shield className="w-5 h-5" />,
              title: 'Sem carta',
              desc: 'Velocidade limitada a 25 km/h, uso simples e legal.',
            },
            {
              icon: <Battery className="w-5 h-5" />,
              title: 'Autonomia real',
              desc: 'Baterias eficientes para deslocações diárias na cidade.',
            },
          ].map((b, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <div className="flex items-center gap-3 text-zinc-100 font-semibold">
                <span className="p-2 rounded-xl bg-zinc-800">{b.icon}</span>
                {b.title}
              </div>
              <p className="mt-3 text-zinc-400">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section id="testemunhos" className="py-16">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">
            O que dizem os nossos clientes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Perfeito para ir ao trabalho.',
              'Mobilidade sem complicações!',
              'Economizei muito em transportes.',
            ].map((quote, i) => (
              <figure
                key={i}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-800" />
                  <figcaption className="text-sm text-zinc-300">
                    Cliente {i + 1}
                  </figcaption>
                </div>
                <blockquote className="mt-4 text-zinc-200 leading-relaxed">
                  “{quote}”
                </blockquote>
                <div className="mt-3 flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 fill-zinc-100 text-zinc-100"
                    />
                  ))}
                </div>
              </figure>
            ))}
          </div>
        </div>
      </Section>

      <Section id="faq" className="py-16">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">
            Perguntas frequentes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: 'Preciso de carta de condução?',
                a: 'Não. Nossos veículos estão limitados a 25 km/h, enquadrando-se nas regras que dispensam carta para uso em via pública (consulte a legislação local).',
              },
              {
                q: 'Qual a autonomia?',
                a: 'Entre 50 e 80 km conforme o modelo, peso e condições de uso.',
              },
              {
                q: 'Como é feita a compra a prestações?',
                a: 'Disponibilizamos opções a crédito/parcerias. Fale connosco no WhatsApp para simulação imediata.',
              },
              {
                q: 'Há garantia?',
                a: 'Sim, 12 meses de garantia contra defeitos de fabrico.',
              },
            ].map((item, i) => (
              <details
                key={i}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 open:bg-zinc-900"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between text-zinc-100 font-semibold">
                  <span>{item.q}</span>
                </summary>
                <p className="mt-3 text-zinc-400">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section id="comprar" className="py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 md:p-12 text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">
            Pronto para experimentar?
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Marque um test drive gratuito ou fale já connosco para simulação a
            prestações. Resposta rápida no WhatsApp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/351928272818"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 text-zinc-900 px-6 py-3 text-lg hover:bg-white"
            >
              <MessageSquare className="w-5 h-5" /> Falar no WhatsApp
            </a>
            <a
              href="#produtos"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 text-lg hover:bg-zinc-800"
            >
              <ShoppingCart className="w-5 h-5" /> Ver modelos
            </a>
          </div>
        </motion.div>
      </Section>

      <footer id="contato" className="border-t border-zinc-800 mt-16">
        <Section className="py-12">
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-900 grid place-items-center font-bold">
                  VV
                </div>
                <span className="font-semibold text-zinc-100">
                  Veentto Vagos
                </span>
              </div>
              <p className="text-zinc-400">
                Mobilidade inteligente, sustentável e sem carta de condução.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-100 mb-3">Contactos</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  WhatsApp:{' '}
                  <a
                    className="underline hover:text-zinc-200"
                    href="https://wa.me/351928272818"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +351 928 272 818
                  </a>
                </li>
                <li>
                  Email:{' '}
                  <a
                    className="underline hover:text-zinc-200"
                    href="mailto:vagos@veentto.com"
                  >
                    vagos@veentto.com
                  </a>
                </li>
                <li>Loja: Rua Dom Antonio dos Santos, 109B - Quintã, Vagos</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-100 mb-3">Links</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <a href="#produtos" className="hover:text-zinc-200">
                    Produtos
                  </a>
                </li>
                <li>
                  <a href="#beneficios" className="hover:text-zinc-200">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-zinc-200">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-zinc-800 text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>
              © {new Date().getFullYear()} Veentto Vagos — Todos os
              direitos reservados.
            </p>
            <p>Design em escala de cinza · Feito com ❤</p>
          </div>
        </Section>
      </footer>
    </div>
  );
}
