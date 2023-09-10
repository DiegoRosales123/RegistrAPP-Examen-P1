import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  incorrectPassword: boolean = false; // Variable para controlar el mensaje de contraseña incorrecta
  fieldsEmpty: boolean = false; // Variable para controlar el mensaje de campos vacíos
  verificationMessage: string = ''; // Mensaje de verificación

  constructor(private router: Router) {}

  login() {
    const storedUserDataStr = localStorage.getItem('userData');
    let storedUserData;

    // Verifica si los campos de correo y contraseña están vacíos
    if (!this.email || !this.password) {
      this.fieldsEmpty = true;
      this.incorrectPassword = false; // Reinicia el estado de la contraseña incorrecta
      return; // Detiene la función si los campos están vacíos
    } else {
      this.fieldsEmpty = false;
    }

    if (storedUserDataStr) {
      storedUserData = JSON.parse(storedUserDataStr);

      // Eliminar espacios en blanco alrededor del correo electrónico antes de comparar
      const trimmedEmail = this.email.trim();
      const storedEmail = storedUserData.email.trim();

      if (trimmedEmail === storedEmail && this.password === storedUserData.password) {
        // Mostrar Mensaje de Verificacion
        this.verificationMessage = 'Verificación exitosa, redireccionando...';

        // El correo electrónico y la contraseña coinciden con 'userData', redirigir al usuario a /home
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 5000);
      } else {
        // El correo electrónico o la contraseña no coinciden, muestra el mensaje de contraseña incorrecta
        this.incorrectPassword = true;
        this.verificationMessage = ''; // Reiniciar el mensaje de verificación
      }
    } else {
      // No se encontraron datos de registro, puedes mostrar un mensaje de error o tomar otra acción
      console.log('No se encontraron datos de registro');
    }
  }
}
