import { Injectable } from '@angular/core';

// se debe instalar los efectos
// npm install @ngrx/effects --save

// importar los efectos
import { Actions, Effect } from '@ngrx/effects';

// importar mis acciones de los usuarios
import * as fromUsersActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
// import { userActions, CargarUsuariosSuccess } from '../actions/users.actions';

import { of } from 'rxjs'; // libreira para pasar a un observable
@Injectable()
export class UsersEffects {
    constructor( private action$: Actions,
                public _userService: UserService) {}

    // pendiente de la accion en particular
    // vamos a ponerlo en nuestr lista de usuarios
    @Effect()
    cargarUsuarios$ = this.action$.ofType( fromUsersActions.CARGAR_USUARIOS) // este es un observable
    .pipe (
        switchMap( () => {
             return this._userService.getUsers()
                     .pipe (
                         map ( users => new fromUsersActions.CargarUsuariosSuccess(users)),
                         catchError( error => of(new fromUsersActions.CargarUsuariosFail( error)) // toca convertir esto en un observabl
                         )
                     );
        })
        // map( action => {
        //     console.log(action);
        //     return action;
        // })
    );


}
