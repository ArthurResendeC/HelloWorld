interface MyInput extends React.InputHTMLAttributes<HTMLInputElement> {
    passwordSize:number
    setPasswordSize:React.Dispatch<React.SetStateAction<number>>
}


export default function Input(props: MyInput) {
    return (
        <input
            className="bg-slate-500 ps-1"
            type='number'
            name="passwordSize"
            min={1}
            value={props.passwordSize}
            onChange={(ev) => {
                const value = +(ev.target.value)
                if (!isNaN(value)) {
                    props.setPasswordSize(value)
                }
            }}
        />
    )
}