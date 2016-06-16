import {Injectable} from "@angular/core";
import {Credentials} from "../types/Credentials";
import {Response, Http} from "@angular/http";
import {AuthenticationResult} from "../types/AuthenticationResult";
import {Account} from "../types/Account";
import {API_URL, DEFAULT_HEADERS, LOCALSTORAGE_AUTH} from "../../configuration";
@Injectable()
export class AuthenticationService {
    constructor(private http: Http) {
    }

    public authenticate(credentials: Credentials): void {
        this.http.post(API_URL + "/authentication/login", JSON.stringify(credentials), {headers: DEFAULT_HEADERS})
            .map((response: Response) => response.json())
            .subscribe((result: AuthenticationResult) => {
                window.localStorage.setItem(LOCALSTORAGE_AUTH, JSON.stringify(result));
            }, (errorResponse: Response) => {
                toastr.error(errorResponse.json().error);
            });
    }

    public register(account: Account): void {
        this.http.post(API_URL + "/authentication/register", JSON.stringify(account), {headers: DEFAULT_HEADERS})
            .map((response: Response) => response.json())
            .subscribe((result: AuthenticationResult) => {
                window.localStorage.setItem(LOCALSTORAGE_AUTH, JSON.stringify(result));
            }, (errorResponse: Response) => {
                toastr.error(errorResponse.json().error);
            });
    }

    public logout(): void {
        localStorage.removeItem(LOCALSTORAGE_AUTH);
    }

}