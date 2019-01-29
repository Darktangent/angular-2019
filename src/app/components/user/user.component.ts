import { Component, OnInit } from '@angular/core'
import {User} from '../../models/User'
@Component({
  selector:'app-user',
  templateUrl:'./user.component.html',
  styleUrls:['./user.component.css']
})
export class UserComponent implements OnInit{
  //properties
  user:User;


  constructor(){

  }
  ngOnInit(){
    this.user={
      firstName:'John',
      lastName:'Doe',
      age:30,
      address:{
        street:'50 main st',
        city:"Boston",
        state:'MA'
      }
    }
  }


}
