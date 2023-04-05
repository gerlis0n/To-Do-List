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
    const filtered = [...list].filter(list => list.id !== id)
    setList(filtered);
  };

  return (
    <C.Body>
      <C.Container>
        <AddArea onEnter={handleAddTask} />
          {list.map((item, index) => (
            <ListItem
              key={index}
              item={item}
              onChange={handleTaskChange}
              deleteTask={deleteTask}
            />
          ))}
      </C.Container>
    </C.Body>
  );
}