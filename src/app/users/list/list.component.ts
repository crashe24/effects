import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  users: Usuario[] = [];

  constructor( public _userService: UserService ) { }

  ngOnInit() {
    this._userService.getUsers()
    .subscribe( data => {
      this.users = data;
      console.log(data);
    });

  }

}
