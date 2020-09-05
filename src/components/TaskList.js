import React, { Component } from 'react';
import TaskItem from './TaskItem'
import '../App.css';
import { connect } from 'react-redux';
import * as actions from './../actions/index'
class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: -1
        }
    }


    onChangeValue = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;

        var filter = {
            name: name === "name" ? value : this.state.name,
            status: name === "status" ? value : this.state.status
        }

        console.log(filter)
        this.props.onFilterTable(filter);

        this.setState({
            [name]: value
        })


    }
    render() {
        var { tasks, filter, keyWord, sort } = this.props;
        if (filter) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1;
            })
            tasks = tasks.filter((task) => {
                if (filter.status == -1) {
                    return task;
                }
                else {
                    return task.status === (filter.status == 1 ? true : false);
                }
            })
        }

        if (keyWord !== "") {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1;
            })
        }

        if(sort !== 0){
            tasks.sort((a,b)=>{
                if(a.name.toLowerCase() > b.name.toLowerCase()) return sort;
                else if(a.name.toLowerCase() < b.name.toLowerCase()) return -sort;
                else return 0;
            })
        }

        var elements = tasks.map((task, index) => {
            return <TaskItem key={index} task={task} index={index}
                deleteTask={this.deleteTask}
                updateItem={this.updateItem} />
        })
        return (
            <table className="table table-bordered table-hover mt-15">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input type="text" className="form-control" name="name" onChange={this.onChangeValue} value={this.state.Name} />
                        </td>
                        <td>
                            <select className="form-control" name="status" onChange={this.onChangeValue} value={this.state.Status}>
                                <option value={-1}>Tất Cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích Hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>

                    {elements}
                </tbody>
            </table>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        filter: state.filter,
        keyWord: state.keyWord,
        sort: state.sort
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterTable: (filter) => {
            dispatch(actions.filterTable(filter));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
