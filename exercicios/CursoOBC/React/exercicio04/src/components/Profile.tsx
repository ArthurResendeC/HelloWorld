import ButtonLink from "./ButtonLink";
import Separation from "./SeparationHr";
import React, { useState } from "react";

interface ProfileProps {
    avatar: string
    name: string
    bio: string
    email: string;
    phone: string;
    githubUrl: string
    linkedinUrl: string;
    twitterUrl: string
}


export function Profile(props: ProfileProps) {

    function useCounter() {
        const [count, setCount] = useState(0)

        const increment = ()=>{
            setCount((currentState:number)=> currentState + 1)
        }

        return {count, increment}
    }

    const {count, increment} = useCounter()

    const [followText, setFollowText] = useState('Follow')
    //[Valor, funçãoModificadora]
    function handleClick(evt: React.SyntheticEvent) {
        //Your event handlers will be passed instances of SyntheticEvent, a cross-browser wrapper around the browser’s native event. It has the same interface as the browser’s native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers.
        if (followText === 'Follow') {
            setFollowText('following')
        } else {
            setFollowText('Follow')
        }
        console.log(evt);
    }

    return (
        <div className="flex flex-col w-1/3 h-full my-2 bg-white rounded-2xl items-center justify-center gap-3">
            <img width={90} src={props.avatar} alt="ProfilePicture" />
            <div className="flex flex-row-reverse items-center gap-4">
                <button className="p-2 bg-gray-400 rounded-lg w-32" onClick={handleClick}>
                    {followText}
                </button>
                <h2 className="font-semibold text-xl">{props.name}</h2>
            </div>
            <Separation />
            <p className="text-justify">{props.bio}</p>
            <Separation />
            <p>{props.email}</p>
            <Separation />
            <p>{props.phone}</p>
            <Separation />
            <ButtonLink id='Teste' link={props.githubUrl} text="Github"></ButtonLink>
            <ButtonLink link={props.linkedinUrl} text="LinkedIn"></ButtonLink>
            <ButtonLink link={props.twitterUrl} text="Twitter"></ButtonLink>
            <button className="bg-cyan-300 p-2 rounded-lg w-2/5" onClick={increment}>Contador: {count} </button>
        </div>
    )
}