import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { City } from '../models/cities';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpRequest,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private constants: ConstantsService) {}

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(`${this.constants.baseAPIUrl}/cities`);
  }
}
