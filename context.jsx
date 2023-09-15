import { nanoid } from "nanoid";
import { createContext, useContext, useState } from "react";
import { calculateWinner } from "./src/utils";
const AppContext = createContext();

export const useBoardContext = () => useContext(AppContext);
export const initializeBoard = () => {
  const squares = [];
  for (let i = 0; i < 9; i++) {
    squares.push({ id: nanoid(), value: "" });
  }
  return squares;
};
const AppProvider = (props) => {
  const [playerTurn, setPlayerTurn] = useState(true);
  const [squares, setSquares] = useState(initializeBoard);

  const handleBtnClick = (id) => {
    let nextSquares = squares.findIndex((square) => square.id === id);

    //console.log(nextSquares);
    const allSquares = [...squares];
    if (allSquares[nextSquares].value.length > 0 || calculateWinner(squares)) {
      return;
    }
    if (playerTurn) {
      allSquares[nextSquares] = { id, value: "x" };
    } else {
      allSquares[nextSquares] = { id, value: "o" };
    }

    setSquares(allSquares);
    setPlayerTurn(!playerTurn);
  };
  return (
    <AppContext.Provider
      value={{ setSquares, playerTurn, squares, handleBtnClick }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppProvider;
