import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Introducao from './pages/introducao/Introducao'
import Sobre from './pages/sobre/Sobre'
import ListarViagens from './pages/viagens/ListarViagens'
import FormViagem from './pages/viagens/FormViagem'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-astra-bg flex flex-col font-sans">
        <Navbar />
        <main className="grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/viagens" element={<ListarViagens />} />
            <Route path="/veiculos" element={<ListarVeiculos />} /> */}
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/viagens" element={<ListarViagens />} />
            <Route path="/viagens/form" element={<FormViagem />} />
            <Route path="/viagens/form/:id" element={<FormViagem />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App