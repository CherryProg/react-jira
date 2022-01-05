import React from 'react'

type FallbackRender = (props:{error:Error | null}) => React.ReactElement
// 错误边界需要一定要用class compone nt来实现
// 使用react定义的泛型<{children:ReactNode,fallbackRender:FallbackRender}>
export class ErrorBoundary extends React.Component<React.PropsWithChildren<{fallbackRender:FallbackRender}>,{error:Error | null}>{
    state = {error:null}

    static getDerivedStateFromError(error:Error){
        return {error}
    }

    render(){
        const {error} = this.state
        const {fallbackRender,children} = this.props
        if(error){
            return fallbackRender({error})
        }
        return children
    }
}