import endsUpInValidPosition from "../utilities/endsUpInValidPosition";


export const state = {
    currentRow: 0,
    currentTile: 0,
    movesQueue: [],
    ref: null,
  };

  export function setRef(ref) {
    state.ref = ref;
  }
  
  export function queueMove(direction) {
    const isValidMove = endsUpInValidPosition(
      { rowIndex: state.currentRow, tileIndex: state.currentTile },
      [...state.movesQueue, direction]
    );
  
    if (!isValidMove) return; // Ignore move
  
    state.movesQueue.push(direction);
  }
  
  export function stepCompleted() {
    const direction = state.movesQueue.shift();
  
    if (direction === "forward") state.currentRow += 1;
    if (direction === "backward") state.currentRow -= 1;
    if (direction === "left") state.currentTile -= 1;
    if (direction === "right") state.currentTile += 1;
  }