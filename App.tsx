import React, { useState } from 'react';
import { Envelope } from './components/Envelope';
import { WeddingContent } from './components/WeddingContent';

const App: React.FC = () => {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-wedding-gold selection:text-white">
      {/* ENVELOPE (SOBRE) */}
      <Envelope 
        onOpen={() => setIsEnvelopeOpened(true)} 
      />
      
      {/* CONTENIDO PRINCIPAL */}
      {isEnvelopeOpened && (
        <WeddingContent />
      )}
    </div>
  );
};

export default App;