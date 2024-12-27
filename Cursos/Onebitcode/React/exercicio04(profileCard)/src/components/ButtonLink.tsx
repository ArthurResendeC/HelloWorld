import React from "react"
interface ButtonLink extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    link: string;
    text: string;
}

export default function ButtonLink(props: ButtonLink) {
    return (
        <a
            {...props}
            className="text-white hover:-translate-y-1 bg-gradient-to-r from-blue-400 to-purple-500 transition-all font-bold p-2 w-2/5 my-1 text-center rounded-xl"
            href={props.link}
            target="_blank">
            {props.text}
        </a>
    )
}
