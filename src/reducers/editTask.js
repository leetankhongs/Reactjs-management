import * as types from '../constants/actionType'

var initialState = null;

var myReducer = (task = initialState, action)=>{
    
    switch(action.type){
        case types.EDIT_TASK:
            task = action.task;
            return task;
        case types.NULL_TASK_EDITING:
            task = null;
            return task;
        default:
            return task;
    }
}


export default myReducer;