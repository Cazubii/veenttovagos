'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Wand2, Percent, BookOpen, FileText } from 'lucide-react';
import { handleSeoOptimization } from '@/app/actions';
import type { OptimizeSEOOutput } from '@/ai/flows/seo-optimization';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  productDescription: z.string().min(20, { message: 'A descrição deve ter pelo menos 20 caracteres.' }),
  keywords: z.string().min(3, { message: 'Por favor, insira pelo menos uma palavra-chave.' }),
});

export function SeoOptimizer() {
  const [result, setResult] = useState<OptimizeSEOOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productDescription: '',
      keywords: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setResult(null);

    const response = await handleSeoOptimization(values);

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      setError('Ocorreu um erro ao otimizar. Por favor, tente novamente.');
    }
    setIsLoading(false);
  }

  return (
    <section id="seo-optimizer" className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Wand2 className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Otimizador de SEO com IA
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Automatize a otimização de suas descrições de produtos. Insira o texto e as palavras-chave para receber sugestões de SEO aprimoradas por IA.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <Card>
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="productDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descrição do Produto</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Cole a descrição do seu produto aqui..." className="min-h-[150px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="keywords"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Palavras-chave</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: skincare, creme facial, beleza natural" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                    {isLoading ? 'Otimizando...' : 'Otimizar Agora'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {error && <p className="mt-4 text-center text-destructive">{error}</p>}

          {result && (
            <div className="mt-8 space-y-6 animate-in fade-in-0 duration-500">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><FileText className="text-primary"/>Descrição Otimizada</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{result.optimizedDescription}</p>
                </CardContent>
              </Card>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Percent className="text-primary"/>Densidade de Palavras-chave</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{result.keywordDensity}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BookOpen className="text-primary"/>Pontuação de Legibilidade</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{result.readabilityScore}</p>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><FileText className="text-primary"/>Meta Descrição Sugerida</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{result.metaDescription}</p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
