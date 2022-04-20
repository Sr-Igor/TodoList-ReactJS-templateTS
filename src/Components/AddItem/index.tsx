import { ChangeEvent, useState } from 'react'
import * as C from './style'

type Props = {
    onAdd: (task: string) => void
}

export const AddItem = ({onAdd} : Props) => {

    const [ state, setState] = useState("")

    const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }

    const hadleKeyUp = (e: KeyboardEvent) =>{
        if(e.code == "Enter" && state !== ""){
            onAdd(state)
            setState("")
        }
    }


    return(
        <C.InputAdd>
            <span>+</span>
            <input type='text' value={state} placeholder='Adicione uma nova tarefa' onKeyUp={hadleKeyUp} onChange={handleInputValue}></input>
        </C.InputAdd>
    )
}