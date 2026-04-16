import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Introducao from './pages/introducao/Introducao';
import Sobre from './pages/sobre/Sobre';
import { pageStyle } from './theme'

function App() {
  return (
    <BrowserRouter>
      <div style={{
        ...pageStyle,
        display: 'flex',
        flexDirection: 'column'
      }}>

        <Navbar />


        <main style={{
          flexGrow: 1,
          padding: '32px 16px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introducao" element={<Introducao />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter >
  );
}

export default App;