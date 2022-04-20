import * as C from './AppStyles'
import { useState } from 'react'
import { ListItem } from './Types/ListItem'
import { ListItemUn } from './Components/ListItemUn'
import { AddItem } from './Components/AddItem'

function App() {

  let localStorageNull = localStorage.getItem("TodoList")

  let InitialList = localStorageNull !== null ?  JSON.parse(localStorage.getItem("TodoList")) : [
    {id: 1, body: "Tarefa1", done: false},
    {id: 2, body: "Tarefa2", done: false}
]

  const [list, setList] = useState<ListItem[]>(InitialList)

  const handleList = (newElement : string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      body: newElement,
      done: false,
    })
    setList(newList)
  }



  return(
    <C.Container>
    <C.Area>
      <h1>Todo List</h1>

      <AddItem onAdd={handleList}/>

      {list.map((item, index) => (
        <ListItemUn key={index} item={item} />
      ))}
    </C.Area>
    </C.Container>
  )
}

export default App
