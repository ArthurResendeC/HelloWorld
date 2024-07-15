import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/Button";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { AddLinkModal } from "./add-link-modal";

interface Link {
    title: string;
    url: string
}

export function ImportantLinks() {
    const { tripId } = useParams()
    const [links, setlinks] = useState<Link[]>([])
    const [isAddLinkModalOpen, setIsAddLinkModalOpen] = useState(false)

    function openAddLinkModal(){
        setIsAddLinkModalOpen(true)
    }
    function closeAddLinkModal(){
        setIsAddLinkModalOpen(false)
    }

    useEffect(() => {
        api.get(`/trips/${tripId}/links`).then(response => setlinks(response.data.links)
        )
    }, [tripId])
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>
            {links.map(link => {
                return (
                    <div className="space-y-5" key={link.title}>
                        <div className="flex items-center justify-between gap-4">
                            <div className="space-y-1.5 ">
                                <span className="block font-medium text-zinc-400">{link.title}</span>
                                <a href={link.url} className="block text-xs text-zinc-400 truncate hover:text-zinc-200">{link.url}</a>
                            </div>
                            <Link2 className="size-5 text-zinc-400" />
                        </div>
                    </div>
                )
            })}
            <Button variant="secondary" size="full" onClick={openAddLinkModal}>
                <Plus className='size-5 shrink-0' />
                Cadastrar novo link
            </Button>
            {isAddLinkModalOpen && (
                <AddLinkModal closeAddLinkModal={closeAddLinkModal}/>
            )}
        </div>
    )
}