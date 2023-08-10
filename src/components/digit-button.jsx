import { actionTypes } from "../App"
const DigitButton = ({dispatch, digit}) => {
    return (
        <button onClick={() => 
            dispatch({type : actionTypes.ADD_DIGIT, payload: {digit}})
        }>{digit}</button>
    )
}

export default DigitButton