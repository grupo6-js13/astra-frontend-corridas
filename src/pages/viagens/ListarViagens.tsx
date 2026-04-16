import { useState, useEffect } from 'react'
import type { ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import { getAll, getByOrigem, deleteById } from '../../services/ViagemService'
import type { Viagem } from '../../models/Viagem'

export default function ListarViagens() {
  const [viagens, setViagens] = useState<Viagem[]>([])
  
  // Estados para os filtros
  const [buscaOrigem, setBuscaOrigem] = useState('')
  const [filtroPeriodo, setFiltroPeriodo] = useState('')

  // Carrega todas as viagens ao abrir a tela
  useEffect(() => {
    getAll(setViagens)
  }, [])

  // Função disparada pelo botão "Buscar"
  const pesquisarPorOrigem = async () => {
    if (buscaOrigem.trim() === '') {
      await getAll(setViagens)
    } else {
      await getByOrigem(buscaOrigem, setViagens)
    }
  }

  // Função disparada pelo botão "Deletar"
  const deletarViagem = async (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir esta carona?')) {
      await deleteById(id)
      // Atualiza a lista na tela removendo o id deletado sem precisar dar refresh
      setViagens(viagens.filter(viagem => viagem.id !== id))
      alert('Carona excluída com sucesso!')
    }
  }

  // Aplica o filtro de período em cima da lista atual
  const viagensFiltradas = viagens.filter(viagem => {
    if (filtroPeriodo === '') return true
    return viagem.periodo === filtroPeriodo
  })

  function formatarTempo(minutosTotais: number) {
    const horas = Math.floor(minutosTotais / 60)
    const minutos = Math.round(minutosTotais % 60)
    
    if (horas > 0) {
      return `${horas}h ${minutos}m`
    }
    return `${minutos}m`
  }

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-border p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="m-0 font-display text-lg font-bold text-text">Caronas Disponíveis</h2>
          <p className="mt-1 text-xs text-muted">{viagensFiltradas.length} viagens encontradas</p>
        </div>
        
        {/* Barra de Filtros e Busca */}
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="text"
            placeholder="Buscar por origem..."
            value={buscaOrigem}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setBuscaOrigem(e.target.value)}
            className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-text focus:border-primary focus:outline-none"
          />
          <button 
            onClick={pesquisarPorOrigem}
            className="cursor-pointer rounded-md border border-border bg-surface px-3 py-2 text-sm text-text hover:bg-surface-hover"
          >
            Buscar
          </button>
          
          <select
            value={filtroPeriodo}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setFiltroPeriodo(e.target.value)}
            className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-text focus:border-primary focus:outline-none"
          >
            <option value="">Todos os períodos</option>
            <option value="manha">Manhã</option>
            <option value="tarde">Tarde</option>
            <option value="noite">Noite</option>
            <option value="madrugada">Madrugada</option>
          </select>

          <Link to="/viagens/form" className="cursor-pointer rounded-lg border-none bg-primary px-4 py-2 text-sm font-medium text-white no-underline hover:opacity-90">
            + Oferecer Carona
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 p-6">
        {viagensFiltradas.length === 0 ? (
          <p className="text-muted">Nenhuma viagem encontrada com esses filtros.</p>
        ) : (
          viagensFiltradas.map((viagem) => (
            <div key={viagem.id} className="rounded-xl border border-border bg-surface p-4">
              <p className="mb-2 font-display text-base font-bold text-text">
                {viagem.origem} → {viagem.destino}
              </p>
              
              <div className="mb-3 flex gap-3">
                <span className="inline-block rounded-full bg-tag-blue px-3 py-1 text-xs font-medium text-tag-blue-text">
                  {viagem.periodo.toUpperCase()}
                </span>
                <span className="text-[11px] text-muted">{viagem.vagasDisponiveis} vagas</span>
                <span className="text-[11px] text-muted">{viagem.distancia} km</span>
              </div>

              <hr className="my-3 border-t border-border" />

              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-semibold text-accent">R$ {viagem.preco}</span>
                  <span className="text-[11px] text-muted">~{formatarTempo(Number(viagem.tempoEstimado))}</span>
                </div>
                <span className="text-xs text-muted">
                  🚗 {viagem.usuario?.nome || 'Motorista'}
                </span>
              </div>

              {/* Botões de Ação */}
              <div className="mt-4 flex justify-end gap-2 border-t border-border pt-3">
                <Link 
                  to={`/viagens/form/${viagem.id}`} 
                  className="cursor-pointer rounded-md border border-border bg-surface px-2 py-1 text-xs text-muted no-underline hover:text-text"
                >
                  Editar
                </Link>
                <button 
                  onClick={() => deletarViagem(viagem.id)} 
                  className="cursor-pointer rounded-md border border-danger/40 bg-tag-red px-2 py-1 text-xs text-danger hover:bg-danger/20"
                >
                  Deletar
                </button>
              </div>

            </div>
          ))
        )}
      </div>
    </div>
  )
}