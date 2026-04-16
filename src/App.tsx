import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* Aqui entrará sua Navbar futuramente */}

      <div className="min-h-screen bg-gray-50 flex flex-col">
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<div className="text-3xl text-blue-600 font-bold text-center">Tailwind Configurado!</div>} />
            {/* Adicione novas rotas aqui */}
          </Routes>
        </main>
      </div>

      {/* Aqui entrará seu Footer futuramente */}
    </BrowserRouter>
  );
}

export default App;