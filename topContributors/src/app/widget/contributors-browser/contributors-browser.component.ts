import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contributor } from 'src/app/model/contributor';
import { ContributorService } from 'src/app/service/contributor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contributors-browser',
  templateUrl: './contributors-browser.component.html',
  styleUrls: ['./contributors-browser.component.scss']
})
export class ContributorsBrowserComponent implements OnInit {

  contributorList: Observable<Contributor[]> = this.contributorService.getAll();
  startItem: number = 0;
  endItem: number = 12;

  constructor(
    private contributorService: ContributorService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.contributorList.subscribe(
      data => { },
      error => this.toastr.error(error.message, 'Error', { timeOut: 10000 })
    );
  }

  onScroll() {
    this.endItem += 4;
  }

}
