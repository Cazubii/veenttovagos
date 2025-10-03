'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
  Instagram,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { type ImagePlaceholder } from '@/lib/placeholder-images';
import imageData from '@/lib/placeholder-images.json';
import { VeenttoLogo } from '@/components/veentto-logo';

const { placeholderImages: PlaceHolderImages } = imageData;

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
  image,
  children,
}: {
  title: string;
  price?: string;
  range?: string;
  speed?: string;
  image?: ImagePlaceholder;
  children?: React.ReactNode;
}) => (
  <motion.div
    variants={fadeUp}
    className="group bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg flex flex-col"
  >
    <div className="relative aspect-[4/3] bg-gradient-to-b from-zinc-800 to-zinc-900 flex items-center justify-center">
      {image ? (
        <Image 
          src={image.imageUrl}
          alt={image.description}
          fill
          className="object-contain group-hover:scale-105 transition-transform"
          data-ai-hint={image.imageHint}
        />
      ) : (
        <Bike
          className="w-20 h-20 text-zinc-600 group-hover:text-zinc-400 transition-colors"
          aria-hidden
        />
      )}
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
          <MessageSquare className="w-4 h-4" /> <span style={{color: '#25D366'}}>WhatsApp</span>
        </a>
      </div>
    </div>
  </motion.div>
);

const PowerOptions = () => {
  const options = [
    { id: '48V-15Ah-P', voltage: '48V', ah: '15Ah', price: '990,00 €', range: 'Aprox: 40 km' },
    { id: '48V-20Ah-P', voltage: '48V', ah: '20Ah', price: '1.290,00 €', range: 'Aprox: 50 km' },
    { id: '48V-24Ah-P', voltage: '48V', ah: '24Ah', price: '1.420,00 €', range: 'Aprox: 60 km' },
    { id: '48V-30Ah-P', voltage: '48V', ah: '30Ah', price: '1.560,00 €', range: 'Aprox: 70 km' },
    { id: '60V-20Ah-P', voltage: '60V', ah: '20Ah', price: '1.390,00 €', range: 'Aprox: 50 km' },
    { id: '60V-24Ah-P', voltage: '60V', ah: '24Ah', price: '1.520,00 €', range: 'Aprox: 65 km' },
    { id: '60V-30Ah-P', voltage: '60V', ah: '30Ah', price: '1.650,00 €', range: 'Aprox: 80 km' },
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
            <SelectGroup>
              <SelectLabel>Modelos 48V</SelectLabel>
              {options.filter(o => o.voltage === '48V').map(option => (
                <SelectItem key={option.id} value={option.id} className="focus:bg-zinc-800">
                  {option.voltage} {option.ah} ({option.range})
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Modelos 60V</SelectLabel>
              {options.filter(o => o.voltage === '60V').map(option => (
                <SelectItem key={option.id} value={option.id} className="focus:bg-zinc-800">
                  {option.voltage} {option.ah} ({option.range})
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};


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
            <SelectGroup>
              <SelectLabel>Modelos 48V</SelectLabel>
              {options.filter(o => o.voltage === '48V').map(option => (
                <SelectItem key={option.id} value={option.id} className="focus:bg-zinc-800">
                  {option.voltage} {option.ah} ({option.range})
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Modelos 60V</SelectLabel>
              {options.filter(o => o.voltage === '60V').map(option => (
                <SelectItem key={option.id} value={option.id} className="focus:bg-zinc-800">
                  {option.voltage} {option.ah} ({option.range})
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

const TricicloOptions = () => {
  const options = [
    { id: 'tri-48V-20Ah', voltage: '48V', ah: '20Ah', price: '1.690,00 €', range: 'Aprox: 40 km' },
    { id: 'tri-48V-24Ah', voltage: '48V', ah: '24Ah', price: '1.840,00 €', range: 'Aprox: 50 km' },
    { id: 'tri-48V-30Ah', voltage: '48V', ah: '30Ah', price: '1.990,00 €', range: 'Aprox: 70 km' },
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
            <SelectGroup>
              <SelectLabel>Modelos 48V</SelectLabel>
              {options.filter(o => o.voltage === '48V').map(option => (
                <SelectItem key={option.id} value={option.id} className="focus:bg-zinc-800">
                  {option.voltage} {option.ah} ({option.range})
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

const NiceOptions = () => {
  const options = [
    { id: 'nice-48V-15Ah', voltage: '48V', ah: '15Ah', price: '1.250,00 €', range: 'Aprox: 35 km' },
    { id: 'nice-48V-20Ah', voltage: '48V', ah: '20Ah', price: '1.490,00 €', range: 'Aprox: 35 km' },
    { id: 'nice-48V-24Ah', voltage: '48V', ah: '24Ah', price: '1.620,00 €', range: 'Aprox: 50 km' },
    { id: 'nice-48V-30Ah', voltage: '48V', ah: '30Ah', price: '1.750,00 €', range: 'Aprox: 65 km' },
    { id: 'nice-60V-20Ah', voltage: '60V', ah: '20Ah', price: '1.490,00 €', range: 'Aprox: 50 km' },
    { id: 'nice-60V-24Ah', voltage: '60V', ah: '24Ah', price: '1.620,00 €', range: 'Aprox: 60 km' },
    { id: 'nice-60V-30Ah', voltage: '60V', ah: '30Ah', price: '1.750,00 €', range: 'Aprox: 70 km' },
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
            <SelectGroup>
              <SelectLabel>Modelos 48V</SelectLabel>
              {options.filter(o => o.voltage === '48V').map(option => (
                <SelectItem key={option.id} value={option.id} className="focus:bg-zinc-800">
                  {option.voltage} {option.ah} ({option.range})
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Modelos 60V</SelectLabel>
              {options.filter(o => o.voltage === '60V').map(option => (
                <SelectItem key={option.id} value={option.id} className="focus:bg-zinc-800">
                  {option.voltage} {option.ah} ({option.range})
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default function OnePageVelocipedes() {
  const scooterPowerImage = PlaceHolderImages.find(img => img.id === 'scooter-power');
  const scooterBrizaImage = PlaceHolderImages.find(img => img.id === 'scooter-briza');
  const scooterNiceImage = PlaceHolderImages.find(img => img.id === 'scooter-nice');
  const tricicloImage = PlaceHolderImages.find(img => img.id === 'triciclo');
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero');

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black text-zinc-200">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <VeenttoLogo className="w-24 h-auto text-zinc-100" />
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
              <Phone className="w-4 h-4" /> <span style={{color: '#25D366'}}>WhatsApp</span>
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
                Falar no <span style={{color: '#25D366'}}>WhatsApp</span> <MessageSquare className="w-4 h-4" />
              </a>
            </div>
            <div className="flex items-center gap-6 pt-2 text-zinc-400 text-sm">
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4" /> Zero emissões
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" /> Garantia até 24 meses
              </div>
              <div className="flex items-center gap-2">
                <Battery className="w-4 h-4" /> Autonomia entre 30 e 80 km
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
              {heroImage ? (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-contain"
                  data-ai-hint={heroImage.imageHint}
                />
              ) : (
                <Bike className="w-40 h-40 text-zinc-600" aria-hidden />
              )}
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
            <ProductCard title="Scooter Power" image={scooterPowerImage}>
              <PowerOptions />
            </ProductCard>
            <ProductCard title="Scooter Briza" image={scooterBrizaImage}>
              <BrizaOptions />
            </ProductCard>
            <ProductCard title="Scooter Nice" image={scooterNiceImage}>
              <NiceOptions />
            </ProductCard>
            <ProductCard title="Triciclo" image={tricicloImage}>
              <TricicloOptions />
            </ProductCard>
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
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">
              O que dizem os nossos clientes
            </h2>
            <p className="text-zinc-400 mt-2">Avaliações reais de clientes satisfeitos.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'João Silva',
                quote: 'Perfeito para ir ao trabalho. Económico e muito prático para o dia a dia na cidade. Recomendo!',
                date: '2 semanas atrás',
              },
              {
                name: 'Maria Fernandes',
                quote: 'Mobilidade sem complicações! A bateria dura bastante e o design é muito moderno.',
                date: '1 mês atrás',
              },
              {
                name: 'António Costa',
                quote: 'Economizei muito em transportes. O atendimento foi excelente e tiraram todas as minhas dúvidas.',
                date: '3 semanas atrás',
              },
            ].map((testimonial, i) => (
              <figure
                key={i}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex-shrink-0" />
                  <div className="flex-grow">
                    <figcaption className="font-semibold text-zinc-100">
                      {testimonial.name}
                    </figcaption>
                    <p className="text-xs text-zinc-400">{testimonial.date}</p>
                  </div>
                   <div className="flex-shrink-0">
                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path><path d="M1 1h22v22H1z" fill="none"></path></svg>
                   </div>
                </div>
                <div className="mt-3 flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 text-zinc-300 leading-relaxed text-sm flex-grow">
                 <p>&ldquo;{testimonial.quote}&rdquo;</p>
                </blockquote>
              </figure>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/search?q=Veentto+-+Vagos&stick=H4sIAAAAAAAA_-NgU1IxqEgxMk5Kski1sDCwTDYzT7IyqDAzMTM3NE6zME1MtjQ3NjdbxMoflpqaV1KSr6CrEJaYnl8MANabo_Q6AAAA&hl=pt-BR&mat=CaIzzB7AoUgyElcBYJahaTOCBWSVAIli1y6aeDXb4D95BeUQ4q_2JNC3ogAImNjWHo8-NYctBAwBHgRsRZCjStt8HiEAqc6lYNRSxdPEHWGsooT0-zPzM4HEoW-RdHxNo2s&authuser=3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 hover:bg-zinc-800"
            >
              Ver todas as avaliações no Google
            </a>
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
                a: 'Entre 30 e 80 km conforme o modelo, peso e condições de uso.',
              },
              {
                q: 'Como é feita a compra a prestações?',
                a: 'Utilizamos o TPA da REDUNIQ que permite pagamento em até 6x exclusivo para quem possui cartão B.I.',
              },
              {
                q: 'Há garantia?',
                a: 'Sim, 24 meses de garantia no veículo e 1 ano na bateria contra defeitos de fabrico.',
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
            prestações. Resposta rápida no <span style={{color: '#25D366'}}>WhatsApp</span>.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/351928272818"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 text-zinc-900 px-6 py-3 text-lg hover:bg-white"
            >
              <MessageSquare className="w-5 h-5" /> Falar no <span style={{color: '#25D366'}}>WhatsApp</span>
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
        <Section className="py-12" id={''} >
          <div className="grid md:grid-cols-4 gap-8 text-sm">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <VeenttoLogo className="w-24 h-auto text-zinc-100" />
              </div>
              <p className="text-zinc-400">
                Mobilidade inteligente, sustentável e sem carta de condução.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-100 mb-3">Contactos</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <span style={{color: '#25D366'}}>WhatsApp</span>:{' '}
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
              <h4 className="font-semibold text-zinc-100 mb-3">Redes Sociais</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <a
                    className="flex items-center gap-2 hover:text-zinc-200"
                    href="https://www.instagram.com/veenttovagos"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                </li>
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
    