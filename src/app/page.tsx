import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { ProductShowcase } from '@/components/sections/product-showcase';
import { Testimonials } from '@/components/sections/testimonials';
import { SeoOptimizer } from '@/components/sections/seo-optimizer';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <ProductShowcase />
        <Testimonials />
        <SeoOptimizer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
