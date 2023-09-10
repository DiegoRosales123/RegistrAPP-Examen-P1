import { Component } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})
export class AppPage {
  public stringQrCode: string;

  constructor() {
    this.stringQrCode = 'eduforbetterment.com';
  }
}
