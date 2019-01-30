import { Component, OnInit, ViewChild } from '@angular/core';
import {User} from '../../models/User';
import {DataService} from '../../services/data.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:User={
    firstName:'',
    lastName:'',
    email:''
  }
  users:User[];
  showExtended:boolean=true;
  loaded:boolean=true;
  enableAdd:boolean=false;
  showUserForm:boolean=false;
  @ViewChild('userForm') form:any;
  data:any
  // currentClasses={
  //
  // }
  // currentStyles={}
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data=>{
      console.log(data)
    })
    this.dataService.getUsers().subscribe(users=>{
      this.users=users;
      this.loaded=true;
    })

    // this.setCurrentClasses();
    // this.setCurrentStyles();


    // this.addUser({
    //   firstName:'Kerry',
    //   lastName:'James'
    //
    //
    // })
  }
  // addUser(){
  //   this.user.isActive=true
  //   this.user.registered=new Date();
  //   this.users.unshift(this.user)
  //   this.user={
  //     firstName:'',
  //     lastName:'',
  //     email:''
  //   }
  // }

  toggleHide(user:User){
    user.hide = !user.hide
  }
  onSubmit({value,valid}:{value:User, valid:boolean}){
    // console.log(e.target.value)
    // e.preventDefault();'
    if(!valid){
      console.log('Form is not valid')
    }else{
      value.isActive=true;
      value.registered= new Date();
      value.hide=false;
      this.dataService.addUser(value)
      this.form.reset();
    }

  }
//   setCurrentClasses(){
//     this.currentClasses={
//       'btn-success':this.enableAdd,
//       'big-text':this.showExtended
//     }
//   }
// setCurrentStyles(){
//   this.currentStyles={
//     'padding-top':this.showExtended?'0':'40px',
//     'font-size':this.showExtended?'':'40px'
//   }
// }
}
