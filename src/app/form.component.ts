import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Model } from './model';
import { DataService } from './data.service';

@Component({
  selector: 'form-demo',
  templateUrl: './form.component.html',
  styleUrls: ['./form.css'] 
})
export class FormComponent implements OnInit {
  constructor(private dataService: DataService) { }

  public model = new Model(null, 'foo');
  
  ngOnInit() {
      console.log('init form component');
  }

  onSubmit(form: any): void {
      console.log('SAVE');
      this.dataService.postData(this.model)
      .subscribe((data) => {
        console.log('DATA ', data);
      });
  }

  get diagnostic() { return JSON.stringify(this.model); }
}
