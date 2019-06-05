const initialState = {
    counter :0
}

export default function (state = initialState , action ){
    switch(action.type){
        case "ICREASE_COUNTER":
            return {counter:state.counter + 1} 
        case "DECREASE_COUNTER":
            return {counter:state.counter - 1}
        default:
        return state
    }
}