import React, { useState } from "react";
import styles from '../css/Game.module.css'; // CSS Module
import '../css/style.css'; // Global CSS


const CHOICES = [
    { name: "rock", emoji: "✊" },
    { name: "paper", emoji: "✋" },
    { name: "scissors", emoji: "✌️" },
];

function Game() {
    const [playerChoice, setPlayerChoice] = useState(null); // Player's choice
    const [codeyChoice, setCodeyChoice] = useState(null);   // Computer's choice
    const [result, setResult] = useState(null);              // Game result


    // Handle player's choice and determine the game result
    function handlePlayerChoice(choice) {
        const codeyChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
        setPlayerChoice(choice);
        setCodeyChoice(codeyChoice);
        if (choice.name === codeyChoice.name) {
            setResult("Tie!");
        } else if (
            (choice.name === "rock" && codeyChoice.name === "scissors") ||
            (choice.name === "paper" && codeyChoice.name === "rock") ||
            (choice.name === "scissors" && codeyChoice.name === "paper")
        ) {
            setResult("You win!");
        } else {
            setResult("You lose!");
        }
    }

    // Inline styles as objects
    const choiceStyles = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 40
    };
    const emojiStyles = {
        fontSize: 64,
        marginRight: 20
    };
    const nameStyles = {
        margin: 0,
        fontSize: 24,
        color: '#ffff'
    };
    const resultStyle = {
        marginTop: 40,
        fontSize: 48,
        color: '#ffff'
    };

    // Reset the game state
    function resetGame() {
        setPlayerChoice(null);
        setCodeyChoice(null);
        setResult(null);
    }

    return (
        <div className={styles.container}> {/* Apply .container styles */}
            <h1 style={{ fontSize: 48, marginTop: 0 }}>Rock Paper Scissors</h1>

            <div className={styles.choices}> {/* Apply .choices styles */}
                {CHOICES.map((choice) => (
                    <button
                        className={styles.button}  // Apply .button styles
                        key={choice.name}
                        onClick={() => handlePlayerChoice(choice)}
                        aria-label={choice.name}>
                        {choice.emoji}
                    </button>
                ))}
            </div>

            {playerChoice && codeyChoice && (
                <div className={styles.results}> {/* Apply .results styles */}
                    <div style={choiceStyles}>
                        <span style={emojiStyles}>{playerChoice.emoji}</span>
                        <p style={nameStyles}>You chose {playerChoice.name}</p>
                    </div>

                    <div style={choiceStyles}>
                        <span style={emojiStyles}>{codeyChoice.emoji}</span>
                        <p style={nameStyles}>The computer chose {codeyChoice.name}</p>
                    </div>

                    <h2 style={resultStyle}>{result}</h2>
                    <button
                        onClick={resetGame}
                        className={styles.button}  // Apply .button styles to reset button
                    >
                        Play again
                    </button>
                </div>
            )}
        </div>
    );
}

export default Game;
