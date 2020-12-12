import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../model/user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  baseUrl = 'http://localhost:3000/user';
  constructor(private http: HttpClient) {

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  getAll(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/user');
  }

  AddUser(user){
    return this.http.post('http://localhost:3000/user', user);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  login(user: User): Observable<User>{
    return this.http.get<User>('http://localhost:3000/user?email=' + user.email + '&password=' + user.password);
  }


}
