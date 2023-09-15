import { useBoardContext } from "../context";
import BoardLayout from "./components/BoardLayout";
import { calculateWinner } from "./utils";
import { initializeBoard } from "../context";
function App() {
  const { squares, playerTurn, setSquares } = useBoardContext();
  const winner = calculateWinner(squares);
  //console.log(winner);
  let status;
  if (winner) {
    status = "winner:" + winner;
  } else {
    status = playerTurn ? "Player 1" : "player 2";
  }
  return (
    <>
      <div className=" relative bg-gradient-to-r from-red-400 to-yellow-400 h-screen flex justify-center items-center flex-col space-y-10 md:space-y-30 ">
        <h2 className="text-center text-3xl text-zinc-700 ">TIC-TAC-TOE</h2>
        <div className="card ">
          {!winner && <BoardLayout />}
          {winner && (
            <div className="absolute inset-0 bg-red-400  ">
              <div className="winner-card">
                <h1 className="text-8xl   font-mono  text-center text-zinc-600 my-auto shadow-orange-900 ">
                  {`Winner ${winner}`}
                </h1>
                <button
                  className="button"
                  onClick={() => {
                    setSquares(initializeBoard());
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
        <h3 className="text-center text-3xl text-zinc-700">{`Current Turn:${status}`}</h3>
        <button
          className="button w-1/2"
          onClick={() => {
            setSquares(initializeBoard());
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
