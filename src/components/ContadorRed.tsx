//**Normalmente se utilizarían archivos separados

import { useReducer } from "react";

//InitialState no cambia nunca
const initialState = {
  contador: 0,
};

type ActionType =
  | { type: "incrementar" }
  | { type: "decrementar" }
  | { type: "custom"; payload: number };

//Un Reducer siempre devuelve un estado nuevo
const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "incrementar":
      return {
        //Crea una copia del estado y modifica dicha copia, no el original
        ...state,
        contador: state.contador + 1,
      };
      break;
    case "decrementar":
      return {
        //Crea una copia del estado y modifica dicha copia, no el original
        ...state,
        contador: state.contador - 1,
      };
      break;
    case "custom":
      return {
        //Crea una copia del estado y modifica dicha copia, no el original
        ...state,
        contador: action.payload,
      };
      break;
    default:
      //Por defecto, devolvemos el estado
      return state;
      break;
  }
};

const ContadorRed = () => {
  const [contadorState, dispatch] = useReducer(contadorReducer, initialState);
  //Desectructurado (no será necesario contadorState.contador):
  //const [{ contador }, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <div className="mb-5">
      <h3>Contador: {contadorState.contador}</h3>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "incrementar" })}
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "decrementar" })}
      >
        -1
      </button>

      <button
        className="btn btn-outline-danger"
        onClick={() => dispatch({ type: "custom", payload: 100 })}
      >
        100
      </button>
    </div>
  );
};

export default ContadorRed;
