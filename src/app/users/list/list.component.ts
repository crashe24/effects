import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';

// importar nuestro acciones
import * as usuariosActions from '../../store/actions';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  users: Usuario[] = [];
  loading: boolean;
  error: any;
  constructor(private store: Store<AppState>) {} // public _userService: UserService ) { }

  ngOnInit() {
    // this._userService.getUsers()
    // .subscribe( data => {
    //   this.users = data;
    //   console.log(data);
    // });

    // new actions.cargarUsuarios
    this.store.select('users')
    .subscribe ( usuarios => {
        this.users = usuarios.users;
        this.loading = usuarios.loading;
        this.error = usuarios.error;
    });
    this.store.dispatch ( new usuariosActions.CargarUsuarios());


  }

  /* EFECTOS
  NO todas las acciones van a generar efectos
  entiedase como efectos como alguna accion secundaria
  Que son:
  Escuchar acciones que son despachadas por el ngrx/store
  simplificar la logica en los componentes
  Comunicarse fuera del ecosistema de Angular (http sockets o tareas asincronas */

}
