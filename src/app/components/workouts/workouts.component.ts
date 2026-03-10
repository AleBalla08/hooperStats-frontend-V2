import { Component, OnInit } from '@angular/core';
import { SideMenuComponent  } from '../side-menu/side-menu.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, barbell } from 'ionicons/icons';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
  imports: [SideMenuComponent, CommonModule, IonicModule]
})
export class WorkoutsComponent  implements OnInit {

  constructor() { 
    addIcons({barbell, add});
  }

  ngOnInit() {}

}
