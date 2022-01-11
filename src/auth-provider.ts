// 在真实环境中，如果使用firebase这种第三方auth服务的话，本文件不需要开发者开发
import { User } from "screens/project-list/serch-panel";

const apiUrl = process.env.REACT_APP_API_URL;

const localStorageKey = '__auth_provider_token__'

export const getToken = () => window.localStorage.getItem(localStorageKey);

// 设置token
export const handleUserResponse = ({user} : {user:User}) => {
    window.localStorage.setItem(localStorageKey,user.token || '')
    return user
}

// API
// 注册
export const register = (data: { username: string; password: string }) => {
    return fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(async response => {
        if (response.ok) {
            return handleUserResponse(await response.json());
        } else {
            return Promise.reject(await response.json());
        }
    });
};

// 登录
export const login = (data: { username: string; password: string }) => {
    return fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
    }).then(async response => {
        if (response.ok) {
            console.log('res',response)
            // 保存下来
            return handleUserResponse(await response.json());
        } else { 
            // 直接抛出个错
            return Promise.reject(await response.json());
        }
    });
};

// 登出
export const logout = async () => window.localStorage.removeItem(localStorageKey);