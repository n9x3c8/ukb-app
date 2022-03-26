import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoadingController, ToastController } from "@ionic/angular";
import { LoginErrorResponse, LoginResponse } from "src/app/shared/defined/type.define";
import { CURRENTLY_LOGGED } from "src/app/shared/lang/vi.lang";
import { AccountService } from "src/app/shared/services/account.service";
import { StorageService } from "src/app/shared/services/storage.service";

@Component({
    selector: 'ukb-app-login',
    styleUrls: ['login.page.scss'],
    templateUrl: 'login.page.html'
})
export class LoginPage {
    private loading;

    constructor(
        public toastController: ToastController,
        private accountService: AccountService,
        private router: Router,
        public loadingController: LoadingController,
        private storageService: StorageService
    ) { }

    public login(code: string | number, password: string | number) {
        this.presentLoading(CURRENTLY_LOGGED);
        this.accountService.login(code, password).subscribe(
            async (response: LoginResponse) => {
                if (response?.status === 200) {
                    await this.storageService.set('token', response?.data?.token);
                    await this.storageService.set('user', response?.data?.user);
                    await this.presentToast(response?.message, 'success');
                    this.router.navigate(['leaves']);
                }
            },
            async (e: LoginErrorResponse) => {
                await this.loading.dismiss();
                await this.presentToast(e?.error?.message, 'danger');
                await this.storageService.clearAll();
            },
            async () => {
                console.log('completed!');
                await this.loading.dismiss();
            });
    }

    private async presentLoading(message: string) {
        this.loading = await this.loadingController.create({
            message
        });
        await this.loading.present();
    }

    private async presentToast(message: string, color: string = 'light') {
        const toast = await this.toastController.create({
            message,
            color,
            duration: 2500
        });
        toast.present();
    }
}
