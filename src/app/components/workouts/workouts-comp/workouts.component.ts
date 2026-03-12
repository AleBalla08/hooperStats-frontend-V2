import { Component, OnInit } from '@angular/core';
import { SideMenuComponent } from '../../side-menu/side-menu.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, barbell } from 'ionicons/icons';
import { ChartType, GoogleChartsModule } from 'angular-google-charts';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
  imports: [SideMenuComponent, CommonModule, IonicModule, GoogleChartsModule, RouterModule]
})
export class WorkoutsComponent  implements OnInit {

  constructor() { 
    addIcons({barbell, add});
  }

  type: ChartType = ChartType.PieChart;
  data = [
    ['Aremesso - 2pts', 28],
    ['Bandeja', 16],
    ['Arremesso - 3pts', 14]
  ];

  columnNames = ['Exercício', 'Quantidade'];

  options = {
    backgroundColor: 'transparent',
      legend: {
        textStyle: {
          color: '#ffffff',
          fontSize: 14
        }
      }
  }

  width = 400;
  height = 400;

  ngOnInit() {}

}
