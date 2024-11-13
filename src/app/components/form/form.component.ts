import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  // item = {
  //   name: '',
  //   description: '',
  //   price: 0
  // };

  // Add the onSubmit method here
  // onSubmit(): void {
  //   console.log('Form submitted:', this.item);
    // Add your form submission logic, e.g., sending data to an API
  //}
}
