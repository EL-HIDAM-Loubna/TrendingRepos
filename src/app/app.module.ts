import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListReposComponent } from './components/list-repos/list-repos.component';
import { ItemReposComponent } from './components/item-repos/item-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListReposComponent,
    ItemReposComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
