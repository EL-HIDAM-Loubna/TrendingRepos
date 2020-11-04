import { Component, OnInit } from '@angular/core';
import { Repos } from '../../models/Repos';
import { ReposService }  from '../../services/repos.service'

@Component({
  selector: 'app-list-repos',
  templateUrl: './list-repos.component.html',
  styleUrls: ['./list-repos.component.css']
})
export class ListReposComponent implements OnInit {
  repos:Repos[];
  constructor(private reposservice:ReposService) { }

  ngOnInit() {
    this.repos=this.reposservice.getRepos();
  }

}
