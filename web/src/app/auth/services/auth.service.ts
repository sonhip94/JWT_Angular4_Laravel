import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { User } from './../models/user.model';
@Injectable()
export class AuthService {

	constructor(
		private httpClient : HttpClient
		) { }

	check() : boolean {
		return localStorage.getItem('user') ? true : false;
	}

	login(credentials : {email: string, password: string}): Observable<boolean>{
		return this.httpClient.post<any>(`${environment.api_url}/auth/login`,credentials)
		.do(data => {
			localStorage.setItem('token', data.token);
			localStorage.setItem('user', btoa(JSON.stringify(data.user)));
		});
	}

	logout(): void{
		this.httpClient.get(`${environment.api_url}/auth/logout`);
		localStorage.clear();
	}

	getUser(): User {
		return localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : null;
	}

	// setUser(): Promise<boolean> {
	// 	return this.httpClient.get(`${environment.api_url}/auth/me`).toPromise().then(data => {
	// 		if(data['user']){
	// 			localStorage.setItem('user', btoa(JSON.stringify(data['user'])));
	// 			return true;
	// 		}
	// 		return false;
	// 	});
	// }

	me(): Observable<User>{
		return this.httpClient.get<any>(`${environment.api_url}/auth/me`);
	}
}
