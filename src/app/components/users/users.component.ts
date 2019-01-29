import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:User={
    firstName:'',
    lastName:'',
    age:null,
    address:{
      street:'',
      city:'',
      state:''
    }
  }
  users:User[];
  showExtended:boolean=true;
  loaded:boolean=true;
  enableAdd:boolean=false;
  showUserForm:boolean=false;
  // currentClasses={
  //
  // }
  // currentStyles={}
  constructor() { }

  ngOnInit() {
    this.users=[{
      firstName:'John',
      lastName:'Doe',
      age:30,
      address:{
        street:'50 main st',
        city:"Boston",
        state:'MA'
      },
      // image:'http:///lorempixel.com/600/600/people/10',
      isActive:true,

      registered: new Date('01/02/2018 09:30:00'),
      hide:true
    },
    {
      firstName:'Kevin',
      lastName:'Hart',
      age:34,
      address:{
        street:'43 main st',
        city:"Houston",
        state:'TX'
      },
      // image:'http:///lorempixel.com/600/600/people/7',
      isActive:false,

      registered: new Date('01/04/2018 07:30:00'),
      hide:true
    },
    {
      firstName:'Karen',
      lastName:'Williams',
      age:30,
      address:{
        street:'50 mill st',
        city:"Bronx",
        state:'NY'
      },
      // image:'http:///lorempixel.com/600/600/people/8',
      isActive:true,

      registered: new Date('01/06/2018 10:30:00'),
      hide:true
    }

    ]
    this.loaded=true;
    // this.setCurrentClasses();
    // this.setCurrentStyles();


    // this.addUser({
    //   firstName:'Kerry',
    //   lastName:'James'
    //
    //
    // })
  }
  addUser(){
    this.user.isActive=true
    this.user.registered=new Date();
    this.users.unshift(this.user)
    this.user={
      firstName:'',
      lastName:'',
      age:null,
      address:{
        street:'',
        city:'',
        state:''
      }
    }
  }
  fireEvent(e){
    console.log(e.type)
    console.log(e.target.value)
  }
  toggleHide(user:User){
    user.hide = !user.hide
  }
  onSubmit(e){
    console.log(e.target.value)
    e.preventDefault();
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
