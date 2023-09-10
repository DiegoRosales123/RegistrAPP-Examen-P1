import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-olvide',
  templateUrl: './olvide.page.html',
  styleUrls: ['./olvide.page.scss'],
})
export class OlvidePage {
  username: string = '';
  recoveredPassword: string | null = null;
  recoveredEmail: string | null = null;
  userNotFound: boolean = false; // Variable para verificar si el usuario no se encontró
  searchingCredentials: boolean = false; // Variable para controlar el mensaje de búsqueda

  constructor(private router: Router) {}

  recoverPassword() {
    // Cambia el mensaje a "Buscando Credenciales" antes de iniciar la búsqueda
    this.searchingCredentials = true;

    // Retrasa la búsqueda durante 5 segundos (simulación)
    setTimeout(() => {
      // Lógica para recuperar la contraseña aquí (simulación)

      const storedUserDataStr = localStorage.getItem('userData');
      if (storedUserDataStr) {
        const storedUserData = JSON.parse(storedUserDataStr);
        if (this.username === storedUserData.username) {
          // Asigna la contraseña y el correo recuperados a las variables correspondientes
          this.recoveredPassword = storedUserData.password;
          this.recoveredEmail = storedUserData.email;
          // Reinicia la variable de usuario no encontrado
          this.userNotFound = false;
        } else {
          // El nombre de usuario no coincide con ningún registro
          // Establece la variable de usuario no encontrado en verdadero
          this.userNotFound = true;
          // Reinicia las variables de contraseña y correo
          this.recoveredPassword = null;
          this.recoveredEmail = null;
        }
      } else {
        // No se encontraron datos de registro
        this.userNotFound = true; // Establece la variable de usuario no encontrado en verdadero
        // Reinicia las variables de contraseña y correo
        this.recoveredPassword = null;
        this.recoveredEmail = null;
      }

      // Cambia el mensaje después de completar la búsqueda
      this.searchingCredentials = false;
    }, 5000); // 5000 ms = 5 segundos (simulación)
  }
}
