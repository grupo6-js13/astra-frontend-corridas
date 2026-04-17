import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Home } from './pages/home/Home'
import { Sobre } from './pages/sobre/Sobre'
import ListarViagens from './pages/viagens/ListarViagens'
import FormViagem from './pages/viagens/FormViagem'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-astra-bg flex flex-col font-sans">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/veiculos" element={<ListarVeiculos />} /> */}
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/viagens" element={<ListarViagens />} />
            <Route path="/viagens/form" element={<FormViagem />} />
            <Route path="/viagens/form/:id" element={<FormViagem />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App