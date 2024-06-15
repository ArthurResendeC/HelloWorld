import { createContext } from "react";
interface UserProps{
    name:string;
    email:string;
}

const initialValue:UserProps = {
    name:'',
    email:''
}
// Criação do contexto
const UserContext = createContext<UserProps>(initialValue);

export default UserContext;