import React from "react";
import { ProgressBar, Container, Row, Col } from "react-bootstrap";

function ScoreProgressBar(props) {
    const lastQuestionAnswered =
        props.answered &&
        props.currentQuestionIndex === props.totalQuestions - 1;
    return (
        <>
            <Container className="mb-1">
                <Row>
                    {lastQuestionAnswered ? null : (
                        <Col>
                            Min Score:
                            {Math.round(props.scores.minScore * 100)}%
                        </Col>
                    )}
                    {lastQuestionAnswered ? (
                        <Col>
                            Score:
                            {Math.round(props.scores.currentScore * 100)}%
                        </Col>
                    ) : null}
                    {lastQuestionAnswered ? null : (
                        <Col className="text-right">
                            Max Score:
                            {Math.round(props.scores.maxScore * 100)}%
                        </Col>
                    )}
                </Row>
            </Container>
            <ProgressBar>
                <ProgressBar
                    variant="danger"
                    now={props.scores.minScore * 100}
                    key={1}
                />
                <ProgressBar
                    variant="warning"
                    now={
                        (props.scores.currentScore - props.scores.minScore) *
                        100
                    }
                    key={2}
                />
                <ProgressBar
                    variant="success"
                    now={
                        (props.scores.maxScore - props.scores.currentScore) *
                        100
                    }
                    key={3}
                />
            </ProgressBar>
        </>
    );
}

export default ScoreProgressBar;
