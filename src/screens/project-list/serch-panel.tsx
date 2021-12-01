import React  from 'react'
import {useState,useEffect} from 'react';

export interface User {
    id:string,
    name:string,
    email:string,
    title:string,
    organization:string,
    token:string
}
interface SearchPancelProps {
    users:User[],
    param:{
        name:string;
        personId:string,
    },
    setParam:(param:SearchPancelProps['param'])=>void
}

export const  SearchPancel = ({users,param,setParam}:SearchPancelProps)=>{
    return <form>
        <div>
            <input value={param.name} onChange={ e => setParam({
                ...param,
                name:e.target.value
            })}/>
            <select value={param.personId} onChange={ e => setParam({
                ...param,
                personId:e.target.value
            })}>
                <option>负责人</option>
                {
                    users.map(user => <option value={user.id} key={user.id}>{user.name}</option>)
                }

            </select>
        </div>
    </form>
} 