import * as types from '../constants/actionType'

var initialState = 0;

var myReducer = (value = initialState, action)=>{
    
    switch(action.type){
        case types.SORT_LIST:
            return action.value
        default:
            return value
    }
}


export default myReducer;