import {useAsync} from 'utils/use-async';
import {Project} from 'screens/project-list/list'
import { useEffect } from "react";
import { cleanObject } from 'utils/index';
import { useHttp } from 'utils/http';

export const useProjects = (param?: Partial<Project>) => {
    const client = useHttp()
    const {run,...result} = useAsync<Project[]>()
    // param变化的时候请求项目列表的接口  加一个依赖 意思是param改变的时候进行获取接口
    useEffect(() => {
        run(client('projects',{data:cleanObject( param || {})}))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [param])
    return result
}