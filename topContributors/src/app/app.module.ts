import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContributorsBrowserComponent } from './widget/contributors-browser/contributors-browser.component';
import { ContributorCardComponent } from './widget/contributor-card/contributor-card.component';
import { RepositoriesModalComponent } from './widget/repositories-modal/repositories-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ContributorsBrowserComponent,
    ContributorCardComponent,
    RepositoriesModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
