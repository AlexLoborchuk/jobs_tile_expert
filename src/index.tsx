// ФАЙЛ С КОРНЕВЫМ КОМПОНЕНТОМ. НЕ НУЖДАЕТСЯ В РЕДАКТИРОВАНИИ

import { StrictMode, useCallback } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { IUser } from "./interface";
import {
  FirstComponent,
  SecondComponent,
  ThirdComponent,
  FourthComponent
} from "./taskComponents";

function App() {
  const [state, setState] = useState<IUser>({
    name: "Andy",
    age: 21
  });

  const handleClick = useCallback(() => {
    setState({ ...state });
  }, [state]);

  return (
    <div>
      {/* кнопка для перерисовки всех дочерних компонентов без изменения их props значений */}
      <button
        className="btn btn-info"
        onClick={() => {
          handleClick;
        }}
      >
        components force updating
      </button>

      <FirstComponent {...state} />
      <SecondComponent user={state} />
      <ThirdComponent {...state} />
      <FourthComponent user={state} />
    </div>
  );
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
