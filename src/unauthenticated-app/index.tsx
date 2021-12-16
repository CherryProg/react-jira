import React, { useState }from "react"
import { LoginScreen } from "./login"
import { RegisterScreen } from "./register"
import { Card } from 'antd'


// 入口文件
export const UnauthenticatedApp = () => {
    const [isRegister,setIsRegister] = useState(false)
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <Card>
                {
                    isRegister ? <RegisterScreen/> : <LoginScreen/>
                }
                <button onClick={() => setIsRegister(!isRegister)}>
                    {isRegister? '已经有账号了？直接登录': '没有账号？注册新账号'}
                </button>
            </Card>
            
        </div>
    );
}