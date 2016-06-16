import {Action} from "@ngrx/store";
import {AuthenticationDataState} from "../../state/DataState";
let authenticationState: AuthenticationDataState = {
    isAuthenticated: false,
    jwtToken: "",
    account: null
}
export function authenticationReducer(state: AuthenticationDataState = authenticationState,
                                      action: Action = null): AuthenticationDataState {
    switch (action.type) {
        default:
            return state;
    }
};