import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";
 
export const LoginScreen = () => {

    const {login, user} = useAuth()
    // const login = (param:{username:string,password:string}) =>{
    //     //请求接口
    //     fetch(`http://localhost:3001/register`,{
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify(param)
    //     }).then(async response => {
    //         if (response.ok) { 
                
    //         } 
    //     })
    // }
    
    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        login({username,password})
    }

    return <form onSubmit={handleSubmit}>
        {user?<div>登录成功，用户名{user?.name}</div>:''}
        
        <div>
            <label htmlFor="username">用户名</label>
            <input type="text" id={'username'}/>
        </div>
        <div>
            <label htmlFor="passward">密码</label>
            <input type="text" id={'passward'}/>
        </div>
        <button type={"submit"}>注册</button>
    </form>
}