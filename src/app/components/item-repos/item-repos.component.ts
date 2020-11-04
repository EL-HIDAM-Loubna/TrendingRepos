import { Repos } from './../../models/Repos';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-repos',
  templateUrl: './item-repos.component.html',
  styleUrls: ['./item-repos.component.css']
})
export class ItemReposComponent implements OnInit {
  @Input()  repo: Repos;
  constructor() { }

  ngOnInit() {
  }

}
