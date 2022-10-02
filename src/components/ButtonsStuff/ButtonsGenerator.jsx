import React from "react";
import CalcButton from "./CalcButton"
import ButtonsData from "./ButtonsData"
const ButtonsGenerator = (props) => {

    return(
        <div className="button_box">
            {ButtonsData.map((values) => {
                return(
                    <div 
                    className = {values.id === "equal" ? "button_equal" : "button"}
                    key = {values.id}
                    >
                        <CalcButton 
                            values={values}
                            setUserInput = {props.setUserInput}
                            userInput = {props.userInput}
                        />
                    </div>
                )
            })}              
        </div>
    )
}

export default ButtonsGenerator