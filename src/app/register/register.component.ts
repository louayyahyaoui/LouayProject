import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../model/user';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  allUser: User[];
  user: User;
  constructor(private us: UserService) { }

  ngOnInit(): void {
    this.user = new User();
  }

  addUser(){
    console.log(this.user);
    this.us.AddUser(this.user).subscribe((response) => ( console.log("User added")));
  }

  getAll() {
    this.us.getAll().subscribe( next => this.allUser = next);
  }

}
