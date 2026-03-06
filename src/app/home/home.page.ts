import { Component } from '@angular/core';
import { SideMenuComponent } from "../components/side-menu/side-menu.component";
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {basketball} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, SideMenuComponent],
})
export class HomePage {
  constructor() {
    addIcons({basketball});
  }
}
