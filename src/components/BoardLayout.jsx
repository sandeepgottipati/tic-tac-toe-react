import { useBoardContext } from "../../context";
import Square from "./Square";

const BoardLayout = () => {
  const { squares } = useBoardContext();

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3">
        {squares.map((square) => {
          return <Square key={square.id} id={square.id} value={square.value} />;
        })}
      </div>
    </>
  );
};
export default BoardLayout;
