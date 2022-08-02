import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Services
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public formAuth: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  //Pode ser vazio ou string
  public msgError!: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  public submitForm() {
    if(this.formAuth.valid) {
      this.authService.signin({
        email: this.formAuth.value.email,
        password: this.formAuth.value.password
      }).subscribe({
        next: res => res,
        error: error => this.msgError = error
      })
    }
  }

}
