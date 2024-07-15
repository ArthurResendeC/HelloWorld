import { Link, Tag, X } from "lucide-react";
import { Button } from "../../components/Button";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { FormEvent } from "react";


interface AddlinkModalProps {
    closeAddLinkModal: () => void
}

export function AddLinkModal({ closeAddLinkModal }: AddlinkModalProps) {

    const { tripId } = useParams()


    async function addLink(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault()

        const data = new FormData(ev.currentTarget)
        const title = data.get('title')?.toString()
        const linkUrl = data.get('linkUrl')?.toString()
       
        await api.post(`/trips/${tripId}/links`, {
            title: title,
            url: linkUrl
        })

        window.document.location.reload()
    }

    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl shadow-shape bg-zinc-900  py-4 px-6 space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Adicionar link</h2>
                        <button onClick={closeAddLinkModal}><X className='size-5 text-400'/></button>
                    </div>
                    <p className='text-sm text-zinc-400'>
                        Introduza as informações do link:
                    </p>
                </div>

                <form className='space-y-3' onSubmit={addLink}>
                    <div className='h-14 px-4 bg-zinc-950 border rounded-lg border-zinc-800 flex items-center gap-2'>
                        <Tag className='size-5 text-zinc-400' />
                        <input
                            type="text"
                            name='title'
                            className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
                            placeholder="Qual o título para esse link?"
                            required
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <div className='h-14 flex-1 px-4 bg-zinc-950 border rounded-lg border-zinc-800 flex items-center gap-2'>
                            <Link className="size-5 text-zinc-400"/>
                            <input
                                type='text'
                                name="linkUrl"
                                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                                placeholder="Qual o link?"
                                required
                            />
                        </div>
                    </div>

                    <Button variant="primary" size="full" type="submit">
                        Adicionar link
                    </Button>
                </form>
            </div>
        </div>
    )
}