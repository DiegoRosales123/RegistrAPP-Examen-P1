import { Component } from '@angular/core';
import { ZBarOptions, ZBar } from '@ionic-native/zbar/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  optionZbar: any;
  scannedOutput: any;
  usernameFromLocalStorage: string; // Cambia el nombre de la propiedad

  constructor(private zbarPlugin: ZBar) {
    this.optionZbar = {
      flash: 'off',
      drawSight: false,
    };

    // Obtener el nombre de usuario del Local Storage al inicializar la página
    const userDataStr = localStorage.getItem('userData');
    if (userDataStr) {
      const userData = JSON.parse(userDataStr);
      this.usernameFromLocalStorage = userData.username; // Asigna el valor al nuevo nombre de propiedad
    }
  }

  barcodeScanner() {
    this.zbarPlugin
      .scan(this.optionZbar)
      .then((response) => {
        console.log(response);
        this.scannedOutput = response;
      })
      .catch((error) => {
        alert(error);
      });
  }
}
