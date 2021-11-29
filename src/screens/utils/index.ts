import { useEffect } from "react";

export const isFalsy = (value) => value === 0 ? false : !value

export const cleanObject = (object) => {
    const result = {...object}
    Object.keys(object).forEach(key=>{
        const value = object[key];
        if(isFalsy(value)){
            delete result[key]
        }
    })
}
export const useMount = (callback)=>{
    useEffect(()=>{
        callback()
    },[])
}

export const useDebounce = (value, delay) => {
    // 定义一个内部state hook来对传入进来的参数value进行管理
    const [debounceValue, setDebounceValue] = useState(value)
    // 每当输入框传入的value变化时，Effect hook就会设置一个定时器，
    // 在delay时间后操作state hook更新从外界传入的debounceVlue中的value值，
    // 当此定时器执行完毕后 Effect再清理定时器 最后将处理后的value return出去
    useEffect(() => {
        const timeout = setTimeout(() =>
            setDebounceValue(value), delay)
        return () => clearTimeout(timeout)
    }, [value, delay])
    return debounceValue
}