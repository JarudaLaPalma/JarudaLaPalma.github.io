import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/23376356.jpg?k=006bff93393f5bf108a020f44fd0d39eb5bcf9691f31a86f59105f90498a07c3&o=" 
          alt="Noemy y Javi" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        
        {/* Etiqueta 'Nos Casamos' - Delay 0.5s (Aparece suavemente) */}
        <div 
            className="bg-white/20 backdrop-blur-md px-10 py-3 rounded-full mb-8 shadow-lg border border-wedding-gold/60 inline-block animate-fade-in opacity-0"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
            <p className="font-sans uppercase tracking-[0.3em] text-sm md:text-base font-bold text-white drop-shadow-md">
            Nos Casamos
            </p>
        </div>
        
        {/* Nombres - Delay 1s */}
        <h1 
            className="font-script text-7xl md:text-9xl mb-2 drop-shadow-lg animate-fade-in opacity-0"
            style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
        >
          Noemy y Javier
        </h1>
        
        {/* Fecha y Lugar - Delay 1.5s */}
        <div 
            className="translate-y-[10px] animate-fade-in opacity-0"
            style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
        >
            <p className="font-display text-2xl md:text-4xl tracking-widest drop-shadow-md">
              26 . 09 . 2026
            </p>
            <p className="mt-4 font-serif italic text-lg opacity-90">
              Hacienda de Abajo, La Palma
            </p>
        </div>
        
        {/* Flecha - Delay 2s */}
        {/* Contenedor padre para el fade-in, hijo para el bounce */}
        <div 
            className="absolute bottom-10 animate-fade-in opacity-0"
            style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
        >
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};