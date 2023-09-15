export const calculateWinner = (squares) => {
  const winnerPath = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winnerPath.length; i++) {
    const [a, b, c] = winnerPath[i];
    if (
      squares[a].value != "" &&
      squares[a].value === squares[b].value &&
      squares[a].value === squares[c].value
    ) {
      return squares[a].value;
    }
  }
  return null;
};
