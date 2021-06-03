import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contributor } from 'src/app/model/contributor';
import { ContributorService } from 'src/app/service/contributor.service';

@Component({
  selector: 'app-contributors-browser',
  templateUrl: './contributors-browser.component.html',
  styleUrls: ['./contributors-browser.component.scss']
})
export class ContributorsBrowserComponent implements OnInit {

  contributorList: Observable<Contributor[]> = this.contributorService.getAll();
  
  constructor(private contributorService: ContributorService) { }

  ngOnInit(): void {
  }

}
