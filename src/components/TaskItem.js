import React, { Component } from 'react';
import * as actions from './../actions/index'
import {connect} from 'react-redux';

class TaskItem extends Component {

    changeStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    deleteTask = () => {
        this.props.onDeleteTask(this.props.task.id);
    }

    updateItem = () =>{
        this.props.onEditTask(this.props.task);
        this.props.onOpenForm();
    }

    render() {

        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{this.props.task.name}</td>
                <td className="text-center">

                    <span className={this.props.task.status === true ? "label label-danger" : "label label-success"} onClick={this.changeStatus}>
                        {this.props.task.status === true ? "Kích hoạt" : "Ẩn"}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick = {this.updateItem}>
                        <span className="fa fa-pencil mr-5"></span>&nbsp;Sửa
                                            </button>
                                            &nbsp;
                                            <button type="button" className="btn btn-danger" onClick={this.deleteTask}>
                        <span className="fa fa-trash mr-5"></span>&nbsp;Xóa
                                            </button>
                </td>
            </tr>
        );
    }

}

const mapStateToProps = (state) =>{
    return{

    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onUpdateStatus: (id)=>{
            dispatch(actions.updateStatus(id));
        },
        onDeleteTask: (id)=>{
            dispatch(actions.deleteTask(id));
        },
        onOpenForm: ()=>{
            dispatch(actions.openForm());
        },
        onEditTask: (task)=>{
            dispatch(actions.editTask(task));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskItem);
