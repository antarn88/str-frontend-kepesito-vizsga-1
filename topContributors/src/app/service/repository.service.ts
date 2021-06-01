import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from '../model/repository';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(
    private http: HttpClient,
    @Inject('apiUrl') @Optional() public apiUrl: string = '',
  ) { }

  getAll(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.apiUrl);
  }
}
