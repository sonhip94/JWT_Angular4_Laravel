import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment.prod';

import { AuthService } from './../services/auth.service';
import { User } from './../models/user.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	user : User;

	subScription: Subscription;

	constructor(
		private authService : AuthService
		) { }

	ngOnInit() {
		this.subScription = this.authService.me().subscribe(data=>{
			this.user = data['user'];
		});
		
	}

	ngOnDestroy(){
		if(this.subScription){
			this.subScription.unsubscribe();
		}
	}

}
