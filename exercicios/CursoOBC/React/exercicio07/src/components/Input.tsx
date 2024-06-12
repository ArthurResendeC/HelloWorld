import React from "react";

interface MyInputLabel extends React.InputHTMLAttributes<HTMLInputElement> {
    labelFor: string
    labelText: string
}

export default function MyInput(props: MyInputLabel) {
    return (
        <div className="flex flex-col gap-2">
            <label
                className="text-3xl"
                htmlFor={props.labelFor}
            >
                {props.labelText}
            </label>
            <input
                {...props}
                className="rounded-lg p-2 border-2 border-black bg-neutral-900 "
                type={props.type}
                name={props.name}
                required
            />
        </div>
    )
}