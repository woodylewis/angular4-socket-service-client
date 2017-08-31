import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Model } from './model';

@Component({
  selector: 'form-demo',
  templateUrl: './form.component.html',
  styleUrls: ['./form.css'] 
})
export class FormComponent implements OnInit {
  public model = new Model(null, 'foo');
  
  ngOnInit() {
      console.log('init form component');
  }

  onSubmit(form: any): void {
      console.log('SAVE');
  }

  get diagnostic() { return JSON.stringify(this.model); }
}
