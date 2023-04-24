import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

interface LoginResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  isLoading = false;
  isLoggedIn = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    // verificação se o usuário não está logado
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      this.isLoggedIn = false;
      // para redirecionar ele pra home, caso tente entrar com outra URL
      this.router.navigate(['/']);
    }
  }

  login(email: string, password: string) {
    this.isLoading = true;

    const body = { email, password };

    this.http.post<LoginResponse>('https://api.trakto.io/auth/signin', body)
      .pipe(
        tap(response => {
          this.isLoggedIn = true;
          localStorage.setItem('access_token', response.access_token);
          this.router.navigate(['/modules']);
        }),
        catchError(error => {
          this.isLoggedIn = false;
          return of(null);
        })
      )
      .subscribe(() => this.isLoading = false);
  }
}
