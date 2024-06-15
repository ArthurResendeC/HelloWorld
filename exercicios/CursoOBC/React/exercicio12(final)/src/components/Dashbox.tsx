interface DashboxProps {
    textContent: string;
    highlightedNumber: number;
}

export default function Dashbox(props: DashboxProps) {

    return (
        <article className="bg-neutral-800 rounded-lg drop-shadow flex flex-col ps-1 pt-6 w-72 h-36 mt-4">
            <p className="ps-6">{props.textContent}</p>
            <p className="pt-4 text-5xl text-center font-semibold">{props.highlightedNumber}</p>
        </article>
    )
}