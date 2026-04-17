import type { Usuario } from './Usuario'
import type { Veiculo } from './Veiculo'

export interface Viagem {
  id: number
  origem: string
  destino: string
  distancia?: number
  periodo: string
  vagasDisponiveis?: number
  preco?: number
  tempoEstimado?: number
  usuario: Usuario | null
  veiculo: Veiculo | null
}