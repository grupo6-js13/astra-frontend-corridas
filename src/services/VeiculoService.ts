import { api } from './Service'
import type { Veiculo } from '../models/Veiculo'

export const getAll = async (setDados: Function) => {
    const resposta = await api.get('/veiculos')
    setDados(resposta.data)
}

export const getById = async (id: number, setDados: Function) => {
    const resposta = await api.get(`/veiculos/${id}`)
    setDados(resposta.data)
}

export const getByModelo = async (modelo: string, setDados: Function) => {
    const resposta = await api.get(`/veiculos/modelo/${modelo}`)
    setDados(resposta.data)
}

export const create = async (veiculo: Veiculo, setDados: Function) => {
    const resposta = await api.post('/veiculos', veiculo)
    setDados(resposta.data)
}

export const update = async (veiculo: Veiculo, setDados: Function) => {
    const resposta = await api.put('/veiculos', veiculo)
    setDados(resposta.data)
}

export const deleteById = async (id: number) => {
    await api.delete(`/veiculos/${id}`)
}