import React, { useState, useEffect, useCallback } from "react";
import TikTacToeCPU from "./TikTacToeCPU.js";
import "./TikTacToe.css";

const TikTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);

    const calculateWinner = useCallback((squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return squares.includes(null) ? null : "Draw";
    }, []);

    useEffect(() => {
        const result = calculateWinner(squares);
        if (result) {
            setWinner(result);
        } else if (!xIsNext) {
            // Computer's turn (O)
            const timer = setTimeout(() => {
                handleComputerMove();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [squares, xIsNext, calculateWinner, handleComputerMove]);

    const handleComputerMove = useCallback(() => {
        // Only call if TikTacToeCPU is actually defined and is a function
        if (typeof TikTacToeCPU === 'function') {
            try {
                const move = TikTacToeCPU(squares);
                if (move !== undefined && move !== null) {
                    const nextSquares = squares.slice();
                    nextSquares[move] = "O";
                    setSquares(nextSquares);
                    setXIsNext(true);
                }
            } catch (error) {
                console.error("Error in TikTacToeCPU:", error);
            }
        }
    }, [squares]);

    const handleClick = (i) => {
        if (winner || squares[i] || !xIsNext) return;

        const nextSquares = squares.slice();
        nextSquares[i] = "X";
        setSquares(nextSquares);
        setXIsNext(false);
    };

    const Square = ({ value, onSquareClick }) => {
        return (
            <button
                className={`square ${value ? `square--${value.toLowerCase()}` : ""}`}
                onClick={onSquareClick}
            >
                {value}
            </button>
        );
    };

    const renderStatus = () => {
        if (winner === "Draw") return "It's a Draw! 🤝";
        if (winner) return `${winner === "X" ? "You" : "Computer"} Won! ${winner === "X" ? "🎉" : "🤖"}`;
        return `Next player: ${xIsNext ? "You (X)" : "Computer (O)"}`;
    };

    const statusSeverity = winner === "Draw" ? "neutral" : (winner === "X" ? "success" : (winner === "O" ? "failure" : "neutral"));

    return (
        <div className="tik-tac-toe">
            <div className="tik-tac-toe-header">Tic Tac Toe</div>
            <div className="tik-tac-toe-description">Beat the CPU to get a embarrasing fact about me!</div>

            <div className="board">
                <div className="row">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>
                <div className="row">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>
                <div className="row">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
            </div>

            <div className={`message message--${statusSeverity}`}>
                <p>{renderStatus()}</p>
            </div>

            {winner && (
                <button className="reset-btn" onClick={() => {
                    setSquares(Array(9).fill(null));
                    setXIsNext(true);
                    setWinner(null);
                }}>
                    Play Again
                </button>
            )}
        </div>
    );
};

export default TikTacToe;
