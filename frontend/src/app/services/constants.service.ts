import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  private _baseApiUrl: string = 'http://127.0.0.1:3000/api/v1';
  private _stopsApiUrl: string = `${this._baseApiUrl}/stops`;
  private _citiesApiUrl: string = `${this._baseApiUrl}/cities`;
  constructor() {}

  get baseApiUrl(): string {
    return this._baseApiUrl;
  }

  get stopsApiUrl(): string {
    return this._stopsApiUrl;
  }

  get citiesApiUrl(): string {
    return this._citiesApiUrl;
  }
}
