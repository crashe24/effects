import { Action } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

// acciones

export const CARGAR_USUARIO = '[User] Cargar usuario';
export const CARGAR_USUARIO_FAIL = '[User] Cargar usuario fail';
export const CARGAR_USUARIO_SUCCESS = '[User] Cargar usuario success';

// clases que permitan crear las acciones

export class CargarUsuario implements Action {
    readonly type =  CARGAR_USUARIO;
    constructor( public id: string) {}
}
export class CargarUsuarioFail implements Action {
    readonly type =  CARGAR_USUARIO_FAIL;

    constructor (public payload: any) {}
}
export class CargarUsuarioSuccess implements Action {
    readonly type =  CARGAR_USUARIO_SUCCESS;

    constructor (public user: Usuario) {}

}

// exportar el tipo
export type userAction = CargarUsuario | CargarUsuarioFail | CargarUsuarioSuccess;
