import { Component } from "@angular/core";

@Component({
    selector: 'ukb-app-login',
    styleUrls: ['login.page.scss'],
    templateUrl: 'login.page.html'
})
export class LoginPage {
    constructor() { }

    public login(account: string | number, password: string | number): void {
    }
}