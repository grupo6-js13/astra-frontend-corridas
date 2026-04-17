import { useState, useEffect } from 'react'
import type { ChangeEvent, SyntheticEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { api } from '../../services/Service'
import { create, update } from '../../services/VeiculoService'
import type { Veiculo } from '../../models/Veiculo'

const VEICULO_INICIAL: Veiculo = {
    id: 0,
    modelo: '',
    placa: '',
    cor: '',
    capacidadeMaxima: 0,
}

export default function FormVeiculo() {
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()

    const [isLoading, setIsLoading] = useState(false)
    const [veiculo, setVeiculo] = useState<Veiculo>(VEICULO_INICIAL)

    useEffect(() => {
        if (id !== undefined) {
            setIsLoading(true)
            api
                .get(`/veiculos/${id}`)
                .then(resposta => setVeiculo(resposta.data))
                .catch((erro: any) => {
                    const mensagem = erro.response?.data?.message || 'Erro desconhecido'
                    alert(`Erro ao buscar veículo: ${mensagem}`)
                })
                .finally(() => setIsLoading(false))
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        const { name, type, value } = e.target
        setVeiculo(prev => ({
            ...prev,
            [name]: type === 'number' ? (value === '' ? 0 : Number(value)) : value,
        }))
    }

    async function salvarVeiculo(e: SyntheticEvent) {
        e.preventDefault()
        setIsLoading(true)
        try {
            if (id !== undefined) {
                await update(veiculo, setVeiculo)
                alert('Veículo atualizado com sucesso!')
            } else {
                await create(veiculo, setVeiculo)
                alert('Veículo cadastrado com sucesso!')
            }
            navigate('/veiculos')
        } catch (error: any) {
            const mensagem = error.response?.data?.message || 'Erro 500: Internal Server Error'
            alert(`Falha ao processar: ${mensagem}`)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="mx-auto max-w-2xl p-6">

            {/* Header */}
            <div className="mb-6 border-b border-border pb-4">
                <h2 className="font-display text-2xl font-bold text-text">
                    {id !== undefined ? 'Editar Veículo' : 'Cadastrar Novo Veículo'}
                </h2>
                <p className="text-sm text-muted">
                    Preencha os dados do veículo para uso nas caronas.
                </p>
            </div>

            {isLoading ? (
                <div className="flex justify-center py-16">
                    <ClipLoader color="var(--color-astra-primary)" size={32} />
                </div>
            ) : (
                <form
                    onSubmit={salvarVeiculo}
                    className="rounded-xl border border-border bg-surface p-6"
                >
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-muted">Modelo</label>
                            <input
                                type="text"
                                name="modelo"
                                value={veiculo.modelo}
                                onChange={atualizarEstado}
                                required
                                placeholder="Ex: Honda Civic"
                                className="w-full rounded-md border border-border bg-surface p-2 text-sm text-text focus:border-primary focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-muted">Placa</label>
                            <input
                                type="text"
                                name="placa"
                                value={veiculo.placa}
                                onChange={atualizarEstado}
                                required
                                placeholder="Ex: ABC1234"
                                maxLength={7}
                                disabled={id !== undefined}
                                className={`w-full rounded-md border border-border bg-surface p-2 text-sm focus:border-primary focus:outline-none ${id !== undefined ? 'cursor-not-allowed text-muted' : 'text-text'}`}
                            />
                            {id !== undefined && (
                                <span className="text-[11px] text-muted">A placa não pode ser alterada.</span>
                            )}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-muted">Cor</label>
                            <input
                                type="text"
                                name="cor"
                                value={veiculo.cor}
                                onChange={atualizarEstado}
                                required
                                placeholder="Ex: Prata"
                                className="w-full rounded-md border border-border bg-surface p-2 text-sm text-text focus:border-primary focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-muted">Capacidade máxima</label>
                            <input
                                type="number"
                                name="capacidadeMaxima"
                                value={veiculo.capacidadeMaxima || ''}
                                onChange={atualizarEstado}
                                required
                                min="1"
                                placeholder="Ex: 4"
                                className="w-full rounded-md border border-border bg-surface p-2 text-sm text-text focus:border-primary focus:outline-none"
                            />
                        </div>

                    </div>

                    <div className="mt-6 flex justify-end gap-3 border-t border-border pt-4">
                        <button
                            type="button"
                            onClick={() => navigate('/veiculos')}
                            className="cursor-pointer rounded-lg border border-border bg-transparent px-4 py-2 text-sm font-medium text-muted hover:text-text"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex cursor-pointer items-center justify-center rounded-lg border-none bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isLoading
                                ? <ClipLoader color="#ffffff" size={20} />
                                : <span>{id !== undefined ? 'Salvar Alterações' : 'Cadastrar Veículo'}</span>
                            }
                        </button>
                    </div>
                </form>
            )}
        </div>
    )
}