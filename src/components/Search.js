import React, { Component } from 'react';
import * as actions from './../actions/index'
import {connect} from 'react-redux';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            txtSearch: ''
        }
    }

    onChangeValue = (event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;

        this.setState({
            [name]: value
        })
    }

    searchList = ()=>{
        this.props.onSearchList(this.state.txtSearch);
    }

    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Nhập từ khóa..." value = {this.state.txtSearch} name = "txtSearch" onChange = {this.onChangeValue}/>
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick = {this.searchList}>
                        <span className="fa fa-search mr-5"></span>&nbsp;Tìm
                                </button>
                </span>
            </div>
        );
    }

}

const mapStateToProps = (state) =>{
    return {
    }   
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onSearchList: (keyWord) =>{
            dispatch(actions.searchList(keyWord));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
