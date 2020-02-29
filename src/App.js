import React, { Component } from 'react';
import Header from './Components/Header';
import Search from './Components/Search';
import Tabledata from './Components/Tabledata';
import AddUser from './Components/AddUser';
import DataUser from './Components/Data.json';
const uuidv1 = require('uuid/v1');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: [],
      searchText: '',
      editUserStatus: true,
      userEditObject: {}
    }
  }
  componentWillMount(){
      if(localStorage.getItem('userData') === null){
        localStorage.setItem('userData',JSON.stringify(DataUser));
      }
      else{
        var temp = JSON.parse(localStorage.getItem('userData'));
        this.setState({
          data:temp
        });
      }
  }
  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
    // console.log('Connected Suggest:' + this.state.searchText);
  }
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }
  thongBao = () => {
    // console.log('Suggest ful');
  }
  getNewUserData = (name, tel, Permission) => {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;

    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items
    });
    localStorage.setItem('userData',JSON.stringify(items));
  }
  editUser = (user) => {
    console.log('Ket noi giua App.js voi TableData');
    console.log(user);
    this.setState({
      userEditObject: user
    })
  }
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    })
  }
  getUserEditInfoApp = (info) => {
    console.log('thong tin da fix: ' + info.name);
    this.state.data.forEach((value, key) => {
      console.log(value.name);
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
      localStorage.setItem('userData',JSON.stringify(this.state.data));
    })
  }
  deleteUser = (idUser) => {
      var tempData = this.state.data;
      tempData = tempData.filter(item=> item.id !== idUser);
      this.setState({
        data:tempData
      })
      // console.log(tempData);
      localStorage.setItem('userData',JSON.stringify(tempData));

  }
  render() {
    var ketqua = [];
    this.state.data.forEach((item) => {

      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item);
      }
    })
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <Search
              getUserInfo={(info) => { this.getUserEditInfoApp(info) }}
              checkConnectProps={(dl) => this.getTextSearch(dl)}
              ketNoi={() => this.doiTrangThai()}
              hienThiForm={this.state.hienThiForm}
              editUserStatus={this.state.editUserStatus}
              changeEditUserStatus={() => { this.changeEditUserStatus() }}
              userEditObject={this.state.userEditObject}
            />
            <Tabledata
              deleteUser={(idUser)=>{this.deleteUser(idUser)}}
              editFun={(user) => { this.editUser(user) }}
              dataUserProps={ketqua}
              changeEditUserStatus={() => { this.changeEditUserStatus() }}
            />
            <AddUser add={(name, tel, Permission) => { this.getNewUserData(name, tel, Permission) }} hienThiForm={this.state.hienThiForm} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;