import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  rut: string = ''; // Agrega el campo de Rut
  showErrorMessage: boolean = false;

  constructor(private router: Router) {}

  register() {
    if (
      this.email.trim() === '' ||
      this.username.trim() === '' ||
      this.password.trim() === '' ||
      this.rut.trim() === '' // Verifica que el Rut no esté vacío
    ) {
      this.showErrorMessage = true;
      return;
    } else {
      this.showErrorMessage = false;
    }

    if (this.password === this.confirmPassword) {
      const user = {
        email: this.email,
        username: this.username,
        password: this.password,
        rut: this.rut              // Agrega el Rut al objeto de usuario
      };

      console.log('Datos de usuario a almacenar:', user);

      // Guardar el usuario en el LocalStorage
      localStorage.setItem('userData', JSON.stringify(user));

      this.router.navigate(['/login']);
    } else {
      console.log('Las contraseñas no coinciden');
    }
  }
}
