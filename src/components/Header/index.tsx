import * as C from './styles'
import logoInovax from '../../images/Logo Inovax-blue 1.svg';

export function App() {
  return (
    <>
      <C.Header>
          <img 
            src={logoInovax} 
            alt="Logo marca Inovax" 
            className="imagemInovax"
          />
          <div className="barraVertical"/>
          <C.Title>
            <h1 className="toDoList">To do list</h1>
            <h2> Teste de capacidade técnica</h2>
          </C.Title>
      </C.Header>
    </>
  );
}