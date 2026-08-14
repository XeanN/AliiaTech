export function PilarIconWeb({ className = "w-10 h-10 text-accent-start" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.18.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.299l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.299-.21l.775-.387 1.64 1.64A6 6 0 0 0 18.384 21H19.5a1.5 1.5 0 0 0 1.5-1.5v-1.5c0-.433-.132-.845-.384-1.187l-1.64-1.64.775-.387c.342-.17.433-.56.21-1.299l-1.348-1.348c-.21-.21-.497-.329-.795-.329v-1.089c0-.426-.24-.815-.622-1.006l-.153-.076c.433-.217-.956-.132-1.299.21l-.387.775-1.64-1.64A6 6 0 0 0 4.616 3H3.5a1.5 1.5 0 0 0-1.5 1.5v1.5c0 .433.132.845.384 1.187l1.64 1.64Z" />
    </svg>
  );
}

export function PilarIconSistemas({ className = "w-10 h-10 text-accent-start" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.375 1.518c-.207.375-.465.722-.777 1.018a3.75 3.75 0 0 1-5.696 0 3.75 3.75 0 0 1 0-5.696c.375-.207.722-.465 1.018-.777 1.518-.375 1.007-.375 1.007-.375h1.5M13.5 1.5v1.007a3 3 0 0 0 .375 1.518c.207.375.465.722.777 1.018a3.75 3.75 0 0 0 5.696 0 3.75 3.75 0 0 0 0-5.696c-.375-.207-.722-.465-1.018-.777A3 3 0 0 0 19.5 1.5h-1.5m-6 6v1.007a3 3 0 0 1-.375 1.518c-.207.375-.465.722-.777 1.018a3.75 3.75 0 0 1-5.696 0 3.75 3.75 0 0 1 0-5.696c.375-.207.722-.465 1.018-.777A3 3 0 0 1 7.5 7.5h1.5m6 6v1.007a3 3 0 0 0 .375 1.518c.207.375.465.722.777 1.018a3.75 3.75 0 0 0 5.696 0 3.75 3.75 0 0 0 0-5.696c-.375-.207-.722-.465-1.018-.777A3 3 0 0 0 19.5 13.5h-1.5" />
    </svg>
  );
}

export function PilarIconMarketing({ className = "w-10 h-10 text-accent-start" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
    </svg>
  );
}

export function PilarIconIndustria({ className = "w-10 h-10 text-accent-start" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21v-4.5m0 4.5h-2.25m2.25 0h2.25m0 0v-4.5m0 4.5h2.25M12 21v-4.5m0 4.5h-2.25m2.25 0h2.25m0 0v-4.5m0 4.5h2.25M20.25 21v-4.5M12 3v2.25m6.364.364.707.707M21 12h-2.25m-.364 6.364-.707.707M12 21V12m0 0H4.5m7.5 0h7.5M12 12V3m0 0v2.25m-6.364.364-.707.707M3 12h2.25m.364 6.364.707.707" />
    </svg>
  );
}

export type IconKey = "web" | "sistemas" | "marketing" | "industria";

const ICONS: Record<IconKey, typeof PilarIconWeb> = {
  web: PilarIconWeb,
  sistemas: PilarIconSistemas,
  marketing: PilarIconMarketing,
  industria: PilarIconIndustria,
};

export function PillarIcon({ iconKey, className }: { iconKey: string; className?: string }) {
  const Icon = ICONS[iconKey as IconKey] ?? PilarIconWeb;
  return <Icon className={className} />;
}

export const PILLAR_NAMES: Record<IconKey, string> = {
  web: "Desarrollo Web y E-commerce",
  sistemas: "Sistemas Empresariales y Automatización",
  marketing: "Marketing y Estrategia Digital",
  industria: "Soluciones por Industria",
};
