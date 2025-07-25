import React, { useState } from "react";


function Todo(props) {

    const [doneStates, setDoneStates] = useState(
    Array(props.array.length).fill(false)
    );

    const handleClick = ({index}) => {
        const updatedDoneStates = [...doneStates];
        updatedDoneStates[index] = !updatedDoneStates[index];
        setDoneStates(updatedDoneStates);
    }

    return (
        <div className="Todo-Container">
            {props.array.map((item, index) => (
                <>
                    <div className="Todo-Items">
                        <h2 className="elements"key={index}>{doneStates[index] ? "Kudos Dude you have completed the work" : item }</h2>
                        <input className="custom-checkbox" type="checkbox" key={index} onClick={() => handleClick({index})}/>
                    </div>
                </>
            ))}
        </div>
    )
}

export default Todo