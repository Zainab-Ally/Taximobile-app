import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {RegisterPage} from "../pages/register/register";
import {HistoryPage} from "../pages/history/history";
import {StatisticsPage} from "../pages/statistics/statistics";


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,RegisterPage,HistoryPage, StatisticsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,RegisterPage,HistoryPage, StatisticsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
