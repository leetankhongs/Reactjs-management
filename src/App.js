import React, { Component } from 'react';
import './App.css'
import TaskForm from './components/TaskForm'
import Controll from './components/Controll'
import TaskList from './components/TaskList'
import { connect } from 'react-redux'
import * as actions from './actions/index'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Sort: 0
        };
    }

    addTask = () => {

        if(this.props.taskEditing){
            this.props.onNullTaskEditing();
            this.props.onOpenForm();
        }else{
            this.props.onToggleForm();
        }
    }



    filterList = (filterName, filterStatus) => {
        this.setState({
            Filter: {
                Name: filterName.toLowerCase(),
                Status: filterStatus
            }
        })

    }

    searchList = (txtSearch) => {
        this.setState({
            Keyword: txtSearch
        })
    }

    sortBy = (type) => {
        this.setState({
            Sort: type
        })
    }

    render() {
        var { isDisplayForm } = this.props;

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý CRUSH</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className={isDisplayForm === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                        <TaskForm />
                    </div>
                    <div className={isDisplayForm === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button type="button" className="btn btn-primary" onClick={this.addTask}>
                            <span className="fa fa-plus mr-5"></span>&nbsp;Thêm CRUSH
                        </button>&nbsp;
                        <div className="row mt-15">
                            <Controll searchList={this.searchList} sortBy={this.sortBy} />
                        </div>
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm,
        taskEditing: state.taskEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(actions.toggleForm());
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        },
        onOpenForm: () =>{
            dispatch(actions.openForm())
        },
        onNullTaskEditing: () =>{
            dispatch(actions.nullTaskEditing())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
