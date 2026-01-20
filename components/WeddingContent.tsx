import React from 'react';
import { HeroSection } from './HeroSection';
import { TimelineEvent } from '../types';

export const WeddingContent: React.FC = () => {
  
  // URL del Google Form.
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdbEGp66Onk0C5Sf7vIPK5L7kiW3SffzNugboFdgCOEk7NAug/viewform?usp=header";

  const timeline: TimelineEvent[] = [
    { time: '18:00', title: 'Ceremonia Civil', description: 'En los jardines principales', icon: 'ceremony' },
    { time: '19:30', title: 'Cóctel de Bienvenida', description: 'Música en vivo y aperitivos', icon: 'cocktail' },
    { time: '21:00', title: 'Cena de Gala', description: 'En el salón de cristal', icon: 'dinner' },
    { time: '23:30', title: 'Fiesta', description: 'Barra libre y baile hasta el amanecer', icon: 'party' },
  ];

  return (
    <div className="w-full min-h-screen bg-wedding-paper text-wedding-charcoal">
      
      <HeroSection />

      {/* Intro Quote / Story */}
      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h2 className="font-script text-5xl md:text-6xl text-wedding-gold mb-10">Nuestra Historia</h2>
        <div className="font-serif text-lg md:text-xl leading-relaxed text-gray-600 space-y-6">
          <p>
            Nuestra historia empezó por casualidad, una de esas que no se planean: unos amigos en común, un bar y una partida de Monopoly.
          </p>
          <p>
            Poco después comenzamos a escribir nuestro propio camino juntos.
          </p>
          <p>
            Entonces llegó el Covid y, tras él, una mudanza por trabajo a 2.000 km que parecía ponerlo todo a prueba.
          </p>
          <p className="font-medium text-wedding-charcoal/80 italic">
            "Pero el amor fue más fuerte que la distancia, y lo que parecía un final se convirtió en el principio de una vida construida juntos."
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="h-px w-24 bg-wedding-sage"></div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 gap-y-16 max-w-5xl mx-auto">
            
            {/* 1. Dress Code */}
            <div className="text-center space-y-4">
               <div className="w-16 h-16 mx-auto bg-wedding-cream rounded-full flex items-center justify-center text-wedding-gold mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wider">Código de Vestimenta</h3>
              <p className="font-serif text-xl">Elegante / Formal</p>
              <div className="text-gray-500 space-y-2 px-4">
                <p>Nos encantará veros guapos y cómodos, sin necesidad de chaqué ni etiquetas estrictas.</p>
                <p>Os agradecemos evitar el color blanco.</p>
              </div>
            </div>

            {/* 2. Weather */}
            <div className="text-center space-y-4">
               <div className="w-16 h-16 mx-auto bg-wedding-cream rounded-full flex items-center justify-center text-wedding-gold mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wider">Qué tiempo suele hacer</h3>
              <p className="font-serif text-xl">Cálido y Agradable</p>
              <p className="text-gray-500">
                Tazacorte tiene un microclima soleado.<br/>
                En septiembre esperamos entre 21°C y 27°C.
              </p>
            </div>

            {/* 3. Gifts */}
            <div className="text-center space-y-4">
               <div className="w-16 h-16 mx-auto bg-wedding-cream rounded-full flex items-center justify-center text-wedding-gold mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wider">Regalitos</h3>
              <p className="font-serif text-xl">Vuestra Presencia</p>
              <p className="text-gray-500 px-4">
                Sabemos el esfuerzo que supone el viaje, el alojamiento, la vestimenta... Vuestra compañía es nuestro único regalo deseado.
              </p>
            </div>

            {/* 4. Location */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-wedding-cream rounded-full flex items-center justify-center text-wedding-gold mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wider">Lugar</h3>
              <p className="font-serif text-xl">Hotel Hacienda de Abajo</p>
              <p className="text-gray-500 px-4 text-sm md:text-base mx-auto italic">
                Un antiguo ingenio azucarero del siglo XVII rehabilitado como hotel museo, rodeado de un exuberante jardín botánico.
              </p>
              <p className="text-gray-500">Calle Miguel de Unamuno, 11<br/>Tazacorte, La Palma</p>
              <a href="#mapa" className="inline-block mt-2 text-wedding-gold border-b border-wedding-gold hover:text-wedding-charcoal transition-colors">Ver Mapa</a>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="mapa" className="w-full bg-gray-100">
        <div className="w-full h-[400px] md:h-[500px]">
          <iframe 
            title="Mapa Hacienda de Abajo"
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0} 
            loading="lazy"
            src="https://maps.google.com/maps?q=Hotel+Hacienda+de+Abajo,La+Palma,Spain&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="filter grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>
        <div className="text-center py-4 bg-wedding-paper border-t border-wedding-sage/20">
           <a 
             href="https://www.google.com/maps/search/?api=1&query=Hotel+Hacienda+de+Abajo+La+Palma" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-wedding-gold font-display text-sm tracking-widest hover:text-wedding-charcoal transition-colors border-b border-wedding-gold pb-1"
           >
             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
             </svg>
             Abrir en Google Maps para Indicaciones
           </a>
        </div>
      </section>

      {/* Guía para tus vacaciones */}
      <section className="py-24 bg-white border-b border-wedding-sage/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-wedding-gold mb-6 uppercase tracking-widest">Guía para tus vacaciones palmeras</h2>
            <p className="font-serif text-lg md:text-xl text-gray-600 leading-relaxed italic">
              "Ya que muchos vendréis desde lejos, aquí os dejamos un planning para conocer La Palma"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan 1 */}
            <div className="bg-wedding-paper p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-wedding-sage/20">
              <h3 className="font-display text-xl text-wedding-charcoal mb-4 border-b border-wedding-gold/30 pb-2">Escapada Express (2-3 Días)</h3>
              <ul className="space-y-3 font-serif text-gray-600">
                <li className="flex items-start gap-2"><span className="text-wedding-gold text-lg">•</span><span>Visita al Roque de los Muchachos</span></li>
                <li className="flex items-start gap-2"><span className="text-wedding-gold text-lg">•</span><span>Atardecer en Puerto Naos</span></li>
                <li className="flex items-start gap-2"><span className="text-wedding-gold text-lg">•</span><span>Paseo por Santa Cruz de La Palma</span></li>
                <li className="flex items-start gap-2"><span className="text-wedding-gold text-lg">•</span><span>Visita al faro y las salinas</span></li>
              </ul>
            </div>

            {/* Plan 2 */}
            <div className="bg-wedding-paper p-8 rounded-sm shadow-md hover:shadow-lg transition-shadow border border-wedding-gold/30">
              <h3 className="font-display text-xl text-wedding-charcoal mb-4 border-b border-wedding-gold/30 pb-2">La Esencia (4-5 Días)</h3>
              <ul className="space-y-3 font-serif text-gray-600">
                <li className="flex items-start gap-2"><span className="text-wedding-gold text-lg">•</span><span>Todo lo de la escapada express</span></li>
                <li className="flex items-start gap-2"><span className="text-wedding-gold text-lg">•</span><span>Ruta del cubo de La Galga</span></li>
                <li className="flex items-start gap-2"><span className="text-wedding-gold text-lg">•</span><span>Piscinas naturales del Norte</span></li>
                <li className="flex items-start gap-2"><span className="text-wedding-gold text-lg">•</span><span>Bosque de Los Tilos</span></li>
              </ul>
            </div>

            {/* Plan 3 */}
            <div className="bg-wedding-paper p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-wedding-sage/20">
              <h3 className="font-display text-xl text-wedding-charcoal mb-4 border-b border-wedding-gold/30 pb-2">Isla Bonita (1 Semana)</h3>
              <ul className="space-y-3 font-serif text-gray-600">
                <li className="flex items-start gap-2"><span className="text-wedding-gold text-lg">•</span><span>Vuelta completa a la isla</span></li>
                <li className="flex items-start gap-2"><span className="text-wedding-gold text-lg">•</span><span>Caldera de Taburiente</span></li>
                <li className="flex items-start gap-2"><span className="text-wedding-gold text-lg">•</span><span>Ruta gastronómica local</span></li>
                <li className="flex items-start gap-2"><span className="text-wedding-gold text-lg">•</span><span>Observación de estrellas nocturna</span></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white border border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-white transition-colors duration-300 font-display text-sm tracking-widest uppercase rounded-sm">
              Descargar Guía PDF (Próximamente)
            </button>
          </div>
        </div>
      </section>

      {/* Programa del día */}
      <section className="py-20 bg-wedding-paper">
        <div className="container mx-auto px-4 max-w-4xl relative">
          <h2 className="font-display text-3xl text-center mb-8 uppercase tracking-widest">Programa del día</h2>
          
          <div className="absolute inset-0 z-10 flex items-center justify-center pt-20">
             <div className="bg-white/90 backdrop-blur-sm px-8 py-4 border border-wedding-gold rounded-sm shadow-lg transform -rotate-2">
                <p className="font-script text-3xl text-wedding-gold">¡Detalles próximamente!</p>
                <p className="font-serif text-sm text-gray-500 mt-1 uppercase tracking-widest">Estamos ultimando los horarios</p>
             </div>
          </div>

          <div className="relative border-l-2 border-wedding-sage/30 ml-6 md:ml-auto md:mr-auto md:w-full space-y-12 opacity-30 blur-[2px] select-none pointer-events-none grayscale">
            {timeline.map((event, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0 md:flex md:justify-center md:items-center group">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-wedding-gold border-2 border-white shadow-sm md:left-1/2 md:-ml-[9px]"></div>
                <div className="md:w-1/2 md:pr-12 md:text-right mb-2 md:mb-0">
                  <span className="font-display text-xl text-wedding-gold font-bold">{event.time}</span>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <h4 className="font-serif text-xl font-bold text-gray-800">{event.title}</h4>
                  <p className="text-gray-500 mt-1">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section (Google Form) */}
      <section className="py-20 bg-wedding-sage/10 relative">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-4 md:p-8 shadow-xl rounded-sm border border-wedding-sage/20">
            <h2 className="font-display text-3xl text-center mb-2 uppercase tracking-widest text-wedding-charcoal">Confirma tu asistencia</h2>
            <p className="text-center text-gray-500 mb-8 font-serif italic">Por favor, confirma antes del 1 de Agosto usando el formulario a continuación</p>
            
            <div className="w-full bg-wedding-paper rounded overflow-hidden">
               {/* OPTIMIZACIÓN: loading="lazy" */}
               <iframe 
                src={GOOGLE_FORM_URL} 
                width="100%" 
                height="800" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                title="Google Form RSVP"
                loading="lazy"
                className="w-full"
               >
                 Cargando formulario...
               </iframe>
            </div>
            
            <div className="mt-6 text-center text-xs text-gray-400">
               <p>¿Tienes problemas con el formulario? <a href={`mailto:jarudav2@gmail.com`} className="underline hover:text-wedding-gold">Contáctanos por email</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wedding-charcoal text-white py-12 text-center">
        <h2 className="font-script text-4xl mb-4">Noe y Javi</h2>
        <p className="font-serif text-sm opacity-60 uppercase tracking-widest">Esperamos verte allí</p>
      </footer>

    </div>
  );
};
