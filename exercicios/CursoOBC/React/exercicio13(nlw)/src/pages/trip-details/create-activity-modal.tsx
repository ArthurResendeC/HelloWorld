import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../components/Button";
import { FormEvent } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface CreateActivityModalProps {
    closeCreateACtivityModal: () => void
}

export function CreateActivityModal({ closeCreateACtivityModal }: CreateActivityModalProps) {

    const { tripId } = useParams()

    async function createActivity(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const data = new FormData(event.currentTarget)

        const title = data.get('title')?.toString()
        const occursAt = data.get('occurs_at')?.toString()

        await api.post(`/trips/${tripId}/activities`, {
            title: title,
            occurs_at: occursAt
        })

        window.document.location.reload()
    }

    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl shadow-shape bg-zinc-900  py-4 px-6 space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Cadastrar atividade</h2>
                        <button onClick={closeCreateACtivityModal}><X className='size-5 text-400' /></button>
                    </div>
                    <p className='text-sm text-zinc-400'>
                        Todos os convidados podem visualizar os detalhes
                    </p>
                </div>

                <form onSubmit={createActivity} className='space-y-3'>
                    <div className='h-14 px-4 bg-zinc-950 border rounded-lg border-zinc-800 flex items-center gap-2'>
                        <Tag className='size-5 text-zinc-400' />
                        <input
                            type="text"
                            name='title'
                            className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
                            placeholder='Qual a atividade?'
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <div className='h-14 flex-1 px-4 bg-zinc-950 border rounded-lg border-zinc-800 flex items-center gap-2'>
                            <Calendar className='size-5 text-zinc-400' />
                            <input
                                autoComplete="off"
                                type="datetime-local"
                                name='occurs_at'
                                className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
                                placeholder='Data e horário da atividade'
                            />
                        </div>
                    </div>

                    <Button variant="primary" size="full">
                        Salvar Atividade
                    </Button>
                </form>
            </div>
        </div>
    )
}