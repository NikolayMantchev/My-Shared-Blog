import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor(
    public authService: AuthService, public router: Router
    ) {if (this.authService.isLoggedIn === true) {
      this.router.navigate(['home']);
    }}
    
  ngOnInit() { }
}


// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HotToastService } from '@ngneat/hot-toast';
// import { AuthService } from 'src/app/services/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   loginForm = new FormGroup({
//     email: new FormControl('', [Validators.required, Validators.email]),
//     password: new FormControl('', [Validators.required])
//   });

//   constructor(private authService: AuthService, private toast: HotToastService, private router: Router) { }

//   ngOnInit(): void {
//   }

//   get email() {
//     return this.loginForm.get('email');
//   }

//   get password() {
//     return this.loginForm.get('password');
//   }

//   submit() {
//     if (!this.loginForm.valid) {
//       return;
//     }

//     const { email, password } = this.loginForm.value;
//     this.authService.login(email, password).pipe(
//       this.toast.observe({
//         success: 'Logged in successfully',
//         loading: 'Logging in...',
//         error: ({ message }) => `There was an error: ${message} `
//       })
//     ).subscribe(() => {
//       this.router.navigate(['/home']);
//     });

//   }

// }
