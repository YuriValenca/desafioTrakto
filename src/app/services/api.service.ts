import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://raw.githubusercontent.com/trakto/desafio_frontend/main/DesafioTrakto.postman_collection.json';

  constructor(private http: HttpClient) { }

  public getApiData() {
    return this.http.get(this.apiUrl);
  }
}
