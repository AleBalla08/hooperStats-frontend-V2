import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {home, person, barbell, sparkles, receipt} from 'ionicons/icons';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  imports: [CommonModule, IonicModule, RouterModule]
})
export class SideMenuComponent  implements OnInit {

  constructor() { 
     addIcons({home, person, barbell, sparkles, receipt});
  }

  ngOnInit() {}

}
