import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            Permission: this.props.userEditObject.Permission
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.Permission = this.state.Permission;
        this.props.getUserInfo(info);
        this.props.changeEditUserStatus();// doi trang thai hide form

    }
    render() {
        return (
            <div className="row">
                <div className="card text-center mt-2 text-center col-sm-12">
                    <form>
                        <div className="card text-white bg-warning mb-3">
                            <div className="card-header">Add New USER</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label >Ten User</label>
                                    <input onChange={(event) => { this.isChange(event) }} defaultValue={this.props.userEditObject.name} name="name" type="text" className="form-control form-control-sm" aria-describedby="helpId" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <label >Phone</label>
                                    <input onChange={(event) => { this.isChange(event) }} defaultValue={this.props.userEditObject.tel} name="tel" type="text" className="form-control form-control-sm" aria-describedby="helpId" placeholder="Phone Number" />
                                </div>
                                <div className="form-group">
                                    <label>Permistion</label>
                                    <select onChange={(event) => { this.isChange(event) }} defaultValue={this.props.userEditObject.Permission} name='Permission' className="custom-select" required>
                                        <option value>Chon Quyen Mac Dinh</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Modrator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                    <div className="invalid-feedback">Example invalid custom select feedback</div>
                                </div>
                                <div className="form-group">

                                    <input type="reset" className="btn btn-block btn-info" value="Add New" onClick={() => this.saveButton()} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditUser;