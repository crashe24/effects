import { Usuario } from '../../models/usuario.model';

// importacion de las acciones
import * as fromUserAction from '../actions';

// estado
export interface UserState {
    user: Usuario;
    loaded: boolean;
    loading: boolean;
    error: any;
}

// estado inicial
const estadoInicial: UserState = {
    user: null,
    loaded: false,
    loading: false ,
    error: null
};

// creacion del reducer
export function userReducer ( state = estadoInicial, action: fromUserAction.userAction): UserState {
    switch (action.type) {
        case fromUserAction.CARGAR_USUARIO:
            return  {
                ...state,
                loading: true,
                error: null
            };
        case fromUserAction.CARGAR_USUARIO_SUCCESS:
            return  {
                ...state,
                loading: false,
                loaded: true,
                user: {...action.user}
            };
        case fromUserAction.CARGAR_USUARIO_FAIL:
            return  {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            };

        default: return state;
    }
}

