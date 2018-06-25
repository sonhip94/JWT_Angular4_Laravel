import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/services/auth.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
	selector: 'app-admin-dashboard1',
	templateUrl: './admin-dashboard1.component.html',
	styleUrls: ['./admin-dashboard1.component.css']
})
export class AdminDashboard1Component implements OnInit {

	constructor(
		private authService : AuthService,
		private routerService: Router
		) { }
	ngOnInit() {
	}

	onLogout(event){
		event.preventDefault();
		this.authService.logout();
		this.routerService.navigate(['auth/login']);
	}

}
