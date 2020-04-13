import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import QuizProgressBar from "./quizprogressbar";
import Question from "./question";
import Options from "./options";
import ScoreProgressBar from "./scoreprogressbar";
import AnswerStatus from "./answerstatus";
import questions from "../questions.json";

function Quiz() {
    const totalQuestions = questions.length;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [statusText, setStatusText] = useState("");
    const [showAnswerStatus, setShowAnswerStatus] = useState(false);
    const [totalScore, setTotalScore] = useState(0);
    const [scores, setScores] = useState({
        minScore: 0,
        currentScore: 0,
        maxScore: 1,
    });

    const getOptions = (index) => {
        const answers = [
            questions[index].correct_answer,
            ...questions[index].incorrect_answers,
        ];
        for (let i = answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[j]] = [answers[j], answers[i]];
        }
        return answers;
    };
    const [options, setOptions] = useState(getOptions(0));

    const checkIfCorrectAnswer = (event) => {
        setShowAnswerStatus(true);
        if (
            decodeURIComponent(
                questions[currentQuestionIndex].correct_answer
            ) === event.target.innerText
        ) {
            const newScore = totalScore + 1;
            setTotalScore(newScore);
            updateScores(newScore);
            setStatusText("Correct");
        } else {
            updateScores(totalScore);
            setStatusText("Sorry");
        }
    };

    const updateScores = (score) => {
        setScores({
            minScore: score / totalQuestions,
            currentScore: score / (currentQuestionIndex + 1),
            maxScore:
                (score + (totalQuestions - (currentQuestionIndex + 1))) /
                totalQuestions,
        });
    };

    const nextQuestionHandler = () => {
        setShowAnswerStatus(false);
        setStatusText("");
        loadNextQuestion();
        setOptions(getOptions(currentQuestionIndex + 1));
    };

    const loadNextQuestion = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    return (
        <>
            <QuizProgressBar
                currentQuestionIndex={currentQuestionIndex + 1}
                totalQuestions={totalQuestions}
            />
            <Container fluid="xl">
                <Row>
                    <Col>
                        <h4 className="mt-4">
                            Question {currentQuestionIndex + 1} of{" "}
                            {totalQuestions}
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Question details={questions[currentQuestionIndex]} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Options
                            options={options}
                            isBooleanOptions={
                                questions[currentQuestionIndex].type ===
                                "boolean"
                            }
                            statusText={statusText}
                            disableOptionButtons={showAnswerStatus}
                            checkIfCorrectAnswer={checkIfCorrectAnswer}
                        />
                    </Col>
                </Row>
                {showAnswerStatus ? (
                    <Row>
                        <Col>
                            <AnswerStatus
                                statusText={statusText}
                                nextQuestion={nextQuestionHandler}
                                currentQuestionIndex={currentQuestionIndex}
                                totalQuestions={totalQuestions}
                            />
                        </Col>
                    </Row>
                ) : null}
                <Row>
                    <Col>
                        <ScoreProgressBar
                            scores={scores}
                            currentQuestionIndex={currentQuestionIndex}
                            totalQuestions={totalQuestions}
                            answered={showAnswerStatus}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Quiz;
