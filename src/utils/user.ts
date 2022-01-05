import { useEffect } from "react";
import { User } from "screens/project-list/serch-panel";
import { cleanObject } from "utils";
import { useHttp } from "utils/http";
import { useAsync } from "utils/use-async";

export const useUsers = (param?:Partial<User>) => {
    const client = useHttp()
    const {run, ...result} = useAsync<User[]>()
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        run(client('users',{data:cleanObject( param || {})}))
    }, [param])
    return result
}