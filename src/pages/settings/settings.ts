import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Toggle } from 'ionic-angular/components/toggle/toggle';
import { settingsService } from '../../app/services/settingsService';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {

  constructor(private settingsService: settingsService) {}

  onToggle(toggle: Toggle) {
      this.settingsService.setBackground(toggle.checked)
      console.log(toggle);
      console.log("toggle");
    }

    checkAltBackground() {
      return this.settingsService.isAltBackground();
    }
}
