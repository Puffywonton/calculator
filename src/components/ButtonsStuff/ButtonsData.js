import { faPlus, faMinus, faMultiply, faDivide, faEquals, faDeleteLeft} from '@fortawesome/free-solid-svg-icons'

const ButtonsData = () => { 
    return(
        [
            {value: ".", insideClassName: "pad border-bottom-left-radius", id: "dot", text:"."},
            {value: "1", insideClassName: "pad", id: "one", text:"1"},
            {value: "4", insideClassName: "pad", id: "four", text:"4"},
            {value: "7", insideClassName: "pad", id: "seven", text:"7"},
            {value: "AC", insideClassName: "top", id: "AC", text:"AC"},
            {value: "0", insideClassName: "pad", id: "zero", text:"0"},
            {value: "2", insideClassName: "pad", id: "two", text:"2"},
            {value: "5", insideClassName: "pad", id: "five", text:"5"},
            {value: "8", insideClassName: "pad", id: "eight", text:"8"},
            {value: "/", insideClassName: "top", id: "divide", icon:faDivide},
            {value: "%", insideClassName: "pad", id: "percent", text:"%"},
            {value: "3", insideClassName: "pad", id: "three", text:"3"},
            {value: "6", insideClassName: "pad", id: "six", text:"6"},
            {value: "9", insideClassName: "pad", id: "nine", text:"9"},
            {value: "x", insideClassName: "top", id: "multiply", icon:faMultiply},
            {value: "equal", insideClassName: "right_side border-bottom-right-radius", id: "equal", icon:faEquals},
            {value: "+", insideClassName: "right_side", id: "plus", icon:faPlus},
            {value: "-", insideClassName: "right_side", id: "minus", icon:faMinus},
            {value: "delete", insideClassName: "right_side", id: "delete", icon:faDeleteLeft},
        ]
    )
}

export default ButtonsData()