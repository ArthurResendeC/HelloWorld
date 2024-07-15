import { User, X } from "lucide-react"
import { FormEvent } from "react"
import { Button } from "../../components/Button"
import { DateRange } from "react-day-picker"
import { format } from "date-fns"

interface ConfirmTripModalProps {
    closeConfirmTripModal: () => void
    createTrip: (ev: FormEvent<HTMLFormElement>) => void
    setOwnerName: (name:string) => void
    setOwnerEmail: (email:string) => void
    destination: string;
    eventStartAndEndDates: DateRange|undefined
}

export function ConfirmTripModal({ closeConfirmTripModal, createTrip, setOwnerEmail, setOwnerName, destination, eventStartAndEndDates }: ConfirmTripModalProps) {
    const displayedDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to
        ? format(eventStartAndEndDates.from, "d' de ' LLL").concat(' até ').concat(format(eventStartAndEndDates.to, "d' de ' LLL"))
        : null
    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl shadow-shape bg-zinc-900  py-4 px-6 space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Confirmar criação de viagem</h2>
                        <button onClick={closeConfirmTripModal}><X className='size-5 text-400' /></button>
                    </div>
                    <p className='text-sm text-zinc-400'>
                        Para concluir a criação da viagem para <span className='text-zinc-100 font-semibold'>{destination}</span> nas datas de <span className='font-semibold text-zinc-100'>{displayedDate}</span> preencha os seus dados abaixo:
                    </p>
                </div>

                <form onSubmit={createTrip} className='space-y-3'>
                    <div className='h-14 px-4 bg-zinc-950 border rounded-lg border-zinc-800 flex items-center gap-2'>
                        <User className='size-5 text-zinc-400' />
                        <input
                            type="text"
                            name='name'
                            className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
                            placeholder='Digite o seu nome completo'
                            onChange={event => setOwnerName(event.target.value)}
                        />
                    </div>
                    <div className='h-14 px-4 bg-zinc-950 border rounded-lg border-zinc-800 flex items-center gap-2'>
                        <User className='size-5 text-zinc-400' />
                        <input
                            type="email"
                            name='email'
                            className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
                            placeholder='Seu email pessoal'
                            onChange={event => setOwnerEmail(event.target.value)}
                        />
                    </div>
                    <Button variant="primary" type="submit" size="full">
                        Confirmar criação da viagem
                    </Button>
                </form>
            </div>
        </div>
    )
}