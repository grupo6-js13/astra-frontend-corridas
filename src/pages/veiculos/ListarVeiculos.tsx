import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { getAll, deleteById } from '../../services/VeiculoService'
import type { Veiculo } from '../../models/Veiculo'
import { CarIcon, PencilSimpleLineIcon, TrashIcon } from '@phosphor-icons/react'

export default function ListarVeiculos() {
    const [veiculos, setVeiculos] = useState<Veiculo[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const carregarVeiculos = async () => {
        setIsLoading(true)
        try {
            await getAll(setVeiculos)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        carregarVeiculos()
    }, [])

    const deletarVeiculo = async (id: number) => {
        if (window.confirm('Tem certeza que deseja remover este veículo?')) {
            await deleteById(id)
            setVeiculos(prev => prev.filter(v => v.id !== id))
            alert('Veículo removido com sucesso!')
        }
    }

    return (
        <div className="mx-auto max-w-4xl p-8">


            <div className="mb-8 flex items-center justify-between rounded-2xl border border-border bg-surface px-10 py-8">
                <div>
                    <h2 className="font-display text-3xl font-bold text-text">Garagem Virtual</h2>
                    <p className="mt-2 text-base text-muted">Veículos cadastrados para caronas.</p>
                </div>

            </div>


            {isLoading ? (
                <div className="flex justify-center py-12">
                    <ClipLoader color="var(--color-astra-primary)" size={32} />
                </div>
            ) : veiculos.length === 0 ? (
                <p className="text-center text-base text-muted">Nenhum veículo cadastrado ainda.</p>
            ) : (
                <div className="flex flex-col gap-5">
                    {veiculos.map(v => (
                        <div
                            key={v.id}
                            className="group flex flex-col items-start justify-between rounded-2xl border border-border bg-surface px-8 py-6 transition-all hover:border-primary/40 md:flex-row md:items-center"
                        >

                            <div className="mb-4 flex items-center gap-6 md:mb-0">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-bg transition-colors duration-500 group-hover:bg-primary/10">
                                    <CarIcon size={36} className="text-accent" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h3 className="font-display text-xl font-bold text-text">{v.modelo}</h3>
                                        <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                                            {v.capacidadeMaxima} lugares
                                        </span>
                                    </div>
                                    <div className="mt-1 flex items-center gap-5 font-mono text-sm text-muted">
                                        <span>● PLACA: {v.placa}</span>
                                        <span>● {v.cor}</span>
                                    </div>
                                </div>
                            </div>


                            <div className="flex gap-3">
                                <Link
                                    to={`/veiculos/form/${v.id}`}
                                    className="rounded-xl border border-border bg-transparent p-3 text-muted no-underline transition-all hover:bg-border hover:text-text"
                                    title="Editar"
                                >
                                    <PencilSimpleLineIcon size={20} />
                                </Link>
                                <button
                                    onClick={() => deletarVeiculo(v.id)}
                                    className="cursor-pointer rounded-xl border border-danger/40 bg-transparent p-3 text-muted transition-all hover:bg-danger/10 hover:text-danger"
                                    title="Remover"
                                >
                                    <TrashIcon size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}