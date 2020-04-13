import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

function Difficulty(props) {
    const filledStarCount = { easy: 1, medium: 2, hard: 3 };
    const difficultyLevel = filledStarCount[props.difficulty];

    return (
        <div>
            {[...Array(3)].map((value, index) => {
                return index < difficultyLevel ? (
                    <FaStar key={index} />
                ) : (
                    <FaRegStar key={index} />
                );
            })}
        </div>
    );
}

export default Difficulty;
