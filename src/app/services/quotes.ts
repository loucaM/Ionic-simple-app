import { Quote } from "../../pages/data/quote.interface";



export class QuotesService {
    private favoriteQuotes: Quote[] = [];

    ajouterCitationAuxFavoris(quote: Quote) {
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }

    supprimerCitationDesFavoris(quote: Quote) {
        const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
        this.favoriteQuotes.splice(position, 1) ;
    }
    
supprimerDesFavorisById(id: string) {
     const idQuote  = +id ;
     console.log(idQuote+" place");
    
     for (var i = 0; i < this.favoriteQuotes.length; i++) {
        if (+(this.favoriteQuotes[i].id) === idQuote) {
            this.favoriteQuotes.splice(i,1) ;
        }
      }
}
    // envoyer une copie et non une référence
    getFavoriteQuotes() {
        return this.favoriteQuotes.slice();
    }

    isQuoteFavorite(quote: Quote) {
        return this.favoriteQuotes.find((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
    }
}