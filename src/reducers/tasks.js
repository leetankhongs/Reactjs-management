import * as types from './../constants/actionType'
import _ from 'lodash';
var data = JSON.parse(localStorage.getItem("tasks"));
var initialState = data? data : [];

const UniqueID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}

var myReducer = (tasks = initialState, action)=>{
    
    switch(action.type){
        case types.LIST_ALL:
            return tasks;
        case types.ADD_TASK:{
            var newTask = {
                id: UniqueID(),
                name: action.task.name,
                status: action.task.status
            }
            tasks.push(newTask); 
            localStorage.setItem("tasks",JSON.stringify(tasks));
            return [...tasks];
        }
        case types.UPDATE_STATUS: {
            var index = _.findIndex(tasks, (o)=> { 
                console.log(o.id)
                return o.id === action.id; });
            
            if(index !== -1){
                tasks[index] = {
                    ...tasks[index],
                    status: !tasks[index].status
                }
            }
    
            localStorage.setItem("tasks",JSON.stringify(tasks));
            return [...tasks];
        }
        case types.DELETE_TASK: {
            var index = _.findIndex(tasks, (o)=> { 
                console.log(o.id)
                return o.id === action.id; });
            
            if(index !== -1){
                tasks.splice(index, 1)
            }
    
            localStorage.setItem("tasks",JSON.stringify(tasks));
            return [...tasks];
        }
        case types.UPDATE_TASK: {
            var index = _.findIndex(tasks, (o)=> { 
                console.log(o.id)
                return o.id === action.task.id; });
            
            if(index !== -1){
                tasks[index] = {
                    ...tasks[index],
                    name: action.task.name,
                    status: action.task.status
                }
            }
    
            localStorage.setItem("tasks",JSON.stringify(tasks));
            return [...tasks];
        }
        default:
            return tasks;
    }
}


export default myReducer;