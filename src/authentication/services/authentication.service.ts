import {Injectable} from "@angular/core";
import {Credentials} from "../types/Credentials";
import {Response, Http} from "@angular/http";
import {AuthenticationResult} from "../types/AuthenticationResult";
import {Account} from "../types/Account";
import {API_URL, DEFAULT_HEADERS, LOCALSTORAGE_AUTH} from "../../configuration";
import * as toastr from "toastr";
import {ApplicationState} from "../../common/state/ApplicationState";
import {Store} from "@ngrx/store";
import {
    DATA_AUTHENTICATION_SET_AUTHENTICATION,
    DATA_AUTHENTICATION_CLEAR_AUTHENTICATION
} from "../../common/actionTypes";
@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private store: Store<ApplicationState>) {
    }

    public authenticate(credentials: Credentials): void {
        this.http.post(API_URL + "/authentication/login", JSON.stringify(credentials), {headers: DEFAULT_HEADERS})
            .map((response: Response) => response.json())
            .subscribe((result: AuthenticationResult) => {
                window.localStorage.setItem(LOCALSTORAGE_AUTH, JSON.stringify(result));
                this.store.dispatch({type: DATA_AUTHENTICATION_SET_AUTHENTICATION, payload: result});
            }, (errorResponse: Response) => {
                toastr.error(errorResponse.json().error);
            });
    }

    public register(account: Account): void {
        this.http.post(API_URL + "/authentication/register", JSON.stringify(account), {headers: DEFAULT_HEADERS})
            .map((response: Response) => response.json())
            .subscribe((result: AuthenticationResult) => {
                window.localStorage.setItem(LOCALSTORAGE_AUTH, JSON.stringify(result));
                this.store.dispatch({type: DATA_AUTHENTICATION_SET_AUTHENTICATION, payload: result});
            }, (errorResponse: Response) => {
                toastr.error(errorResponse.json().error);
            });
    }

    public logout(): void {
        localStorage.removeItem(LOCALSTORAGE_AUTH);
        this.store.dispatch({type: DATA_AUTHENTICATION_CLEAR_AUTHENTICATION});
    }

    public checkInitialAuthentication(): void {
        let localStorageObj = window.localStorage.getItem(LOCALSTORAGE_AUTH);
        if (localStorageObj) {
            this.store.dispatch({
                type: DATA_AUTHENTICATION_SET_AUTHENTICATION,
                payload: JSON.parse(localStorageObj)
            });
        }
    }
}