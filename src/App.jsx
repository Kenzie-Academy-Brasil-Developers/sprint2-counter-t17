import { useState } from "react";
import { Counter } from "./components/Counter";
import { GlobalReset } from "./styles/reset";

function App() {
  //variável de estado reativa e imutável
  // um estado responsável pelo contador
  const [counter, setCounter] = useState(0);

  //uma função responsável por realizar somas ao contador
  function sum(){
    setCounter(counter + 1);
  }

  //uma função responsável por realizar subtrações ao contador
  function sub(){
    setCounter(counter - 1);
  }  

  //let counter = 0;

  // NÃO UTILIZAR COM ESTADO
  /* querySelector */
  /* addEventListener */
  /* manipulações diretas de DOM */ 

  // o estado ele vai "reconstruir" qualquer coisa que esteja vínculada a ele quando se alterar

  // Altera o que está presente na tela
  // Altera dados e a alteração reflete "automaticamente" na interface com base nas minhas declarações

  //um estado responsável por armazenar uma lista númerica
  const [list, setList] = useState([1, 2, 3]);

  //somar o valor total do estado list
  const totalList = list.reduce((acc, elementValue) => {
    return acc + elementValue;
  }, 0)

  function addList(){
    //list.push(4); mutável X
    const newList = [...list, 4];
    setList(newList);
  }

  return (
    <div className="App">
       <GlobalReset />
       <Counter counter={counter} sum={sum} sub={sub} />
       { /* Eu quero uma estrtura para cada item da minha lista */}
       {list.map(element => {
          return <li key={element}>{element}</li>
       })}
       <span>{totalList}</span>
       <button onClick={addList}>Alterar lista</button>
    </div>
  )
}

export default App
