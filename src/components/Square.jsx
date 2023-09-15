import { useBoardContext } from "../../context";

const Square = ({ id, value }) => {
  const { handleBtnClick } = useBoardContext();

  return (
    <button
      className="w-[75px] h-[75px] md:w-[150px] md:h-[150px] text-2xl md:text-4xl py-2 px-4 text-zinc-700  uppercase  text-center border border-violet-300 font-bold duration-300 hover:bg-emerald-400"
      onClick={() => {
        handleBtnClick(id);
      }}
    >
      {value}
    </button>
  );
};
export default Square;
