import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GithubdataService } from './githubdata.service';
import { EvaluationPipe } from './evaluation.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EvaluationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GithubdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
