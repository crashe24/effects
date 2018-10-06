import { Injectable } from '@angular/core';
// importar los efectos
import { Actions, Effect } from '@ngrx/effects';

// importar mis acciones de los usuarios
import * as fromUsersAction from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
// import { userActions, CargarUsuariosSuccess } from '../actions/users.actions';

import { of } from 'rxjs'; // libreira para pasar a un observable
@Injectable()
export class UserEffects {
    constructor( private action$: Actions,
                public _userService: UserService) {}

    // pendiente de la accion en particular
    // vamos a ponerlo en nuestr lista de usuarios
    @Effect()
    cargarUsuario$ = this.action$.ofType( fromUsersAction.CARGAR_USUARIO) // este es un observable
    .pipe (
        switchMap( (action) => {
            console.log(action);
            const id = action['id'];
             return this._userService.getUserById(id)
                     .pipe (
                         map ( user => new fromUsersAction.CargarUsuarioSuccess(user)),
                         catchError( error => of(new fromUsersAction.CargarUsuarioFail( error)) // toca convertir esto en un observabl
                         )
                     );
        })

    );


}
