import React  from 'react'
import { SearchPancel } from "./serch-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { cleanObject, useMount, useDebounce } from 'screens/utils';
import * as qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () =>{
    // list
    const [list, setList] = useState([])

    const [param,setParam] = useState({
        name:'',
        personId:''
    })
    
    // select
    const [users, setUsers] = useState([])

    const debounceParam = useDebounce(param, 2000)

    // param变化的时候请求项目列表的接口  加一个依赖 意思是param改变的时候进行获取接口
    useEffect(() => {
        //请求接口
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async response => {
            if (response.ok) {
                // json()返回一个被解析为J SON格式的promise对象
                setList(await response.json())
            }
        })
    }, [debounceParam])

    useMount(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json())
            }
        })
    })

    return <div>
        <SearchPancel users={users} param={param} setParam={setParam}></SearchPancel>
        <List users={users} list={list}></List>
    </div>
}
