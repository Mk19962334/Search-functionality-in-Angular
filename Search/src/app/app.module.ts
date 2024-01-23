import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SaerchPipe } from './saerch.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SaerchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
