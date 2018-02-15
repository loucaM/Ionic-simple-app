import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../data/quote.interface';
import { QuotesService } from '../../app/services/quotes';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { QuuotePage } from '../quuote/quuote';
import { settingsService } from '../../app/services/settingsService';


@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
quotes: Quote[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
     private quotesService: QuotesService,
    private modalCtrl: ModalController,
    private settingsService: settingsService
  
  ) {  }
  
  // On peut aussi le faire dans un OnInit
  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes() ;
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuuotePage,quote);
    modal.present();
    modal.onDidDismiss(() => {
      this.quotes = this.quotesService.getFavoriteQuotes() ;
    })
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.supprimerCitationDesFavoris(quote);
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  getBackBackground() {
    return this.settingsService.isAltBackground() ? 'altQtBg' : 'quoteBackground';
  }

}
