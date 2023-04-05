import * as C from './styles';
import { Item } from '../../types/Item';
import imageDelete  from '../../images/delete.svg';
import imageEdit from '../../images/edit.svg';

type Props = {
  item: Item,
  onChange: (id: number, done: boolean) => void
  deleteTask: (id: number) => void
}

export const ListItem = ({ item, onChange, deleteTask }: Props) => {

  return (
    <C.Container done={item.done}>
      <div className="checkRectangle">
        <input
          type="checkbox"
          checked={item.done}
          onChange={e => onChange(item.id, e.target.checked)}
        />
      </div>
      <label>{item.task}</label>
      <C.Icons>
        <img 
          src={imageDelete}
          alt="Icone para deletar"
          onClick={() => deleteTask(item.id)}
        />
        <img src={imageEdit} alt="Icone para editar"/>
      </C.Icons>
    </C.Container>
  );
}