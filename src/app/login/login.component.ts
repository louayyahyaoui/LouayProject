import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../model/user';
import {UserService} from '../shared/user.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fg: FormGroup;
  user: User;
  test: User[] = [];
  constructor(private us: UserService) { }

  ngOnInit(): void {
    this.user = new User();
    this.fg = new FormGroup( {
      email: new FormControl(),
      password: new FormControl()
    });
  }

  get email(){
    return this.fg.get("email");
  }

  get password(){
    return this.fg.get("password");
  }

  save(){

      this.user.email = this.email.value;
      this.user.password = this.password.value;
      this.us.login(this.user).subscribe( next => this.test.push(next));
      if(this.test.length !== 0){
        alert("Bienvenue :)");
      }
      else
      {alert("verifier vos donné");}

      this.test.length = 0;



  }

}
