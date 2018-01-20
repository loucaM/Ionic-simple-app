import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Quote } from '../data/quote.interface';
import { QuotesService } from '../../app/services/quotes';


@IonicPage()
@Component({
  selector: 'page-quuote',
  templateUrl: 'quuote.html',
})
export class QuuotePage {

  person:string;
  text:string;
 id:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private  quotesService: QuotesService) {
  }

  ionViewDidLoad() {
    this.person = this.navParams.get('person')
    this.text = this.navParams.get('text')
    this.id = this.navParams.get('id') ;

  // this.quote.text = this.text ;
  // this.quote.person = this.person ; 
  }

  onClose() {
    //Efface la page il faut donc avoir une page dans la stack autre que la root.
    this.viewCtrl.dismiss();
  }

  supprimerDesFavs() {
    this.quotesService.supprimerDesFavorisById(this.id);
  }
}
