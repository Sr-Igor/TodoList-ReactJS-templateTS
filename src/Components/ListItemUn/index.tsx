import { ChangeEvent, useState } from 'react'
import { ListItem } from '../../Types/ListItem'
import * as C from './style'

type Props = {
    item: ListItem
}

export const ListItemUn = ({item} : Props) => {
    const [isChecked, setCheck] = useState(item.done)

    const handleCheckBox = (e) => {
        setCheck(e.target.checked)
    }

    return(
        <C.ListItemBox isChecked={isChecked}>
            <input  type="checkbox" checked={isChecked} onChange={handleCheckBox} />
            <label>{item.body}</label>
        </C.ListItemBox>
    )
}