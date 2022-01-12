import styled from '@emotion/styled';
import React  from 'react'
import { SearchPancel } from "./serch-panel";
import { List } from "./list";
import {useState } from "react";
import {useDebounce, useDocumentTitle } from '../../utils';
import { Typography } from 'antd';
import { useProjects } from 'utils/project';
import { useUsers } from 'utils/user';
// import { Helmet } from 'react-helmet';

// const apiUrl = process.env.REACT_APP_API_URL
// console.log(apiUrl)
// s.stringify(cleanObject(debounceParam))
// console.log(qs.stringify(cleanObject({name:123,age:'12'})))
 
export const ProjectListScreen = () =>{
    // const [users, setUsers] = useState([])
    const [param,setParam] = useState({
        name:'',
        personId:''
    })
    const debounceParam = useDebounce(param, 200)
    const {isLoading,error,data:list } = useProjects(debounceParam)
    const {data:users} = useUsers()
    useDocumentTitle('项目列表')

    return <Container>
        {/* 动态修改title */}
        {/* <Helmet>
            <title>项目列表</title>
        </Helmet> */}
        <h1>项目列表</h1>
        <SearchPancel users={users || []} param={param} setParam={setParam}></SearchPancel>
        {error ? (<Typography.Text type={'danger'}>{error.message}</Typography.Text>) : null}
        <List loading={isLoading} users={users || []} dataSource={list || []}></List>
    </Container>
}

const Container = styled.div`
  padding: 3.2rem;
`;
