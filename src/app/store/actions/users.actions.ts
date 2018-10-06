import { Action } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

// acciones

export const CARGAR_USUARIOS = '[Users] Cargar usuarios';
export const CARGAR_USUARIOS_FAIL = '[Users] Cargar usuarios fail';
export const CARGAR_USUARIOS_SUCCESS = '[Users] Cargar usuarios success';

// clases que permitan crear las acciones

export class CargarUsuarios implements Action {
    readonly type =  CARGAR_USUARIOS;
}
export class CargarUsuariosFail implements Action {
    readonly type =  CARGAR_USUARIOS_FAIL;

    constructor (public payload: any) {}
}
export class CargarUsuariosSuccess implements Action {
    readonly type =  CARGAR_USUARIOS_SUCCESS;

    constructor (public users: Usuario[]) {}

}

// exportar el tipo
export type userActions = CargarUsuarios | CargarUsuariosFail | CargarUsuariosSuccess;
