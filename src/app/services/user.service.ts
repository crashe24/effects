import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://reqres.in/api';

  // es todo lo que se necesita para conectarnos a los
  // servicios
  constructor(public  http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.url}/users?per_page=6&delay=1`)
    .pipe(
      map( resp => {
        console.log(resp);
          return resp['data'];
      })
    );
  }

  getUserById(id: string) {
    return this.http.get(`${this.url}/users/${id}`)
    .pipe(
      map( resp => {
        console.log(resp);
          return resp['data'];
      })
    );
  }
}
