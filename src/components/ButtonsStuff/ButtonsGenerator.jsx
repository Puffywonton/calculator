import React from "react";
import CalcButton from "./CalcButton"
import ButtonsData from "./ButtonsData"
const ButtonsGenerator = (props) => {

    // const handleChange = (event) => {
    //     event.preventDefault()
    //     props.setUserInput({
            
    //         value: event.target.id
    //     })
    // }

    return(
        <div className="button_box">
            {ButtonsData.map((values) => {
                return(
                    <div 
                    className = {values.id === "equal" ? "button_equal" : "button"}
                    key = {values.id}
                    // onClick={handleChange}
                    >
                        {CalcButton(values)}
                    </div>
                )
            })}              
        </div>
    )
}

export default ButtonsGenerator