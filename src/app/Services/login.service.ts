import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersDTO } from '../DTO/UsersDTO';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private httpClient: HttpClient) { }

  ProceedLogin(_data: any){
    console.log(_data);
    return this.httpClient.get<UsersDTO []>('http://localhost:3000/users?name='+ _data.username + '&password='+ _data.password);
  }
}
