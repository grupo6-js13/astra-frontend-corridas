import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Sobre } from './pages/sobre/Sobre'

// Se tiver Navbar/Footer, pode importar igual no outro App
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">

        <Navbar />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/viagens" element={<ListarViagens />} />
            <Route path="/veiculos" element={<ListarVeiculos />} /> */}
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  )
}