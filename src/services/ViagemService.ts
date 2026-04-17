import { api } from './Service'
import type { Viagem } from '../models/Viagem'

export const getAll = async (setDados: Function) => {
  const resposta = await api.get('/viagens')
  setDados(resposta.data)
}

export const getById = async (id: number, setDados: Function) => {
  const resposta = await api.get(`/viagens/${id}`)
  setDados(resposta.data)
}

export const getByOrigem = async (origem: string, setDados: Function) => {
  const resposta = await api.get(`/viagens/origem/${origem}`)
  setDados(resposta.data)
}

export const create = async (viagem: Viagem, setDados: Function) => {
  const resposta = await api.post('/viagens/cadastrar', viagem)
  setDados(resposta.data)
}

export const update = async (viagem: Viagem, setDados: Function) => {
  const resposta = await api.put('/viagens', viagem)
  setDados(resposta.data)
}

export const deleteById = async (id: number) => {
  await api.delete(`/viagens/${id}`)
}