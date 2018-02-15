import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { QuotesPage } from '../pages/quotes/quotes';
import { TabsPage } from '../pages/tabs/tabs';
import { QuotesService } from './services/quotes';
import { settingsService } from './services/settingsService';
import { FavoritePageModule } from '../pages/favorite/favorite.module';
import { LibraryPageModule } from '../pages/library/library.module';
import { QuotesPageModule } from '../pages/quotes/quotes.module';
import { SettingsPageModule } from '../pages/settings/settings.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FavoritePageModule,
    LibraryPageModule,
    QuotesPageModule,
        SettingsPageModule,
    
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService, settingsService
  ]
})
export class AppModule {}
