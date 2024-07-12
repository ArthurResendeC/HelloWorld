import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./importantLinks";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationHeader } from "./destination-header";

export function TripDetailsPage() {
    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)
    function openCreateACtivityModal() {
        setIsCreateActivityModalOpen(true)
    }
    function closeCreateACtivityModal() {
        setIsCreateActivityModalOpen(false)
    }
    return (
        <section className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <DestinationHeader/>
            <article className="flex gap-16 px-4">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between ">
                        <h2 className="text-3xl font-semibold ">Atividades</h2>
                        <button
                            onClick={openCreateACtivityModal}
                            className='bg-lime-500 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-600'
                        >
                            <Plus className='size-5' />
                            Cadastrar Atividade
                        </button>
                    </div>
                    <Activities/>
                </div>
                <div className="w-80 space-y-6">
                    <ImportantLinks />
                    <div className='w-full h-px bg-zinc-800'></div>
                    <Guests/>
                </div>
            </article>
            {isCreateActivityModalOpen && (
                <CreateActivityModal closeCreateACtivityModal={closeCreateACtivityModal} />
            )}
        </section>
    )
}