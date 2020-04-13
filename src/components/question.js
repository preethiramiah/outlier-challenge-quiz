import React from "react";
import Difficulty from "./difficulty";

function Question(props) {
    const Text = (props) => {
        return <label {...props}>{decodeURIComponent(props.text)}</label>;
    };

    return (
        <>
            <Text className="mb-0" text={props.details.category}></Text>
            <Difficulty difficulty={props.details.difficulty} />
            <Text className="mt-3" text={props.details.question}></Text>
        </>
    );
}

export default Question;
