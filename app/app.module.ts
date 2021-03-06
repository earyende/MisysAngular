﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptorProvider, ErrorInterceptorProvider } from './_helpers/index';
import { AlertService, AuthenticationService, UserService, TypepService, UtilisateurService, ProduitService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { TypepComponent } from './typep/index';
import { ListeproduitComponent } from './listeproduit/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        TypepComponent,
        ListeproduitComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        TypepService,
        UtilisateurService,
        ProduitService,
        JwtInterceptorProvider,
        ErrorInterceptorProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }