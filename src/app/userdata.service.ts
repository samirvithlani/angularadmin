import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }


  getUserList():Observable<any>{

    return this.http.get('http://localhost:8081/user/userlist')
  }
   
}
