import React, { useState } from 'react';

interface EnvelopeProps {
  onOpen: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // --- TUS IMÁGENES ---
  const LEFT_IMAGE_URL = "https://i.pinimg.com/736x/62/41/0a/62410aa3629a55d2fd834f96b49a0531.jpg"; 
  const RIGHT_IMAGE_URL = "https://i.pinimg.com/736x/1d/9f/d5/1d9fd5a96e47b4d08040e1046510f5b2.jpg";
  // Misma imagen que en HeroSection para la transición perfecta
  const HERO_IMAGE_URL = "https://cf.bstatic.com/xdata/images/hotel/max1024x768/23376356.jpg?k=006bff93393f5bf108a020f44fd0d39eb5bcf9691f31a86f59105f90498a07c3&o=";

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
      // AJUSTE: Aumentado el tiempo de espera para que el componente WeddingContent
      // se renderice completamente detrás antes de quitar el sobre.
      setTimeout(() => setIsFinished(true), 1200); 
    }, 1200);
  };

  if (isFinished) return null;

  // Estilo para el efecto de borde difuminado (acuarela)
  const watercolorMaskStyle: React.CSSProperties = {
    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)'
  };

  return (
    <div className={`fixed inset-0 z-50 flex flex-col md:flex-row items-stretch justify-center overflow-hidden pointer-events-auto transition-opacity duration-500 ${isFinished ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* --- FONDO DE TRANSICIÓN (REVEAL) --- 
          Se muestra detrás de los paneles. Cuando se abren, se ve esta imagen 
          que coincide con la Hero Section, creando continuidad.
      */}
      <div className="absolute inset-0 z-0 bg-wedding-charcoal">
         <img 
            src={HERO_IMAGE_URL} 
            alt="Fondo"
            className={`w-full h-full object-cover transition-all duration-[2000ms] ease-out will-change-transform
              ${isOpen ? 'scale-100 blur-0 opacity-100' : 'scale-110 blur-sm opacity-50'}
            `}
         />
         {/* 
            AJUSTE: Overlay ajustado a 'bg-black/30' cuando está abierto. 
            Esto coincide con el overlay de HeroSection, evitando saltos de luz.
         */}
         <div className={`absolute inset-0 bg-black/30 transition-all duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>
         {/* Overlay inicial más oscuro */}
         <div className={`absolute inset-0 bg-black/60 transition-opacity duration-1000 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
      </div>

      {/* --- PANEL 1 (IZQUIERDA EN DESKTOP / ARRIBA EN MOBILE) --- */}
      <div 
        className={`relative w-full h-1/2 md:w-1/2 md:h-full bg-[#fdfbf7] 
        border-b md:border-b-0 md:border-r border-stone-200/50 
        shadow-[0_10px_50px_rgba(0,0,0,0.3)] md:shadow-[10px_0_50px_rgba(0,0,0,0.3)] 
        z-20 transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform
        ${isOpen ? '-translate-y-full md:-translate-y-0 md:-translate-x-full' : 'translate-y-0 md:translate-x-0'}`}
      >
        {/* Textura de papel de fondo (Base) */}
        <div className="absolute inset-0 opacity-100 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none mix-blend-multiply filter contrast-125 brightness-95"></div>
        {/* Segunda capa de textura */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/rough-cloth.png')] pointer-events-none mix-blend-multiply"></div>

        {/* Contenedor Panel 1 
            AJUSTE: 'flex-col-reverse' en mobile para que el Label quede ARRIBA de la imagen.
            'md:flex-col' en desktop para que el Label quede DEBAJO de la imagen.
            'gap-4' para espaciado limpio sin margenes direccionales confusos.
        */}
        <div className="absolute inset-0 flex flex-col-reverse md:flex-col items-center justify-center p-4 md:p-8 overflow-hidden gap-4 md:gap-6">
          <div className="relative w-full max-w-[200px] md:max-w-[380px] aspect-[3/4] transform -rotate-2 transition-transform duration-1000">
             <img 
              src={LEFT_IMAGE_URL} 
              alt="Santa Cruz de La Palma" 
              style={watercolorMaskStyle}
              className="w-full h-full object-cover rounded-[50%] opacity-90 mix-blend-multiply filter contrast-110 sepia-[0.1]"
            />
          </div>
          {/* Label 1 con Fade In */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
             <p className="font-display text-[10px] md:text-xs tracking-[0.3em] text-wedding-charcoal/60 uppercase text-center border-b border-wedding-gold/30 pb-2">
               Santa Cruz de La Palma
             </p>
          </div>
        </div>
      </div>

      {/* --- PANEL 2 (DERECHA EN DESKTOP / ABAJO EN MOBILE) --- */}
      <div 
        className={`relative w-full h-1/2 md:w-1/2 md:h-full bg-[#fdfbf7] 
        border-t md:border-t-0 md:border-l border-stone-200/50 
        shadow-[0_-10px_50px_rgba(0,0,0,0.3)] md:shadow-[-10px_0_50px_rgba(0,0,0,0.3)] 
        z-20 transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform
        ${isOpen ? 'translate-y-full md:translate-y-0 md:translate-x-full' : 'translate-y-0 md:translate-x-0'}`}
      >
         {/* Textura de papel de fondo (Base) */}
         <div className="absolute inset-0 opacity-100 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none mix-blend-multiply filter contrast-125 brightness-95"></div>
         {/* Segunda capa de textura */}
         <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/rough-cloth.png')] pointer-events-none mix-blend-multiply"></div>

        {/* Contenedor Panel 2 
            Se mantiene flex-col en ambos (Imagen Arriba, Label Abajo).
            Usamos gap para consistencia.
        */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden gap-4 md:gap-6">
           <div className="relative w-full max-w-[200px] md:max-w-[380px] aspect-[3/4] transform rotate-2 transition-transform duration-1000">
             <img 
              src={RIGHT_IMAGE_URL} 
              alt="La Barbeira-Baiona" 
              style={watercolorMaskStyle}
              className="w-full h-full object-cover rounded-[50%] opacity-90 mix-blend-multiply filter contrast-110 sepia-[0.1]"
            />
          </div>
          {/* Label 2 con Fade In */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
             <p className="font-display text-[10px] md:text-xs tracking-[0.3em] text-wedding-charcoal/60 uppercase text-center border-b border-wedding-gold/30 pb-2">
               La Barbeira - Baiona
             </p>
          </div>
        </div>
      </div>

      {/* --- BOTÓN CENTRAL (SELLO DE LACRE) --- */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-700 ${isOpen ? 'opacity-0 scale-150 pointer-events-none' : 'opacity-100 scale-100'}`}>
        <button 
          onClick={handleOpen}
          className="group relative flex flex-col items-center justify-center focus:outline-none"
        >
          {/* Efecto Pulse detrás del sello */}
          <div className="absolute inset-0 bg-wedding-wax rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-ping"></div>
          
          {/* Cuerpo del Sello 
              OPTIMIZACIÓN: Reducido tamaño en móvil (w-20 h-20) 
          */}
          <div className="relative w-20 h-20 md:w-36 md:h-36 bg-wedding-wax shadow-2xl flex items-center justify-center transform transition-transform duration-500 group-hover:scale-105"
               style={{
                 borderRadius: '52% 48% 62% 38% / 45% 55% 45% 55%',
                 boxShadow: 'inset -2px -2px 10px rgba(0,0,0,0.3), 2px 5px 15px rgba(0,0,0,0.4)'
               }}
          >
             {/* Textura interna del sello */}
             {/* CAMBIO: Textura de cuero (leather) en lugar de stardust para efecto cera más realista y menos brillante */}
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/leather.png')]" style={{ borderRadius: 'inherit' }}></div>
             
             {/* Anillo interior grabado */}
             <div className="absolute inset-3 border border-white/20" style={{ borderRadius: '55% 45% 60% 40% / 50% 60% 40% 60%' }}></div>
             
             {/* Iniciales 
                OPTIMIZACIÓN: Ajustado tamaño de texto y espaciado para el nuevo tamaño pequeño 
             */}
             <div className="flex items-center justify-center gap-0.5 md:gap-1 font-script text-white/95 text-2xl md:text-4xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)] z-10 pt-1 md:pt-2 transform -rotate-6">
               <span>N</span>
               <span>J</span>
             </div>
             
             {/* Brillo especular */}
             <div className="absolute top-6 right-8 w-8 h-4 bg-white opacity-20 rounded-full -rotate-45 blur-[3px]"></div>
          </div>
          
          {/* Texto "Abrir" */}
          <div className="absolute -bottom-8 md:-bottom-10 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
            <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-wedding-charcoal/60 font-bold drop-shadow-sm">Abrir</span>
          </div>
        </button>
      </div>

    </div>
  );
};