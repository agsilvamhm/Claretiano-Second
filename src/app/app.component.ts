import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pages: Array<{ title: string; url: string; icon: string}>;
  constructor(private menu: MenuController) {
    menu.enable(true);

    this.pages = [{title: 'Alerts', url:'alerts', icon:'alert-circle'},
                  {title: 'Inputs', url:'inputs', icon:'brush'},
                  {title: 'List', url:'lists', icon:'list'},
                  {title: 'CheckBox', url:'checkbox', icon:'checkmark'},
                  {title: 'Cards', url:'cards', icon:'card'},
                  {title: 'Range', url:'range', icon:'bar-chart'},
                  {title: 'Toast', url:'toast', icon:'grid'},
                  {title: 'Badges', url:'badges', icon:'cloudy'},
                  {title: 'Toggles', url:'toggles', icon:'toggle'}
  ];
  }
}
