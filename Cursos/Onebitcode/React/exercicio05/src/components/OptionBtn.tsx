import { useState } from "react";
import Input from "./Input";

export function OptionBtn() {

    const [passwordSize, setPasswordSize] = useState<number>(12)
    const [showInput, setShowInput] = useState<boolean>(false)
    const standartLength = showInput ? passwordSize : 8

    function generateRandomPassword() {
        const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';

        const allCharacters = upperCaseLetters + lowerCaseLetters + numbers + specialCharacters;

        function getRandomInt(max: number): number {
            return Math.floor(Math.random() * max);
        }

        let password = '';
        for (let i = 0; i < standartLength; i++) {
            const randomIndex = getRandomInt(allCharacters.length);
            password += allCharacters[randomIndex];
        }

        setPassword(password)
        setCopyText('Copiar senha')
    }

    const [password, setPassword] = useState<string>('')
    const [copyText, setCopyText] = useState<string>('Copiar senha')

    function copyToClipboard() {
        window.navigator.clipboard.writeText(password)
        setCopyText('Copiado!')
    }

    return (
        <div className="text-white w-full gap-6 h-screen flex flex-col py-12 items-center bg-slate-800">
            <h1 className="text-3xl font-semibold">Gerador de senhas</h1>
            <div className="flex items-center gap-2">
                <label
                    htmlFor="showInput"
                >
                    Customizar tamanho:
                </label>
                <input
                    type="checkbox"
                    id="showInput"
                    checked={showInput}
                    onChange={() => {
                        setShowInput((currentValue) => !currentValue)
                    }}
                />
            </div>
            {showInput ? (
                <div>
                    <label className="mr-2 text-lg" htmlFor="passwordSize">Tamanho:</label>
                    <Input
                        passwordSize={passwordSize}
                        setPasswordSize={setPasswordSize}
                    />
                </div>
            ):
            null }
            <div className="flex h-12 gap-4">
                <button
                    onClick={generateRandomPassword}
                    className="p-2 w-56 bg-black text-white border border-black  active:border-blue-300 rounded-lg">
                    Gerar senha de {standartLength} caracteres
                </button>
                <button onClick={copyToClipboard} className="w-40 p-2 bg-black text-white active:border-blue-700 rounded-lg">
                    {copyText}
                </button>
            </div>
            <span className="text-white font-bold my-2">{password}</span>
        </div>
    )
}