import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FavoritePage } from '../pages/favorite/favorite';
import { SettingsPage } from '../pages/settings/settings';
import { QuotesPage } from '../pages/quotes/quotes';
import { LibraryPage } from '../pages/library/library';
import { QuuotePage } from '../pages/quuote/quuote';
import { TabsPage } from '../pages/tabs/tabs';
import { QuotesService } from './services/quotes';

@NgModule({
  declarations: [
    MyApp,
    FavoritePage,
    SettingsPage,
    QuotesPage,
    QuuotePage,
    LibraryPage,
    HomePage,
    TabsPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FavoritePage,
    SettingsPage,
    QuotesPage,
    QuuotePage,
    LibraryPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService
  ]
})
export class AppModule {}
