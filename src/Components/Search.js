import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userObj:{}
        }
    }
    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            tempValue: event.target.value
        });
    }
    hienThiNut = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()}>Cancel</div>
            )
        } else {
            return (
                <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()}>Add New Item</div>
            )
        }
    }
    getUserInfo = (info) =>{
        this.setState({
            userObj : info
        });
        this.props.getUserInfo(info)
    }
    isShowEditForm = ()=>{
        if(this.props.editUserStatus === true){
            return <EditUser 
            changeEditUserStatus={()=>this.props.changeEditUserStatus()}
            userEditObject = {this.props.userEditObject}
            getUserInfo = {(info)=>{this.getUserInfo(info)}}
            />
        }
        else{}
    }
    render() {
        console.log('123456789' + this.props.editUserStatus)
        return (
            <div className="col-12">
                {this.isShowEditForm()}
                <div className="form-group">
                    <div className="btn-group">
                        <input onChange={(event) => this.isChange(event)} type="text" className="form-control" aria-describedby="helpId" placeholder="Nhap Tu Khoa" />
                        <button type="button" className="btn btn-primary" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}>Search</button>
                    </div>
                    <div className="mt-5">
                        {this.hienThiNut()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;