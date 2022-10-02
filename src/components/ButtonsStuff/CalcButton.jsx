import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CalcButton = (props) => {
    const handleChange = () => {
        props.setUserInput(toto => toto + props.values.value)
    }
    return(
        <div 
            className={props.values.insideClassName}
            id={props.values.id}
            onClick={handleChange}
        >
            {props.values.icon ? (
                <FontAwesomeIcon
                    className="fontAwesome"
                    icon={props.values.icon} />) : null}
            {props.values.text ? (props.values.text) : null}
        </div>
    )
}

export default CalcButton;
