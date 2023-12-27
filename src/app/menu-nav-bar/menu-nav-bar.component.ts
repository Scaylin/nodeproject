import { Component } from '@angular/core';
import  {faHome} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-nav-bar',
  templateUrl: './menu-nav-bar.component.html',
  styleUrls: ['./menu-nav-bar.component.css']
})
export class MenuNavBarComponent {
  faHome = faHome;
}
