import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_uri = '//localhost:8000/'
  base_uri_api = this.base_uri + 'api/'

  constructor() { }
}
