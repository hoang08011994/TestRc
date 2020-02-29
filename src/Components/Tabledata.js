import React, { Component } from 'react';
import TableDataRow from '../Components/TableDataRow.js'
class Tabledata extends Component {
    deleteButtonClick = (idUser)=>{
        this.props.deleteUser(idUser);
    }
    mappingDataUser = () =>
        this.props.dataUserProps.map((value, key) => (
            <TableDataRow
                deleteButtonClick = {(idUser)=>{this.deleteButtonClick(idUser)}}
                editFunClick={(user) => this.props.editFun(value)}
                userName={value.name}
                stt={key}
                tel={value.tel}
                permission={value.Permission}
                id={value.id}
                changeEditUserStatus={() => { this.props.changeEditUserStatus() }}
            />
        ))
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-inverse table-hover">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Permistion</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Tabledata;