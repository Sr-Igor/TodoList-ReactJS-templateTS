import * as C from './AppStyles'
import { useState } from 'react'
import { ListItem } from './Types/ListItem'
import { ListItemUn } from './Components/ListItemUn'

function App() {

  let InitialList = localStorage.getItem("TodoList")

  const [list, setList] = useState<ListItem[]>([
    {id: 1, body: "Tarefa1", done: false},
    {id: 2, body: "Tarefa2", done: false}
  ])


  return(
    <C.Container>
    <C.Area>
      <h1>Todo List</h1>

      {/* {Area de nova tafera} */}

      {list.map((item, index) => (
        <ListItemUn key={index} item={item} />
      ))}
    </C.Area>
    </C.Container>
  )
}

export default App
