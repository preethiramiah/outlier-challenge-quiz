import React from "react";
import { ProgressBar } from "react-bootstrap";

function QuizProgressBar(props) {
    const progressValue =
        (props.currentQuestionIndex / props.totalQuestions) * 100;
    return (
        <ProgressBar
            now={progressValue}
            label={`${progressValue}%`}
            srOnly
        ></ProgressBar>
    );
}

export default QuizProgressBar;
