import { AtSign, Plus, X } from "lucide-react"
import { FormEvent } from "react"
import { Button } from "../../components/Button"

interface InviteGuestsModalProps {
    closeGuestsModal: () => void
    emailsToInvite: string[]
    addNewEmailToInvite: (e: FormEvent<HTMLFormElement>) => void
    removeEmail: (email: string) => void
}

export function InviteGuestsModal({ addNewEmailToInvite, closeGuestsModal, emailsToInvite, removeEmail }: InviteGuestsModalProps) {
    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl shadow-shape bg-zinc-900  py-4 px-6 space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Selecionar convidados</h2>
                        <button onClick={closeGuestsModal}><X className='size-5 text-400' /></button>
                    </div>
                    <p className='text-sm text-zinc-400'>
                        Os convidados irão receber e-mails para confirmar se participarão da viagem.
                    </p>
                </div>
                <div className='flex flex-wrap gap-2'>
                    {emailsToInvite.map(email => {
                        return (
                            <div className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'>
                                <span className='text-zinc-300'>{email}</span>
                                <button onClick={() => removeEmail(email)} type='button'><X className='size-4' /></button>
                            </div>
                        )
                    })}
                </div>
                <div className='w-full h-px bg-zinc-800'></div>
                <form onSubmit={addNewEmailToInvite} className='p-2.5 bg-zinc-950 border rounded-lg border-zinc-800 flex items-center gap-2'>
                    <AtSign className='size-5 text-zinc-400' />
                    <input
                        type="email"
                        name='email'
                        className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
                        placeholder='Digite o email do convidado'
                    />
                    <Button variant="primary" type="submit">
                        Convidar <Plus className='size-5' />
                    </Button>
                </form>
            </div>
        </div>
    )
}