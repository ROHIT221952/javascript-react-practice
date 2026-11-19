import {createContext,useState,useEffect} from 'react'; import {useLocalStorage} from '../../shared/useLocalStorage';
export const AuthContext=createContext(null);
const demo=[{id:1,name:'Rohit Kumar',email:'admin@teamhub.dev',password:'Admin123!',role:'Admin'},{id:2,name:'Neha Sharma',email:'employee@teamhub.dev',password:'Employee123!',role:'Employee'}];
const delay=()=>new Promise(r=>setTimeout(r,500));
export function AuthProvider({children}){const [session,setSession]=useLocalStorage('teamhub-session',null);const [loading,setLoading]=useState(false);
useEffect(()=>{},[]);
async function login({email,password}){setLoading(true);await delay();const found=demo.find(x=>x.email===email&&x.password===password);setLoading(false);if(!found)throw Error('Email or password is incorrect');const {password:secret,...user}=found;setSession({user,token:'demo-token-'+found.id});}
function logout(){setSession(null)}
return <AuthContext.Provider value={{user:session?.user||null,token:session?.token||null,loading,login,logout}}>{children}</AuthContext.Provider>}
