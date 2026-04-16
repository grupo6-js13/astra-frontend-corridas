import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* Usando a nova cor de fundo do Astra */}
      <div className="min-h-screen bg-astra-bg flex flex-col font-sans">
        
        <main className="flex-grow container mx-auto px-4 py-16 flex items-center justify-center">
          <Routes>
            <Route path="/" element={
              <div className="text-center p-8 bg-astra-surface rounded-xl border border-astra-surface-hover shadow-lg">
                {/* Usando a fonte Space Grotesk (font-display) e a cor Primária */}
                <h1 className="text-5xl font-display font-bold text-astra-primary mb-4">
                  Astra Corridas
                </h1>
                
                {/* Usando a cor de texto mutada */}
                <p className="text-astra-muted text-lg mb-6">
                  Design System configurado com sucesso!
                </p>

                {/* Usando a cor de acento no botão */}
                <button className="px-6 py-2 bg-astra-accent text-white font-semibold rounded-md hover:opacity-90 transition-opacity">
                  Começar
                </button>
              </div>
            } />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;