import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            Permission: ""
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        this.setState({
            [name]: value
        });
        var item = {};
        item.id = this.state.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.Permission = this.state.Permission;
        console.log(item)
    }
    kiemTraTrangThai = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="card text-left mt-2 text-center">
                    <form>
                        <div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
                            <div className="card-header">Add New USER</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label >Ten User</label>
                                    <input name="name" onChange={(event) => this.isChange(event)} type="text" className="form-control form-control-sm" aria-describedby="helpId" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <label >Phone</label>
                                    <input name="tel" onChange={(event) => this.isChange(event)} type="text" className="form-control form-control-sm" aria-describedby="helpId" placeholder="Phone Number" />
                                </div>
                                <div className="form-group">
                                    <label>Permistion</label>
                                    <select name='Permission' className="custom-select" onChange={(event) => this.isChange(event)} required>
                                        <option value>Chon Quyen Mac Dinh</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Modrator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                    <div className="invalid-feedback">Example invalid custom select feedback</div>
                                </div>
                                <div className="form-group">
                                    {/* <div className="btn btn-block btn-success" onClick={(name,tel,Permission)=>this.props.add(this.state.name,this.state.tel,this.state.Permission)}>Add</div> */}
                                    <input type="reset" className="btn btn-block btn-success" onClick={(name, tel, Permission) => this.props.add(this.state.name, this.state.tel, this.state.Permission)} value="Add New" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }


    render() {
        // console.log(this.props.hienThiForm)
        return (
            <div>
                {this.kiemTraTrangThai()}
            </div>

        );
    }
}

export default AddUser;