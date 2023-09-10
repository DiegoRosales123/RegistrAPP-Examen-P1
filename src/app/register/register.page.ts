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
  showErrorMessage: boolean = false; // Agrega esta variable

  constructor(private router: Router) {}

  register() {
    // Validar que todos los campos obligatorios estén llenos
    if (this.email.trim() === '' || this.username.trim() === '' || this.password.trim() === '') {
      this.showErrorMessage = true; // Mostrar el mensaje de error
      return; // Evitar que el registro continúe si faltan campos
    } else {
      this.showErrorMessage = false; // Ocultar el mensaje de error si todos los campos están llenos
    }

    if (this.password === this.confirmPassword) {
      const user = {
        email: this.email,
        username: this.username,
        password: this.password,
      };

      console.log('Datos de usuario a almacenar:', user);

      // Guardar el usuario en el LocalStorage
      localStorage.setItem('userData', JSON.stringify(user));

      // Redirigir al usuario a la página de inicio de sesión (login)
      this.router.navigate(['/login']);
    } else {
      console.log('Las contraseñas no coinciden');
    }
  }
}
