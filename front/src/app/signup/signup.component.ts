import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  type: string="password";
 isText:boolean = false;
 eyeIcon: string="fa-eye-slash";
 signUpForm!: FormGroup;
  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
   this.signUpForm =this.fb.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    username:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required],
   })

  } 
    hideShowPass(){
    this.isText=! this.isText;
    this.isText ? this.eyeIcon ="fa-eye" : this.eyeIcon =  "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
    }
    onSingUp(){
      if(this.signUpForm.valid){
        console.log(this.signUpForm.value);
      //perform logic for signup
    }else{
      this.validateAllFormFields(this.signUpForm);
      alert("form is invalid");

    }
       
  }

  private validateAllFormFields(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
      const control =formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
       } else if(control instanceof FormGroup){
          this.validateAllFormFields(control)
       }
         })  
  }

  
  }