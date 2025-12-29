const TikTacToeCPU = (squares) => {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    // Priority 1: WIN NOW (Enable Superpower Overwrite)
    // Check if we have 2 'O's in any line. If so, take the 3rd spot regardless of whether it's empty or 'X'.
    for (const line of lines) {
        const marksInLine = line.map(i => squares[i]);
        const oCount = marksInLine.filter(m => m === 'O').length;
        if (oCount === 2) {
            // Find the index that is NOT 'O'. It might be 'X' or null.
            // We return it to overwrite/fill and win immediately.
            return line.find(i => squares[i] !== 'O');
        }
    }

    // Priority 2: DEFEND (Block Player)
    // Check if player has 2 'X's and the 3rd spot is empty.
    for (const line of lines) {
        const marksInLine = line.map(i => squares[i]);
        const xCount = marksInLine.filter(m => m === 'X').length;
        const emptyCount = marksInLine.filter(m => m === null).length;

        if (xCount === 2 && emptyCount === 1) {
            // Block the win!
            return line.find(i => squares[i] === null);
        }
    }

    // Priority 3: STRATEGIC PLAY
    // Take center if available
    if (squares[4] === null) return 4;

    // Take any corner
    const corners = [0, 2, 6, 8];
    const availableCorners = corners.filter(i => squares[i] === null);
    if (availableCorners.length > 0) {
        return availableCorners[Math.floor(Math.random() * availableCorners.length)];
    }

    // Fallback: Random available move
    const emptyIndices = squares.map((s, i) => s === null ? i : null).filter(i => i !== null);
    return emptyIndices.length > 0 ? emptyIndices[Math.floor(Math.random() * emptyIndices.length)] : null;
};

export default TikTacToeCPU;
