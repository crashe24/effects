import { Usuario } from '../../models/usuario.model';

// importacion de las acciones
import * as fromUsersAction from '../actions';
import { CARGAR_USUARIOS_SUCCESS } from '../actions/users.actions';

// estado
export interface UsersState {
    users: Usuario[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

// estado inicial
const estadoInicial: UsersState = {
    users: [],
    loaded: false,
    loading: false ,
    error: null
};

// creacion del reducer
export function usersReducer ( state = estadoInicial, action: fromUsersAction.userActions): UsersState {
    switch (action.type) {
        case fromUsersAction.CARGAR_USUARIOS:
            return  {
                ...state,
                loading: true,
                error: null
            };
        case fromUsersAction.CARGAR_USUARIOS_SUCCESS:
            return  {
                ...state,
                loading: false,
                loaded: true,
                users: [...action.users]
            };
        case fromUsersAction.CARGAR_USUARIOS_FAIL:
            return  {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            };

        default: return state;
    }
}

