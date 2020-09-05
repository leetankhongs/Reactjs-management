import * as types from '../constants/actionType'

var initialState = {
    name: '',
    status: -1
};

var myReducer = (filter = initialState, action)=>{
    
    switch(action.type){
        case types.FILTER_TABLE:
            return {
                name: action.filter.name,
                status: action.filter.status
            }
        default:
            return filter
    }
}


export default myReducer;