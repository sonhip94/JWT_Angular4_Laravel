import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { TokenInterceptor } from './intercreptors/token.intercreptor';
import { RefreshTokenInterceptor } from './intercreptors/refreshToken.intercreptor';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import {AplicationErrorHandle} from './app.error-handle';


@NgModule({
    declarations: [
    AppComponent,
    ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AdminModule,
    HttpClientModule
    ],
    providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },    
    { provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true },
    { provide: ErrorHandler, useClass: AplicationErrorHandle }

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
