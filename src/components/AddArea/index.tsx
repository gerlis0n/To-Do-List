import * as C from './styles'
import { useState, KeyboardEvent } from 'react';

type Props = {
  onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState('');

  const addTask = () => {
    if (!inputText) return alert("Preencha uma tarefa");
    setInputText('');
    onEnter(inputText);
  }

  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === 'Enter' && inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }
  }

  return (
    <C.Container>
      <input 
        placeholder="Descreva a tarefa aqui"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button onClick={addTask}>Criar tarefa</button>
    </C.Container>
  );
}