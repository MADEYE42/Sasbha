import { create } from "zustand";
interface User{
    name:string;
    setName:(name:string)=>void;
}
export const useUser = create<User>((set)=>({
    name:'',
    setName:(name:string)=>set({name}),
}));
export default useUser