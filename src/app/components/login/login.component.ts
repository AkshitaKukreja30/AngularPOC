import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../../Services/login.service';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatCardModule, FormsModule, MatCardModule, MatCardContent, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginModel = {
    username: '',
    password: ''
  };

  constructor(private service: LoginService){
  }

  ngOnInit(): void {
    // typeof window !== 'undefined': This ensures that the code only runs in the browser, where localStorage is available. 
    // On the server (in SSR or during tests), this will return false and skip the localStorage logic.
    if(typeof window !== 'undefined'&& localStorage.length > 0){
      localStorage.clear();
    } 
  }

  ProceedLogin(form: any){
    if(form.valid){
      console.log(this.loginModel);
    }
    else{
      console.log("invalid data");
    }

    this.service.ProceedLogin(this.loginModel).subscribe(result => {
      let _response = result;
      console.log(_response);
      localStorage.setItem("userName", this.loginModel.username);
    });

  }
}
