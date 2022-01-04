/** @jsxImportSource @emotion/react */
import { Input, Select,  Form} from 'antd';
import React  from 'react'

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
    return (
        <Form css={{ marginBottom: '2rem' }} layout={'inline'}>
            <Form.Item>
                <Input value={param.name} onChange={ e => setParam({
                    ...param,
                    name:e.target.value  
                })}/>
            </Form.Item>
            <Form.Item>
                <Select 
                    value={param.personId} 
                    onChange={ value => setParam({
                        ...param,
                        personId:value
                    })
                }>
                    <Select.Option value={""}>负责人</Select.Option>
                    {
                        users.map((user:User) => <Select.Option value={user.id} key={user.id}>{user.name}</Select.Option>)
                    }

                </Select>
            </Form.Item>
        </Form>
    )
} 