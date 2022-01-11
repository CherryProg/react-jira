import React, { useState }from "react"
import { LoginScreen } from "./login"
import { RegisterScreen } from "./register"
import { Card, Divider, Button, Typography } from 'antd'
import styled from '@emotion/styled'
import left from 'assets/left.svg';
import logo from 'assets/logo.svg';
import right from 'assets/right.svg';
// 类型声明文件和库本身是分离的,库使用js写的
import {Helmet} from "react-helmet"; 

// 入口文件
export const UnauthenticatedApp = () => {
    // isRegister用来在login和register两个状态之间切换，默认是登录界面
    const [isRegister,setIsRegister] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Header />
            <Background />
            <Button onClick={()=>{
                throw new Error('点击抛出一个异常')
            }}>抛出异常</Button>
            <ShadowCard>
                <Title>{isRegister ? '请注册' : '请登录'}</Title>
                {error ? (<Typography.Text type={"danger"}>{error.message}</Typography.Text>) : null}
                {isRegister ? (<RegisterScreen onError={setError}/>) : (<LoginScreen onError={setError}/>)}
                <Divider />
                <Button type={'link'} onClick={() => setIsRegister(!isRegister)}>
                    {isRegister? '已经有账号了？直接登录': '没有账号？注册新账号'}
                </Button>
            </ShadowCard>
            
        </Container>
    );
}

export const LongButton = styled(Button)`
    width: 100%;
`;

const Title = styled.h2`
    margin-bottom: 2.4rem;
    color: rgb(94, 108, 132);
`;

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: left bottom, right bottom;
    background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
        calc(((100vw - 40rem) / 2) - 3.2rem), cover;
    background-image: url(${left}), url(${right});
`;

const Header = styled.header`
    background: url(${logo}) no-repeat center;
    padding: 5rem 0;
    background-size: 8rem;
    width: 100%;
`;

const ShadowCard = styled(Card)`
    width: 30rem;
    min-height: 40rem;
    padding: 3.2rem 4rem;
    border-radius: 0.3rem;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
    text-align: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`;


