export const siteConfig = {
  name: "Aliia Tech",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.aliiatech.com",
  description:
    "Socios estratégicos en transformación digital. Expertos en Sistemas ERP, Logística SUNAT, IA, Ciberseguridad y Marketing Digital en Lima, Perú.",
  phone: "+51969980152",
  phoneDisplay: "+51 969 980 152",
  email: "info@aliiatech.com",
  address: "Alameda Costa Norte 539, Lima, Perú",
  whatsappDefaultMessage: "Hola, vengo de su sitio web y estoy interesado en sus servicios.",
};

export function whatsappUrl(message: string = siteConfig.whatsappDefaultMessage) {
  return `https://wa.me/${siteConfig.phone.replace("+", "")}?text=${encodeURIComponent(message)}`;
}
