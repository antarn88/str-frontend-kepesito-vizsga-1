import { Component, Input, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/service/repository.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-repositories-modal',
  templateUrl: './repositories-modal.component.html',
  styleUrls: ['./repositories-modal.component.scss'],
})
export class RepositoriesModalComponent implements OnInit {

  @Input() reposUrl: string = '';
  @Input() contributorName: string = '';
  modalContentList: string[] = [];

  constructor(
    private repositoryService: RepositoryService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  async onClick(longContent: any): Promise<void> {
    this.modalContentList = [];
    const list = await this.repositoryService.getRepositoryList(this.reposUrl);

    for (const item of list) {
      const repo = `Repository name: ${item.name}, Forked: ${item.forked}, Stars: ${item.stars}, Updated: ${item.updated}`;
      this.modalContentList.push(repo);
    }

    this.modalService.open(longContent, { scrollable: true });
  }


}


