import React, { Component } from 'react';
import * as actions from './../actions/index'
import {connect} from 'react-redux';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: true
        }
    }

    componentWillMount() {
        var {taskEditing} = this.props;
        if (taskEditing) {
            this.setState({
                id: taskEditing.id,
                name: taskEditing.name,
                status: taskEditing.status
            });
        }
    }


    componentWillReceiveProps(nextProps) {
        var {taskEditing} = nextProps;

        if (taskEditing) {
            this.setState({
                id: taskEditing.id,
                name: taskEditing.name,
                status: taskEditing.status
            });
        } else {
            this.setState({
                id: '',
                name: '',
                status: true
            });
        }
    }
    onChangeValue = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;

        if (name === "status") {
            value = target.value === "true" ? true : false;
        }

        this.setState({
            [name]: value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();

        var {taskEditing} = this.props;

        if (taskEditing) {
            this.props.onUpdateTask(this.state);
        } else {
            this.props.onAddTask(this.state);
        }

        this.resetForm();
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    resetForm = () => {
        this.setState({
            name: '',
            status: false
        })
        this.props.onCloseForm();
    }

    render() {
        if(this.props.isDisplayForm === false) return '';
        else
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.state.id === "" ? "Thêm CRUSH" : "Chỉnh sửa CRUSH"}  &nbsp;
                        <span className="fa fa-times-circle text-right" onClick={this.onCloseForm}></span>
                    </h3>

                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text"
                                className="form-control"
                                name="name"
                                onChange={this.onChangeValue}
                                value={this.state.name}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChangeValue}>
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-right">
                            <button type="submit" className="btn btn-warning">{this.state.id === "" ? "Thêm" : "Chỉnh sửa"}</button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.resetForm}>Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) =>{
    return{
        isDisplayForm: state.isDisplayForm,
        taskEditing: state.taskEditing
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onAddTask: (task)=>{
            dispatch(actions.addTask(task));
        },
        onCloseForm: ()=>{
            dispatch(actions.closeForm());
        },
        onUpdateTask: (task) =>{
            dispatch(actions.updateTask(task));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
