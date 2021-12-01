import {useArray, useMount} from 'utils';

export const TsReactTest = () => {
    const persons:{name:string;age:number}[] = [
        {name:'yq',age:24},
        {name:'jzx',age:24},
    ];
    const {value, clear, removeIndex, add} = useArray(persons);
    useMount(()=>{

    });
    return (
        <div>
            <button onClick={()=>add({name:'yaya',age:22})}>add yaya</button>
            <button onClick={()=>removeIndex(0)}>remove 0</button>
            <button onClick={()=>clear()}>clear</button>
            {value.map((person,index)=>(
                <div>
                    <span>{index}</span>
                    <span>{person.name}</span>
                    <span>{person.age}</span>
                </div>
            ))}
        </div>
    )
}