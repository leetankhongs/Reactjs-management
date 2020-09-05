import * as types from './../constants/actionType'

export const listAll = ()=>{
    return {
        type: types.LIST_ALL
    }
}

export const addTask = (task)=>{
    return {
        type: types.ADD_TASK,
        task
    }
}

export const toggleForm = ()=>{
    return {
        type: types.TOGGLE_FORM
    }
}

export const closeForm = ()=>{
    return {
        type: types.CLOSE_FORM
    }
}

export const openForm = ()=>{
    return {
        type: types.OPEN_FORM
    }
}

export const updateStatus = (id)=>{
    return {
        type: types.UPDATE_STATUS,
        id
    }
}

export const deleteTask = (id)=>{
    return {
        type: types.DELETE_TASK,
        id
    }
}

export const editTask = (task)=>{
    return {
        type: types.EDIT_TASK,
        task
    }
}

export const updateTask = (task)=>{
    return {
        type: types.UPDATE_TASK,
        task
    }
}

export const nullTaskEditing = ()=>{
    return {
        type: types.NULL_TASK_EDITING
    }
}

export const filterTable = (filter)=>{
    return {
        type: types.FILTER_TABLE,
        filter
    }
}

export const searchList = (keyWord)=>{
    return {
        type: types.SEARCH_LIST,
        keyWord
    }
}

export const sortList = (value)=>{
    return {
        type: types.SORT_LIST,
        value
    }
}

