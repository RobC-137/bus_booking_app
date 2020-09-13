import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  private _baseAPIUrl: string = 'http://127.0.0.1:3000/api/v1';
  constructor() {}

  get baseAPIUrl(): string {
    return this._baseAPIUrl;
  }
}
