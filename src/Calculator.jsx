import React from "react" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faMultiply, faDivide, faEquals, faDeleteLeft} from '@fortawesome/free-solid-svg-icons'



const buttons = [
    {insideClassName: "inside pad border-bottom-left-radius", className: "button", id: "dot", text:"."},
    {insideClassName: "inside pad", className: "button", id: "one", text:"1"},
    {insideClassName: "inside pad", className: "button", id: "four", text:"4"},
    {insideClassName: "inside pad", className: "button", id: "seven", text:"7"},
    {insideClassName: "inside top", className: "button", id: "AC", text:"AC"},
    {insideClassName: "inside pad", className: "button", id: "zero", text:"0"},
    {insideClassName: "inside pad", className: "button", id: "two", text:"2"},
    {insideClassName: "inside pad", className: "button", id: "five", text:"5"},
    {insideClassName: "inside pad", className: "button", id: "eight", text:"8"},
    {insideClassName: "inside top", className: "button", id: "divide", icon:faDivide},
    {insideClassName: "inside pad", className: "button", id: "percent", text:"%"},
    {insideClassName: "inside pad", className: "button", id: "three", text:"3"},
    {insideClassName: "inside pad", className: "button", id: "six", text:"6"},
    {insideClassName: "inside pad", className: "button", id: "nine", text:"9"},
    {insideClassName: "inside top", className: "button", id: "multiply", icon:faMultiply},
    {insideClassName: "inside right_side border-bottom-right-radius", className: "button_equal", id: "equal", icon:faEquals},
    {insideClassName: "inside right_side", className: "button", id: "plus", icon:faPlus},
    {insideClassName: "inside right_side", className: "button", id: "minus", icon:faMinus},
    {insideClassName: "inside right_side", className: "button", id: "delete", icon:faDeleteLeft},
]

const Calculator = () => {
    return(
        <div className="page">
            <div className="outside">
                <div className="display_box">
                    <div className="top_display">13 x 50</div>
                    <div className="bottom_display">650</div>
                </div>
                <div className="button_box">
                    {buttons.map((values) => {
                        return(
                            <div 
                            className = {values.className}
                            key = {values.id}
                            >
                                <div className={values.insideClassName}>
                                    {values.icon ? (<FontAwesomeIcon icon={values.icon} />) : null}
                                    {values.text ? (values.text) : null}
                                </div>
                            </div>
                        )
                    })}              
                </div>
            </div>
            
        </div>
        
    )
}

export default Calculator()