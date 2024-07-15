import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { DateRange, DayPicker } from "react-day-picker";
import { format } from "date-fns";

interface CreateUpdateTripModalProps {
    closeCreateUpdateTripModal: () => void
}

export function UpdateTripModal({ closeCreateUpdateTripModal }: CreateUpdateTripModalProps) {

    const { tripId } = useParams()

    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
    const [destination, setDestination] = useState('')
    const [eventStartAndEndDates, setEventStartAndEndDates] = useState<DateRange | undefined>()

    const displayedDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to
        ? format(eventStartAndEndDates.from, "d' de ' LLL").concat(' até ').concat(format(eventStartAndEndDates.to, "d' de ' LLL"))
        : null

    function openDatePicker() {
        setIsDatePickerOpen(true)
    }

    function closeDatePicker() {
        setIsDatePickerOpen(false)
    }

    async function updateTrip() {
        
        await api.put(`/trips/${tripId}`, {
            destination: destination,
            starts_at: eventStartAndEndDates?.from,
            ends_at: eventStartAndEndDates?.to
        })

        window.document.location.reload()
    }

    useEffect(()=>{
        api.get(`/trips/${tripId}`).then((res) =>{
            setDestination(res.data.trip.destination)
        } )
    }, [tripId])

    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl shadow-shape bg-zinc-900  py-4 px-6 space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Alterar local/data</h2>
                        <button onClick={closeCreateUpdateTripModal}><X className='size-5 text-400' /></button>
                    </div>
                    <p className='text-sm text-zinc-400'>
                        Introduza as novas informações da viagem:
                    </p>
                </div>

                <section className='space-y-3'>
                    <div className='h-14 px-4 bg-zinc-950 border rounded-lg border-zinc-800 flex items-center gap-2'>
                        <Tag className='size-5 text-zinc-400' />
                        <input
                            type="text"
                            name='destination'
                            onChange={(ev)=> setDestination(ev.target.value)}
                            className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
                            value={destination}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <div className='h-14 flex-1 px-4 bg-zinc-950 border rounded-lg border-zinc-800 flex items-center gap-2'>
                            <button className='flex items-center gap-2 text-left w-[235px]' onClick={openDatePicker}>
                                <Calendar className='size-5 text-zinc-400' />
                                <span className="text-lg text-zinc-400 w-40 flex-1">
                                    {displayedDate || 'Quando?'}
                                </span>
                            </button>
                            {isDatePickerOpen && (
                                <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
                                    <div className='rounded-xl shadow-shape bg-zinc-900  py-4 px-6 space-y-5'>
                                        <div className='space-y-2'>
                                            <div className='flex items-center justify-between'>
                                                <h2 className='text-lg font-semibold'>Selecione a data:</h2>
                                                <button onClick={closeDatePicker}><X className='size-5 text-400' /></button>
                                            </div>
                                        </div>
                                        <DayPicker mode="range" selected={eventStartAndEndDates} onSelect={setEventStartAndEndDates} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <Button variant="primary" size="full" onClick={updateTrip}>
                        Salvar novas informações
                    </Button>
                </section>
            </div>
        </div>
    )
}