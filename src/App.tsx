import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Introducao from './pages/introducao/Introducao';
import Sobre from './pages/sobre/Sobre';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-astra-bg flex flex-col font-sans">
        
        <Navbar />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introducao" element={<Introducao />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>

        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;