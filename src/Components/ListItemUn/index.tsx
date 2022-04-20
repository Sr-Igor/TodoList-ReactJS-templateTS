import { ChangeEvent, useState } from 'react'
import { ListItem } from '../../Types/ListItem'
import * as C from './style'

type Props = {
    item: ListItem
}

export const ListItemUn = ({item} : Props) => {
    const [isChecked, setCheck] = useState(item.done)

    const handleCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
        setCheck(e.target.checked)
        let InitialList = JSON.parse(localStorage.getItem("TodoList"))
        for (let i in InitialList){
            if(InitialList[i].id == item.id){
                InitialList[i].done = e.target.checked
                localStorage.setItem("TodoList", JSON.stringify(InitialList))
            }
        }
    }

    return(
        <C.ListItemBox isChecked={isChecked}>
            <input  type="checkbox" checked={isChecked} onChange={handleCheckBox} />
            <label>{item.body}</label>
        </C.ListItemBox>
    )
}