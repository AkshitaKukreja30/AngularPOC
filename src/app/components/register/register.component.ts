import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink , Router} from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { user } from '../../Models/users';

@Component({
  selector: 'register',
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatRadioModule, MatSelectModule, RouterLink ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  constructor( 
    private formBuilder : FormBuilder, 
    private loginService: LoginService,
    private router: Router
  ){

  }

  roles = [
    { value: 'salesman', viewValue: 'Salesman' },
    { value: 'admin', viewValue: 'Admin' },
    { value: 'manager', viewValue: 'Manager' }
  ];
  
  registerForm = this.formBuilder.group({
    username : this.formBuilder.control('', Validators.required),
    name : this.formBuilder.control('DefaultName', Validators.minLength(4)),
    email: this.formBuilder.control('',Validators.compose([Validators.required, Validators.email])),
    roleName: this.formBuilder.control('',),
    gender: this.formBuilder.control('f'),
    terms: this.formBuilder.control(true,Validators.required )
  });

  // registerForm = new FormGroup({
  //   username : new FormControl('', Validators.required),
  //   name : new FormControl('DefaultName', Validators.minLength(4)),
  //   email: new FormControl('',Validators.compose([Validators.required, Validators.email])),
  //   roleName: new FormControl('',),
  //   gender: new FormControl('f'),
  //   terms: new FormControl(true,Validators.required )
  // });

  ProceedRegister(){
    if(this.registerForm.valid){
      if(this.registerForm.value.terms){

        let _data:user={
          id: this.registerForm.value.username as string,
          name: this.registerForm.value.name as string,
          role: this.registerForm.value.roleName as string,
          gender: this.registerForm.value.gender as string,
          email:this.registerForm.value.email as string
        }

        console.log(_data);
        this.loginService.ProceedREgister(_data).subscribe(x => 
        {
          alert("registration successful");
          this.router.navigateByUrl("/login");
        }

        );
      }
      else{
        alert("Please accept terms first");
      }

    }

  }

}
