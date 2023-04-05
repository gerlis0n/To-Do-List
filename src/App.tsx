import { useState } from 'react';
import * as C from './styles'; // Components
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea/index';

export const Main = () => {
  const [list, setList] = useState<Item[]>([]);
  
  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      task: taskName,
      done: false
    });
    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  const deleteTask = (id: number) => {
    var filtered = list.filter((item) => item.id === id)
  };

  return (
    <C.Body>
      <C.Container>
        <AddArea onEnter={handleAddTask} />
        <C.TaskBoard>
          Tarefas a fazer
          Tarefas concluídas
        </C.TaskBoard>
        <C.Tasks >
          {list.map((item, index) => (
            <ListItem 
              key={index}
              item={item}
              onChange={handleTaskChange}
              deleteTask={deleteTask}
            />
          ))}
        </C.Tasks>
      </C.Container>
    </C.Body>
  );
}