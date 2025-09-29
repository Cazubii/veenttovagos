'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Quais são as formas de pagamento?',
    answer:
      'Aceitamos cartões de crédito, débito e PIX. Tudo para facilitar a sua compra!',
  },
  {
    question: 'Como funcionam as trocas e devoluções?',
    answer:
      'Você tem até 7 dias para se arrepender da sua compra. Para trocas, entre em contato com nosso SAC para mais informações sobre o procedimento.',
  },
  {
    question: 'Os produtos são testados em animais?',
    answer:
      'Não! A Veentto é uma marca cruelty-free. Amamos os animais e não realizamos testes neles.',
  },
  {
    question: 'Como posso acompanhar meu pedido?',
    answer:
      'Assim que o seu pedido for despachado, você receberá um código de rastreio por e-mail para acompanhar a entrega.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              Dúvidas Frequentes
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tudo o que você precisa saber sobre a Veentto.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-bold text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
