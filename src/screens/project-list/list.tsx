import React  from 'react'
import { User } from './serch-panel'

interface Project {
    id:string,
    name:string,
    personId:string,
    pin:boolean,
    organization:string
}
interface ListProps {
    list:Project[],
    users:User[],
}
export const List = ({users,list}:Li stProps)=>{
    return <table>
        <thead>
            <tr>名称</tr>
            <tr>负责人</tr>
        </thead>
        <tbody>
            {
                list.map( item => <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>
                        {users.find(user => user.id == item.personId)?.name || ''}
                    </td>
                </tr>)
            }
        </tbody>
    </table>
}