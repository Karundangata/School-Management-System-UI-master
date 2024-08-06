import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpClient
} from '@angular/common/http';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from "@angular/common";

@Injectable()
export class XsrfInterceptor implements HttpInterceptor {
  constructor(private http: HttpClient, private api: ApiService, private router: Router, private location: Location, private snack: MatSnackBar) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    const token = this.getToken();

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `X-XSRF-TOKEN ${token}`,
        },
      });
    }

    return next.handle(request).pipe(
      tap({
        error: (errorResponse: any) => {
          if (errorResponse.status === 419) {
            this.http.get(this.api.base_uri + 'sanctum/csrf-cookie', { withCredentials: true }).subscribe()
          }
          if (errorResponse.status === 401) {
            const allowedPaths: string[] = ['/forgot-password', '/login', '/start', '/password-reset', '/submitted', '/cookie-policy']; // Array of allowed paths

            // Get the current route
            const currentRoute: string = this.location.path();

            // Check if the current route does not start with any of the allowed paths
            if (!allowedPaths.some(path => currentRoute.startsWith(path))) {
              // this.router.navigate(['/login'], { queryParams: { redirect_to: } });
              window.location.href = `${this.api.base_uri}/login?redirect_to=${window.location.origin}${this.router.url}`;
            }
          }
          if (errorResponse.status === 403) {
            this.snack.open('Action is Unauthorized', '', { duration: 5000 })
          }
        }
      })
    );
  }

  getToken() {
    let cookie_string = document.cookie.split('; ').find(row => row.startsWith('XSRF-TOKEN='))?.split('=')[1]
    return cookie_string ? cookie_string : '';
  }
}
