import { useState, useEffect } from 'react'
import type { ChangeEvent, SyntheticEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../services/Service'
import { create, update } from '../../services/ViagemService'
import type { Viagem } from '../../models/Viagem'
import type { Veiculo } from '../../models/Veiculo'
import type { Usuario } from '../../models/Usuario'

const MOTORISTAS_DISPONIVEIS: Usuario[] = [
  { id: 2, nome: 'Marcus Wendell', usuario: 'marcus@email.com', foto: '', campus: 'UFF' },
  { id: 7, nome: 'Jeaninny Teixeira', usuario: 'j9@email.com', foto: '', campus: 'UFF' },
  { id: 8, nome: 'Josué Bravo', usuario: 'josue@email.com', foto: '', campus: 'UFF' },
  { id: 9, nome: 'Sofia Sabrina', usuario: 'sofia@email.com', foto: '', campus: 'UFF' },
  { id: 10, nome: 'Jhonatha Oliveira', usuario: 'jhon@email.com', foto: '', campus: 'UFF' }
]

export default function FormViagem() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const [veiculos, setVeiculos] = useState<Veiculo[]>([])

  const [viagem, setViagem] = useState<Viagem>({
    id: 0,
    origem: '',
    destino: '',
    distancia: '' as any, 
    periodo: '',
    vagasDisponiveis: '' as any,
    usuario: null,
    veiculo: null
  })

  useEffect(() => {
    api.get('/veiculos').then(resposta => {
      setVeiculos(resposta.data)
    })
  }, [])

  useEffect(() => {
    if (id !== undefined) {
      api.get(`/viagens/${id}`)
        .then(resposta => {
          const dadosViagem = resposta.data
          setViagem({
            ...dadosViagem,
            distancia: Number(dadosViagem.distancia),
            vagasDisponiveis: Number(dadosViagem.vagasDisponiveis)
          })
        })
        .catch((erro: any) => {
          const mensagemErro = erro.response?.data?.message || 'Erro desconhecido'
          alert(`Erro ao buscar os dados da viagem: ${mensagemErro}`)
          console.error(erro)
        })
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, type, value } = e.target
    
    let valorFinal: string | number = value

    if (type === 'number') {
      valorFinal = value === '' ? '' : Number(value)
    }

    setViagem({
      ...viagem,
      [name]: valorFinal
    } as any)
  }

  function selecionarMotorista(e: ChangeEvent<HTMLSelectElement>) {
    const motoristaEscolhido = MOTORISTAS_DISPONIVEIS.find(m => m.id === Number(e.target.value))
    setViagem({
      ...viagem,
      usuario: motoristaEscolhido || null
    })
  }

  function atualizarVeiculo(e: ChangeEvent<HTMLSelectElement>) {
    setViagem({
      ...viagem,
      veiculo: { id: Number(e.target.value), modelo: '', placa: '', cor: '', capacidadeMaxima: 0 }
    })
  }

  async function salvarViagem(e: SyntheticEvent) {
    e.preventDefault()

    if (!viagem.usuario) {
      alert('Por favor, selecione um motorista responsável pelo trajeto.')
      return
    }

    try {
      if (id !== undefined) {
        await update(viagem, setViagem)
        alert('Viagem atualizada com sucesso!')
      } else {
        await create(viagem, setViagem)
        alert('Viagem cadastrada com sucesso!')
      }
      navigate('/viagens')
    } catch (error: any) {
      const mensagemBackend = error.response?.data?.message || 'Erro 500: Internal Server Error'
      alert(`Falha ao processar: ${mensagemBackend}`)
    }
  }

  return (
    <div className="mx-auto max-w-2xl p-6">
      <div className="mb-6 border-b border-border pb-4">
        <h2 className="font-display text-2xl font-bold text-text">
          {id !== undefined ? 'Editar Trajeto' : 'Cadastrar Novo Trajeto'}
        </h2>
        <p className="text-sm text-muted">
          Preencha os dados operacionais da carona. Os cálculos de valor e tempo são automáticos.
        </p>
      </div>

      <form onSubmit={salvarViagem} className="rounded-xl border border-border bg-surface p-6 shadow-lg">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-xs text-muted">Motorista Responsável</label>
            <select
              onChange={selecionarMotorista}
              required
              className="w-full rounded-md border border-border bg-surface p-2 text-sm text-text focus:border-primary focus:outline-none"
              value={viagem.usuario?.id || ''}
            >
              <option value="">Selecione o motorista</option>
              {MOTORISTAS_DISPONIVEIS.map(m => (
                <option key={m.id} value={m.id}>{m.nome}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted">Origem</label>
            <input
              type="text"
              name="origem"
              value={viagem.origem}
              onChange={atualizarEstado}
              required
              placeholder="Ex: Campus UFF"
              className="w-full rounded-md border border-border bg-surface p-2 text-sm text-text focus:border-primary focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted">Destino</label>
            <input
              type="text"
              name="destino"
              value={viagem.destino}
              onChange={atualizarEstado}
              required
              placeholder="Ex: Centro"
              className="w-full rounded-md border border-border bg-surface p-2 text-sm text-text focus:border-primary focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted">Distância (km)</label>
            <input
              type="number"
              step="0.1"
              name="distancia"
              value={viagem.distancia}
              onChange={atualizarEstado}
              required
              placeholder="Ex: 15.5"
              className="w-full rounded-md border border-border bg-surface p-2 text-sm text-text focus:border-primary focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted">Vagas Disponíveis</label>
            <input
              type="number"
              name="vagasDisponiveis"
              value={viagem.vagasDisponiveis}
              onChange={atualizarEstado}
              min="1"
              required
              placeholder="Ex: 3"
              className="w-full rounded-md border border-border bg-surface p-2 text-sm text-text focus:border-primary focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted">Período</label>
            <select
              name="periodo"
              value={viagem.periodo}
              onChange={atualizarEstado}
              required
              className="w-full rounded-md border border-border bg-surface p-2 text-sm text-text focus:border-primary focus:outline-none"
            >
              <option value="" disabled>Selecione o período</option>
              <option value="manha">Manhã</option>
              <option value="tarde">Tarde</option>
              <option value="noite">Noite</option>
              <option value="madrugada">Madrugada</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted">Veículo</label>
            <select
              name="veiculo"
              value={viagem.veiculo?.id || ''}
              onChange={atualizarVeiculo}
              required
              className="w-full rounded-md border border-border bg-surface p-2 text-sm text-text focus:border-primary focus:outline-none"
            >
              <option value="" disabled>Selecione o veículo</option>
              {veiculos.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.modelo} - {v.placa}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3 border-t border-border pt-4">
          <button
            type="button"
            onClick={() => navigate('/viagens')}
            className="cursor-pointer rounded-lg border border-border bg-transparent px-4 py-2 text-sm font-medium text-muted hover:text-text"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="cursor-pointer rounded-lg border-none bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Salvar Viagem
          </button>
        </div>
      </form>
    </div>
  )
}