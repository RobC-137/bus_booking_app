import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { City } from '../models/cities';
import { Stop } from '../models/stops';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
    return this.http
      .get<City[]>(`${this.constants.citiesApiUrl}`)
      .pipe(
        map((cities) =>
          cities.sort((cityA, cityB) => cityA.name.localeCompare(cityB.name))
        )
      );
  }

  postStop(stop: Stop) {
    return this.http.post(`${this.constants.stopsApiUrl}`, stop);
  }
}
