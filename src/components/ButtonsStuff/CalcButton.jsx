import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CalcButton = (values) => {
    const handleChange = (event) => {
        console.log(values.value)
    }
    return(
        <div 
            className={values.insideClassName}
            id={values.id}
            onClick={handleChange}
        >
            {values.icon ? (
                <FontAwesomeIcon
                    onClick={handleChange} 
                    icon={values.icon} />) : null}
            {values.text ? (values.text) : null}
        </div>
    )
}

export default CalcButton;