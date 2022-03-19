import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { LoginPageRoutingModule } from "./login-routing.module";
import { LoginPage } from "./login.page";

@NgModule({
    declarations: [LoginPage],
    imports: [
        CommonModule,
        IonicModule,
        LoginPageRoutingModule,
    ]
})
export class LoginModule {}