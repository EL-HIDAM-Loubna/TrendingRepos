import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  date = formatDate(moment().subtract(30,'day').calendar(),"yyyy-MM-dd",'en');
  reposUrl:string = 'https://api.github.com/search/repositories?q=created:%3E'+this.date+'&sort=stars&order=desc';
  constructor(private http:HttpClient) { }
  getRepos(page:number = 1):Observable<any>{
     return this.http.get<any>(this.reposUrl+'&page='+page);
  }
}
