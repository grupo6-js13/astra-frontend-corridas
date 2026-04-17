import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-astra-surface border-b border-astra-surface-hover p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-bold text-astra-primary">
          Astra.
        </Link>
        <div className="flex gap-6 font-medium">
          <Link to="/" className="hover:text-astra-accent transition-colors">Home</Link>
          <Link to="/viagens" className="hover:text-astra-accent transition-colors">Viagens</Link>
          <Link to="/veiculos" className="hover:text-astra-accent transition-colors">Veículos</Link>
          <Link to="/sobre" className="hover:text-astra-accent transition-colors">Sobre</Link>
        </div>
      </div>
    </nav>
  );
}