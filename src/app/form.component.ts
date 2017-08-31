import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'form-demo',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {
  
  ngOnInit() {
      console.log('init form component');
  }

  onSubmit(form: any): void {
      console.log('SAVE');
  }
}
