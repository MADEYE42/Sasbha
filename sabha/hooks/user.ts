import { create } from "zustand";
interface User{
    name:string;
}
export const useUser = create<User>((set)=>({
    name:'',
    setName:(name:string)=>set({name}),
}))