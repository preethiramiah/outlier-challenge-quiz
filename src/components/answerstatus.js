import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

function AnswerStatus(props) {
    return (
        <Container className="p-0 mb-4">
            <Row>
                <Col className="text-center">
                    <label>{`${props.statusText}!`}</label>
                </Col>
            </Row>
            {props.currentQuestionIndex < props.totalQuestions - 1 ? (
                <Row>
                    <Col className="text-center">
                        <Button onClick={props.nextQuestion}>
                            Next Question
                        </Button>
                    </Col>
                </Row>
            ) : null}
        </Container>
    );
}

export default AnswerStatus;
