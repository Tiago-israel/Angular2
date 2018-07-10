import { ApplicationErrorHandler } from './app.application-error-handler';
import { ErrorHandler } from '@angular/core';
import { FilmesComponent } from './components/filmes.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './template-driven/form.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FundoColoridoDirective } from './directives/fundo-colorido.directive';
import { UppercaseDirective } from './directives/uppercase.directive';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { MessageService } from 'primeng/components/common/messageservice';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FilmesComponent,
    FundoColoridoDirective,
    UppercaseDirective,
    OnlyNumberDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [
    MovieService,
    MessageService,
    { provide: ErrorHandler, useClass: ApplicationErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
