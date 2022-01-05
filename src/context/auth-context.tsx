import React, {ReactNode} from "react"
import * as auth from 'auth-provider'
import { User } from "screens/project-list/serch-panel"
import { http } from "utils/http"
import { useMount } from "utils"
import { useAsync } from "utils/use-async"
import { FullPageErrorFallback, FullPageLoading } from "components/lib"

interface AuthForm {
    username:string,
    password:string
}

// 初始化usr
const bootstrapUser = async () => {
    let user = null
    const token = auth.getToken()
    if(token){
        const data = await http('me',{token})
        user = data.user
    }
    return user
}

const AuthContext = React.createContext<{
    user:User | null,
    login:(from:AuthForm) => Promise<void>,
    register:(from:AuthForm) => Promise<void>,
    logout:() => Promise<void>,
} | undefined>(undefined)

AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({children}:{children:ReactNode}) => {
    console.log(111)
    // const [user,setUser] = useState<User | null>(null)

    const {data:user,error,isLoading,isIdle,isError,run,setData:setUser} = useAsync<User | null>()

    // 函数式编程 point free
    const login = (form:AuthForm) => auth.login(form).then(setUser)

    const register = (form:AuthForm) => auth.register(form).then(setUser)

    const logout = () => auth.logout().then(()=>setUser(null))

    useMount(()=>{
        // bootstrapUser().then(setUser)
        run(bootstrapUser())
    })

    if(isIdle || isLoading){
        return <FullPageLoading></FullPageLoading>
    }
    if(isError){
        return <FullPageErrorFallback error={error}></FullPageErrorFallback>
    }
    return <AuthContext.Provider children={children} value={{user,login,register,logout}}/>

}

export const useAuth = () => {
    const context = React.useContext(AuthContext)
    if(!context){
        throw new Error('useAuth必须在AuthProvider中使用')
    }
    return context
}