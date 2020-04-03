import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgLogModule, LogLevels } from 'projects/ng-log-lib/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgLogModule.forRoot({ level: LogLevels.WARN })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
