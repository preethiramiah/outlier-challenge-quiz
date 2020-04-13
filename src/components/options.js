import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Options(props) {
    const variant = { default: "primary", correct: "success", sorry: "danger" };
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);

    const OptionButton = (buttonProps) => {
        const buttonVariant =
            props.statusText === "" || selectedButtonIndex !== buttonProps.index
                ? "default"
                : props.statusText.toLowerCase();
        return (
            <Col>
                <Button
                    block
                    className="mt-2"
                    disabled={props.disableOptionButtons}
                    onClick={(event) => {
                        setSelectedButtonIndex(buttonProps.index);
                        props.checkIfCorrectAnswer(event);
                    }}
                    variant={variant[buttonVariant]}
                >
                    {decodeURIComponent(props.options[buttonProps.index])}
                </Button>
            </Col>
        );
    };

    return (
        <Container className="p-0 mt-2 mb-4">
            <Row>
                <OptionButton index={0} />
                <OptionButton index={1} />
            </Row>
            {props.isBooleanOptions ? null : (
                <Row>
                    <OptionButton index={2} />
                    <OptionButton index={3} />
                </Row>
            )}
        </Container>
    );
}

export default Options;
