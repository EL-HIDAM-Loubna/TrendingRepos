import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Repos } from '../models/Repos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  reposUrl:string = 'https://api.github.com/search/repositories?q=created:%3E2020-10-04&sort=stars&order=desc';
  constructor(private http:HttpClient) { }
  getRepos():Observable<any>{
     return this.http.get<any>(this.reposUrl);
  }
}
