import { useState } from "react";

export function OptionBtn() {

    function generateRandomPassword(): string {
        const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';
        
        const allCharacters = upperCaseLetters + lowerCaseLetters + numbers + specialCharacters;
        
        function getRandomInt(max: number): number {
            return Math.floor(Math.random() * max);
        }
        
        const length = 12;
        
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = getRandomInt(allCharacters.length);
            password += allCharacters[randomIndex];
        }
        
        return password;
    }

    function useGeneratePassword() {
        const [generatedPassword, getNewPassword] = useState('')

        const generate = ()=>{
            getNewPassword(() => generateRandomPassword())
        }

        return{generatedPassword, generate}
    }

    function useCopyBtnState(){
        const [newStateA, changeStateA] = useState('Copiar senha')

        const changeA = () =>{
            changeStateA('Senha copiada!')
            setTimeout(()=>{
                changeStateA('Copiar senha')
            }, 2.5 * 1000)
        }

        return {newStateA, changeA}
    }

    const {newStateA, changeA} = useCopyBtnState()

    function usePasswordBtnState(){
        const [newState, changeState] = useState('Gerar senha')

        const change = () => {
            changeState('Senha gerada');
            setTimeout(() => {
                changeState('Gerar senha');
            }, 3.5 * 1000);
        }

        return {newState, change}
    }

    const {newState, change} = usePasswordBtnState()

    const {generatedPassword, generate} = useGeneratePassword()

    function doStuff(){
        generate()
        change()
    }

    return (
        <div className="w-full h-screen flex flex-col py-12 items-center bg-slate-800">
            <div className="flex h-12 gap-4">
                <button
                    onClick={doStuff}
                    className="p-2 bg-black text-white border border-black  active:border-blue-300 rounded-lg">
                    {newState}
                </button>
                <button onClick={changeA} className="p-2 bg-black text-white active:border-blue-700 rounded-lg">
                    {newStateA}
                </button>
            </div>
            <span className="text-white font-bold my-2">{generatedPassword}</span>
        </div>
    )
}