import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Model } from './model';
import { DataService } from './data.service';
import { DisplayService } from './display.service';

@Component({
  selector: 'form-demo',
  templateUrl: './form.component.html',
  styleUrls: ['./form.css'] 
})
export class FormComponent implements OnInit {
  constructor(private dataService: DataService, private displayService: DisplayService) { }

  public model = new Model(null, 'foo');
  
  ngOnInit() {
      console.log('init form component');
  }

  onSubmit(form: any): void {
      console.log('SAVE');
      this.dataService.postData(this.model)
      .subscribe((data) => {
        console.log('DATA ', data);
        this.displayService.show(data.display);
        //console.log('this.displayStream ', this.displayStream.next(this.displayString));
      });
  }

  get diagnostic() { return JSON.stringify(this.model); }
}
