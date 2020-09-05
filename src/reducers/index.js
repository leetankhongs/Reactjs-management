import {combineReducers} from 'redux';
import tasks from './tasks'
import isDisplayForm from './form'
import taskEditing from './editTask';
import filter from './filter';
import keyWord from './search';
import sort from './sort'
const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    taskEditing,
    filter,
    keyWord,
    sort
})

export default myReducer;