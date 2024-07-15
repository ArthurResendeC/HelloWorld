import { Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../components/Button";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { format } from "date-fns";
import { UpdateTripModal } from "./update-trip-modal";

export interface Trip {
    id: string;
    destination: string;
    starts_at: string;
    ends_at: string;
    is_confirmed: boolean
}

export function DestinationHeader() {
    const { tripId } = useParams()
    const [trip, setTrip] = useState<Trip | undefined>()
    const [isUpdateTripModalOpen, setIsUpdateTripModalOpen] = useState(false)

    function openUpdateTripModal(){
        setIsUpdateTripModalOpen(true)
    }
    function closeUpdateTripModal(){
        setIsUpdateTripModalOpen(false)
    }

    useEffect(() => {
        api.get(`/trips/${tripId}`).then(response => setTrip(response.data.trip)
        )
    }, [tripId])

    const displayedDate = trip
        ? format(trip.starts_at, "d' de ' LLL").concat(' até ').concat(format(trip.ends_at, "d' de ' LLL"))
        : null

    return (
        <article className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between ">
            <div className="flex items-center gap-2">
                <MapPin className="size-5 text-zinc-400" />
                <span className=" text-zinc-100">{trip?.destination}</span>
            </div>
            <div className="flex items-center gap-5">
                <Calendar className="size-5 text-zinc-400" />
                <span className=" text-zinc-100">{displayedDate}</span>
                <div className='w-px h-6 bg-zinc-800'></div>
                <Button variant="secondary" onClick={openUpdateTripModal}>
                    Alterar local/data
                    <Settings2 className='size-5' />
                </Button>
            </div>
           {isUpdateTripModalOpen && (
            <UpdateTripModal closeCreateUpdateTripModal={closeUpdateTripModal}/>
           )}
        </article>
    )
}