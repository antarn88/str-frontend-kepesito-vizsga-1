import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repository } from '../model/repository';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  reposUrl: string = '';
  newList: Repository[] = [];

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) { }

  async getRepositoryList(reposUrl: string): Promise<Repository[]> {
    this.newList = [];
    let list = [];
    this.reposUrl = reposUrl;

    try {
      list = await this.http.get<any[]>(this.reposUrl).toPromise();
    }
    catch (error) {
      this.toastr.error(error.message, 'Error', { timeOut: 10000 });
    }

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
