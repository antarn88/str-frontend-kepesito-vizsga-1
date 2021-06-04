import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repository } from '../model/repository';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  reposUrl: string = '';
  newList: Repository[] = [];

  constructor(private http: HttpClient) { }

  async getRepositoryList(reposUrl: string): Promise<Repository[]> {
    this.newList = [];
    this.reposUrl = reposUrl;
    const list = await this.http.get<any[]>(this.reposUrl).toPromise();

    list.forEach(item => {
      this.newList.push({
        name: item.name,
        forked: item.fork,
        stars: item.stargazers_count,
        updated: item.updated_at
      });
    });

    this.newList.sort((a, b) => b.updated.localeCompare(a.updated));
    return this.newList;
  }

}
