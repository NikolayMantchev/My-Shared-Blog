// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../../services/auth.service';
// import { UsersService } from '../../services/users.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css'],
// })
// export class HomeComponent {
//   // user$ = this.usersService.currentUserProfile$;

//   constructor(
//     private authService: AuthService,
//     public usersService: UsersService,
//     private router: Router
//   ) {}

//   logout() {
//     this.authService.logout().subscribe(() => {
//       this.router.navigate(['/']);
//     });
//   }
// }


// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/services/auth.service';
// import { UsersService } from 'src/app/services/users.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//   user$ = this.usersService.currentUserProfile$;
//   constructor(private usersService: UsersService) {}

//   ngOnInit(): void {}

// }
