import Counter from "./components/Counter";
import Usuario from "./components/Usuario";

import TimerPadre from "./components/TimerPadre";
import ContadorRed from "./components/ContadorRed";
import Formulario from "./components/Formulario";
import Formulario2 from "./components/Formulario2";

const App = () => {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr/>
      <h2>UseState</h2>
      <hr/>
      <Counter />
      <Usuario />
      
      <h2>UseEffect - UseRef</h2>
      <hr/>
      <TimerPadre />

      <h2>UseReducer</h2>
      <hr/>
      <ContadorRed />

      <h2>CustomHooks</h2>
      <hr/>
      <Formulario />
      <Formulario2 />
    </>
  );
}

export default App;
