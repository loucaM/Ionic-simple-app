import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../data/quote.interface';
import { OnInit } from '@angular/core';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { QuotesService } from '../../app/services/quotes';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }
  quoteGroup: {category: string, quotes: Quote[], icon: string} ;
  
  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams, 
    private alertCtrl: AlertController,
    private quotesService: QuotesService
  ) {

    //data = les données qu'on a passées sur la page précédente
    
  }
  ajouterAuxFavoris(selectedQuote: Quote){
   const alerte =  this.alertCtrl.create({
     title: 'Ajout aux favoris',
     subTitle: 'êtes vous sur ?',
     message: 'êtes vous sur de vouloir ajouter cette citation aux favoris ?',
     buttons: [
       {
         text: 'Oui, allons-y !',
         handler: () => {
           this.quotesService.ajouterCitationAuxFavoris(selectedQuote);
         }
       },
       {
        text: 'Non, j\'ai changé d\'avis' ,
        handler: () => {
          console.log('Annulé');
        }
       }
     ]
   });
   alerte.present();

  }

  supprimerCitationDesFavoris(quote: Quote) {

  }

  isFavorite(quote: Quote) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
  }

}
