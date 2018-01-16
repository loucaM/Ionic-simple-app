import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../data/quote.interface';
import { OnInit } from '@angular/core';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

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
  
  constructor(public navCtrl: NavController, private navParams: NavParams, private alertCtrl: AlertController) {

    //data = les données qu'on a passées sur la page précédente
    
  }
  ajouterAuxFavoris(){
   const alerte =  this.alertCtrl.create({
     title: 'Ajout aux favoris',
     subTitle: 'êtes vous sur ?',
     message: 'êtes vous sur de vouloir ajouter cette citation aux favoris ?',
     buttons: [
       {
         text: 'Oui, allons-y !',
         handler: () => {
           console.log('Ok');
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
  }

}
