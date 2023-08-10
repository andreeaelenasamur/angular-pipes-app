import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'andreea';
  public nameUpper: string = 'ANDREEA';
  public fullName: string = 'AndReEa ElEnA';
}
