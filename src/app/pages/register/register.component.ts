import { AuthenticationService } from './../../services/services/authentication.service';
import { RegistrationRequest } from './../../services/models/registration-request';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerRequest: RegistrationRequest = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    confirmPassword: ''
  };
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
  }

  login() {
    this.router.navigate(['login']);
  }

  register() {
    this.errorMsg = []; // Initialiser errorMsg comme un tableau vide

    // Vérifier si les mots de passe correspondent
    if (this.registerRequest.password !== this.registerRequest.confirmPassword) {
      this.errorMsg = ['Passwords do not match'];
      return;
    }

    // Appel au service d'authentification pour l'enregistrement
    this.authService.register({ body: this.registerRequest })
      .subscribe({
        next: () => {
          this.router.navigate(['activate-account']); // Naviguer vers la page d'activation du compte en cas de succès
        },
        error: (err) => {
          // Vérifier si validationErrors existe dans err.error
          const validationErrors = err?.error?.validationErrors;
          if (validationErrors) {
            this.errorMsg = validationErrors; // Affecter les erreurs de validation
          } else {
            console.error('Validation errors not found:', err); // Log si validationErrors n'existe pas
            this.errorMsg = ['An unexpected error occurred']; // Message d'erreur par défaut
          }
        }
      });
  }

  // Méthode pour vérifier si les mots de passe correspondent
  passwordsMatch(): boolean {
    return this.registerRequest.password === this.registerRequest.confirmPassword;
  }
}