import { actionTypes } from "../App"
const OperationButton = ({dispatch, operation, ...otherProps}) => {
    return (
        <button {...otherProps} onClick={() => 
            dispatch({type : actionTypes.CHOOSE_OPERATION, payload: {operation}})
        }>{operation}</button>
    )
}

export default OperationButton