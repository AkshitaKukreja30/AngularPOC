import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatCardModule, FormsModule, MatCardModule, MatCardContent, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginModel = {
    username: '',
    password: ''
  };

  ProceedLogin(form: any){
    if(form.valid){
      console.log(this.loginModel);
    }
    else{
      console.log("invalid data");
    }

  }
}
