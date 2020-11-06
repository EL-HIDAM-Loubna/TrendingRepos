import { Component, OnInit } from '@angular/core';
import { Repos } from '../../models/Repos';
import { ReposService }  from '../../services/repos.service'
import * as moment from 'moment';

@Component({
  selector: 'app-list-repos',
  templateUrl: './list-repos.component.html',
  styleUrls: ['./list-repos.component.css']
})
export class ListReposComponent implements OnInit {
  repos:Repos[]=[];
  p: number = 1;
  constructor(private reposservice:ReposService) { }

  ngOnInit() {
    this.reposservice.getRepos().subscribe(repos => {
      if (repos) { 
        hideSpinner(); 
    } 
      for( let i=0; i< repos.items.length; i++ ){
        this.repos.push({ 
          id:repos.items[i].id,
          Repository_name:repos.items[i].name,
          Repository_description:repos.items[i].description,
          Owner_avatar:repos.items[i].owner.avatar_url,
          Nbr_stars:repos.items[i].stargazers_count,
          Nbr_issues:repos.items[i].open_issues_count,
          Time_interval:moment(repos.items[i].created_at + "-07:00", "YYYY-MM-DD").fromNow(),
          Owner_name:repos.items[i].owner.login
        })
      }
    });
   function hideSpinner() { 
      document.getElementById('spinner') 
              .style.display = 'none'; 
  } 
  }
  pageChanged(event){
   this.p= event;
   this.repos=[];
   document.getElementById('spinner') 
      .style.display = 'block'; 
   this.reposservice.getRepos(this.p).subscribe(repos => {
    if (repos) { 
      document.getElementById('spinner') 
      .style.display = 'none'; 
  } 
   for( let i=0; i< repos.items.length; i++ ){
      this.repos.push({ 
        id:repos.items[i].id,
        Repository_name:repos.items[i].full_name,
        Repository_description:repos.items[i].description,
        Owner_avatar:repos.items[i].owner.avatar_url,
        Nbr_stars:repos.items[i].stargazers_count,
        Nbr_issues:repos.items[i].open_issues_count,
        Time_interval:moment(repos.items[i].created_at + "-07:00", "YYYY-MM-DD").fromNow(),
        Owner_name:repos.items[i].owner.login
      })
    }
  });
  window.scroll(0,0);
  }
   
}
