import { SITE } from "@/utils/site";

function buildMessage(productName?: string): string {
  if (productName) {
    return `Olá! Gostaria de pedir um ${productName}`;
  }

  return "Olá! Gostaria de fazer um pedido na Turco.";
}

/**
 * Monta a URL da API do WhatsApp (`wa.me`) com uma mensagem pronta.
 * Sem `productName`, envia um pedido genérico (CTA do header/hero).
 */
export function getWhatsAppUrl(productName?: string): string {
  const text = encodeURIComponent(buildMessage(productName));
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}
