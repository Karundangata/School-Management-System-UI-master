import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class XsrfService {
  constructor(private api: ApiService, private http: HttpClient) {
    this.get_xsrf_cookie()
  }

  get_xsrf_cookie() {
    this.http.get(this.api.base_uri + 'sanctum/csrf-cookie', { withCredentials: true }).subscribe()
  }
}
