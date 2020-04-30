const RESET = "board/RESET" as const;
const PUT_CARD = "board/PUT_CARD" as const;

export const resetBoard = () => ({
  type: RESET
});

export const putCard = (position: number, number: number) => ({
  type: PUT_CARD,
  payload: {
    position,
    number
  }
});

export type BoardAction =
  | ReturnType<typeof resetBoard>
  | ReturnType<typeof putCard>;

export type BoardState = {
  board: number[];
  used: number[];
};

const initState: BoardState = {
  board: Array(20).fill(0),
  used: []
};

function boardReducer(state: BoardState = initState, action: BoardAction) {
  switch (action.type) {
    case "board/RESET":
      return initState;
    case "board/PUT_CARD":
      const { position, number } = action.payload;
      if (state.board[position] > 0) return state;

      if (state.used.includes(number)) return state;

      return {
        ...state,
        board: state.board.map((n, idx) => (idx === position ? number : n)),
        used: [number, ...state.used]
      };

    default:
      return state;
  }
}

export default boardReducer;
export type boardState = ReturnType<typeof boardReducer>;
