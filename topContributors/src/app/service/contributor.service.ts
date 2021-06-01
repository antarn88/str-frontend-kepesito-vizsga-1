import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contributor } from '../model/contributor';

@Injectable({
  providedIn: 'root'
})
export class ContributorService {

  apiUrl = 'https://api.github.com/repos/angular/angular/contributors?page=1&per_page=100';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Contributor[]> {
    return this.http.get<Contributor[]>(this.apiUrl);
  }

}
