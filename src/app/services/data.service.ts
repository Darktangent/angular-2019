import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs'
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
users:User[]
data:Observable<User>;
  constructor() {
    this.users=
    [{
      firstName:'John',
      lastName:'Doe',
      email:'john@gmail.com',
      // image:'http:///lorempixel.com/600/600/people/10',
      isActive:true,

      registered: new Date('01/02/2018 09:30:00'),
      hide:true
    },
    {
      firstName:'Kevin',
      lastName:'Hart',
    email:'kevin@yahoo.com',
      // image:'http:///lorempixel.com/600/600/people/7',
      isActive:false,

      registered: new Date('01/04/2018 07:30:00'),
      hide:true
    },
    {
      firstName:'Karen',
      lastName:'Williams',
      email:'karen@gmail.com',
      // image:'http:///lorempixel.com/600/600/people/8',
      isActive:true,

      registered: new Date('01/06/2018 10:30:00'),
      hide:true
    }

    ]
   }
   getData(){
     this.data=new Observable(observer=>{
       setTimeout(()=>{
         observer.next(1);
       },1000);
       setTimeout(()=>{
         observer.next(2);
       },2000);
       setTimeout(()=>{
         observer.next(3);
       },3000);
       setTimeout(()=>{
         observer.next(4);
       },4000);
     })
     return this.data;
   }
   getUsers():Observable<User>{
     console.log("Fetching users from service")
     return of(this.users);
   }
   addUser(user:User){
     this.users.unshift(user);
   }
}
