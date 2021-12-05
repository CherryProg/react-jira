import React  from 'react'  
import { SearchPancel } from "./serch-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { cleanObject, useMount, useDebounce } from '../../utils';
import * as qs from "qs";
import { http, useHttp } from 'utils/http';

// const apiUrl = process.env.REACT_APP_API_URL
// console.log(apiUrl)
// s.stringify(cleanObject(debounceParam))
// console.log(qs.stringify(cleanObject({name:123,age:'12'})))
 
export const ProjectListScreen = () =>{
    // list
    const [list, setList] = useState([])

    const [param,setParam] = useState({
        name:'',
        personId:''
    })
    
    // select
    const [users, setUsers] = useState([])

    const debounceParam = useDebounce(param, 200)

    // http hock
    const client = useHttp()

    // param变化的时候请求项目列表的接口  加一个依赖 意思是param改变的时候进行获取接口
    useEffect(() => {
        client('projects',{data:cleanObject(debounceParam)}).then(setList)
    }, [debounceParam])

    useMount(() => {
        client('users').then(setUsers)
    })

    return <div>
        <SearchPancel users={users} param={param} setParam={setParam}></SearchPancel>
        <List users={users} list={list}></List>
    </div>
}
