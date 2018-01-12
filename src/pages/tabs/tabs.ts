import { Component } from "@angular/core";
import { FavoritePage } from "../favorite/favorite";
import { LibraryPage } from "../library/library";

@Component({
    selector: 'page-tabs',
    template: `
    <ion-tabs>
        <ion-tab [root]="favoritePage" tabTitle="Favoris" tabIcon="star"></ion-tab>
        <ion-tab [root]="libraryPage" tabTitle="Discographie" tabIcon="md-disc"></ion-tab>
    </ion-tabs> `
})

export class TabsPage{
    favoritePage = FavoritePage;
    libraryPage = LibraryPage;
}