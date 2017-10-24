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

  public model = new Model('', '', '');
  public records = [];
  
  ngOnInit() {
      console.log('init form component');
  }

  onSubmit(form: any): void {
      this.dataService.postRecord(this.model)
      .subscribe((data) => {
        console.log('DATA ', data);
        this.displayService.show(data.display);
      });
  }
  fetchAll(): void {
    this.records = [];
    this.dataService.getList()
    .subscribe((data) => {
      data.display.forEach((element) => {
        this.records.push(element);
      });
    });
  }

  fetchOne(theId): void {
    //this.records = [];
    this.dataService.getRecord({id: theId})
    .subscribe((data) => {
      console.log(data);
    });
    
  }

  changeOne(theId): void {
    console.log(theId);
    //this.records = [];
    this.dataService.editRecord({id: theId})
    .subscribe((data) => {
      console.log(data);
    });
  }

  deleteOne(theId): void {
    this.records = [];
    this.dataService.deleteRecord({id: theId})
    .subscribe((data) => {
      console.log(data);
    });
  }

  //get diagnostic() { return JSON.stringify(this.model); }
}
