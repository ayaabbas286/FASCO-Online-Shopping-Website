import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
errorTitle: string = 'Oops! Something went wrong';
  errorMessage: string = 'We couldn’t find the page you are looking for.';
}
