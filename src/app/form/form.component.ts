import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,AbstractControlDirective,AbstractControl } from '@angular/forms';


@Component({  
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  today = new Date().toISOString().slice(0, 10)
  taskForm :any = FormGroup;
  submitted:boolean = false
  items = [
    { name: 'James', id: 1 },
    { name: 'Robert', id: 2 },
    { name: 'John', id: 3 },
  ];
  items1 = [
    { name: 'Complete', id: 1 },
    { name: 'Incomplete', id: 2 },
    { name: 'Progress', id: 3 },
  ];
  items2 = [
    { name: 'James', id: 1 },
    { name: 'Robert', id: 2 },
    { name: 'John', id: 3 },
  ];
  items3 = [
    { name: 'Task 1', id: 1 },
    { name: 'Task 2', id: 2 },
    { name: 'Task 3', id: 3 },
  ];
  items4 = [
    { name: 'Important', id: 1 },
    { name: 'Not Important', id: 2 },
  ];

  constructor() {}
  ngOnInit(): void {
    console.log("today ==>", this.today);
    this.taskForm = new FormGroup({
      duedate : new FormControl (null, [Validators.required]),
      createdby : new FormControl (null, [Validators.required]),
      client : new FormControl (null, [Validators.required]),
      project : new FormControl (null, [Validators.required]),
      task : new FormControl (null, [Validators.required]),
      status : new FormControl (null, [Validators.required]),
      assignee : new FormControl (null, [Validators.required]),
      task_type : new FormControl (null, [Validators.required]),
      priority : new FormControl (null, [Validators.required]),
      notes : new FormControl (null, [Validators.required]),
      email_notes : new FormControl (null, [Validators.required]),
      project_filter : new FormControl (false, [Validators.requiredTrue]),
      send_email : new FormControl (false, [Validators.requiredTrue]),
   
    })
  }
  formSubmit(){
   this.submitted = true
   if(this.taskForm.valid){
   }
  }

  get f() { return this.taskForm.controls; }

}
