import * as types from '../constants/actionType'

var initialState = '';

var myReducer = (keyWord = initialState, action)=>{
    
    switch(action.type){
        case types.SEARCH_LIST:
            return action.keyWord
        default:
            return keyWord
    }
}


export default myReducer;