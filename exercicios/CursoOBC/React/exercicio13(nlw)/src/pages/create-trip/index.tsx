import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './invite-guests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationAndDateStep } from './steps/destination-and-date-step'
import { InviteGuestsStep } from './steps/invite-guests-step'
import { DateRange } from 'react-day-picker'
import { api } from '../../lib/axios'

export function CreateTripPage() {

    const navigate = useNavigate()

    const [isGuestsInputsOpen, setIsGuestsInputOpen] = useState(false)
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
    const [emailsToInvite, setEmailsToInvite] = useState(['telodosfoguetes@rocketseat.com'])
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

    const [destination, setDestination] = useState('')
    const [ownerName, setOwnerName] = useState('')
    const [ownerEmail, setOwnerEmail] = useState('')
    const [eventStartAndEndDates, setEventStartAndEndDates] = useState<DateRange | undefined>()



    function openGuestsInput() {
        setIsGuestsInputOpen(true)
    }

    function closeGuestsInput() {
        setIsGuestsInputOpen(false)
    }

    function openGuestsModal() {
        setIsGuestsModalOpen(true)
    }

    function closeGuestsModal() {
        setIsGuestsModalOpen(false)
    }

    function openConfirmtripModal() {
        setIsConfirmTripModalOpen(true)
    }

    function closeConfirmTripModal() {
        setIsConfirmTripModalOpen(false)
    }

    async function createTrip(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault()

        console.log(destination);
        console.log(eventStartAndEndDates);
        console.log(emailsToInvite);
        console.log(ownerName);
        console.log(ownerEmail);

        if (!destination) {
            return 
        }

        if (!eventStartAndEndDates?.from || !eventStartAndEndDates?.to) {
            return
        }

        if (emailsToInvite.length === 0) {
            return
        }

        if (!ownerEmail || !ownerName) {
            return
        }

        const response = await api.post('/trips', {
            destination: destination,
            starts_at: eventStartAndEndDates?.from,
            ends_at: eventStartAndEndDates?.to,
            owner_name: ownerName,
            owner_email: ownerEmail,
            emails_to_invite: emailsToInvite,
        })

        const { tripId } = response.data

        navigate(`/trips/${tripId}`)
    }

    function addNewEmailToInvite(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault()

        const data = new FormData(ev.currentTarget)
        const email = data.get('email')?.toString()

        if (!email) {
            return
        }

        if (emailsToInvite.includes(email)) {
            return
        }

        setEmailsToInvite([
            ...emailsToInvite,
            email
        ])


        ev.currentTarget.reset()
    }

    function removeEmail(emailToRemove: string) {
        const newEmailList = emailsToInvite.filter(invited => invited !== emailToRemove)
        setEmailsToInvite(newEmailList)
    }

    return (
        <section className="h-screen flex justify-center items-center bg-pattern bg-norepeat bg-center ">
            <article className="max-w-3xl w-full px-6 text-center space-y-10 ">
                <div className='flex flex-col items-center justify-center '>
                    <img src="/logo.svg" alt="Plann.er logo" />
                    <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
                </div>

                <div className='space-y-4'>
                    <DestinationAndDateStep
                        closeGuestsInput={closeGuestsInput}
                        isGuestsInputsOpen={isGuestsInputsOpen}
                        openGuestsInput={openGuestsInput}
                        setDestination={setDestination}
                        eventStartAndEndDates={eventStartAndEndDates}
                        setEventStartAndEndDates={setEventStartAndEndDates}
                    />

                    {isGuestsInputsOpen && (
                        <InviteGuestsStep emailsToInvite={emailsToInvite} openConfirmtripModal={openConfirmtripModal} openGuestsModal={openGuestsModal} />
                    )}
                </div>
                <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />com os nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade</a>.</p>
            </article>

            {isGuestsModalOpen && (
                <InviteGuestsModal addNewEmailToInvite={addNewEmailToInvite} closeGuestsModal={closeGuestsModal} emailsToInvite={emailsToInvite} removeEmail={removeEmail}/>
            )}

            {isConfirmTripModalOpen && (
                <ConfirmTripModal
                    closeConfirmTripModal={closeConfirmTripModal}
                    createTrip={createTrip}
                    setOwnerName={setOwnerName}
                    setOwnerEmail={setOwnerEmail}
                />
            )}

        </section>
    )
}