import React from "react";

interface MyInputLabel extends React.InputHTMLAttributes<HTMLInputElement> {
    labelFor: string
    labelText: string
}

export default function MyInput(props: MyInputLabel) {
    return (
        <div className="flex flex-col gap-2 w-60">
            <label
                htmlFor={props.labelFor}
            >
                {props.labelText}
            </label>
            <input
                {...props}
                className="rounded p-2 focus:outline-none bg-neutral-800"
                name={props.labelFor}
                required
            />
        </div>
    )
}