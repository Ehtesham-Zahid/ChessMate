const initialBoard = [
  ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
  ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
  ...Array(4).fill(Array(8).fill("")),
  ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
  ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
];

const ChessBoard = () => {
  return (
    <div className="grid grid-cols-8 w-[720px] h-[720px]">
      {initialBoard.flat().map((piece, i) => {
        const row = Math.floor(i / 8);
        const col = i % 8;
        const isDark = (row + col) % 2 === 1;
        const isWhitePiece = "♙♖♘♗♕♔".includes(piece); // White pieces
        const isBlackPiece = "♟♜♞♝♛♚".includes(piece); // Black pieces

        return (
          <div
            key={i}
            className={`w-24 h-24 flex items-center justify-center text-3xl font-bold ${
              isDark ? "bg-gray-800" : "bg-gray-300"
            }`}
          >
            {piece && (
              <span className={isWhitePiece ? "text-white" : "text-black"}>
                {piece}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ChessBoard;
