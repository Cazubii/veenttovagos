
'use server';

import { z } from 'zod';
import { optimizeSEO, type OptimizeSEOInput } from '@/ai/flows/seo-optimization';

const seoSchema = z.object({
  productDescription: z.string().min(10, { message: 'A descrição do produto deve ter pelo menos 10 caracteres.' }),
  keywords: z.string().min(3, { message: 'As palavras-chave são obrigatórias.' }),
});

export async function handleSeoOptimization(data: OptimizeSEOInput) {
  const validation = seoSchema.safeParse(data);

  if (!validation.success) {
    return {
      success: false,
      error: validation.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await optimizeSEO(validation.data);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error optimizing SEO:', error);
    return { success: false, error: { _errors: ['Falha ao otimizar o SEO. Por favor, tente novamente.'] } };
  }
}

const contactSchema = z.object({
  name: z.string().min(2, { message: 'O nome é obrigatório.' }),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' }),
});

export async function handleContactSubmission(data: unknown) {
  const validation = contactSchema.safeParse(data);

  if (!validation.success) {
    return {
      success: false,
      error: validation.error.flatten().fieldErrors,
    };
  }
  
  // In a real application, you would process the data here (e.g., send an email, save to a database).
  console.log('Contact form submitted:', validation.data);

  return { success: true, message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' };
}
