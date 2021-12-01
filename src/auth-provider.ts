import { User } from "screens/project-list/serch-panel";

const localStorageKey = '__auth_provider_token__'

export const handleUserResponse = ({user} : {user:User}) => {
    window.localStorage.setItem(localStorageKey,user.token || '')
    return user
}

export const login = (data:{username:string,password:string}) => {
    return fetch(`http://localhost:3001/login`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }).then(async response => {
        if (response.ok) { 
            return handleUserResponse(await response.json())
        }else{
            return Promise.reject(data);
        }
    })
}

export const register = (data:{username:string,password:string}) => {
    return fetch(`http://localhost:3001/register`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }).then(async response => {
        if (response.ok) { 
            return handleUserResponse(await response.json())
        }else{
            return Promise.reject(data);
        }
    })
}

export const logout = async () => window.localStorage.removeItem(localStorageKey);