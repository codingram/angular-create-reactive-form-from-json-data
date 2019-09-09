import { Component, OnInit } from '@angular/core';
// add FormGroup, FormControl, Validators
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-from-json-data',
  templateUrl: './form-from-json-data.component.html',
  styleUrls: ['./form-from-json-data.component.css']
})
export class FormFromJsonDataComponent implements OnInit {

  // json-data; here in component; better is to get the data from a service
  myJSONData = [{
    id: '1',
    question: 'How old are you?',
    type: 'TEXT',
    required: true
  },
  {
    id: '2',
    question: 'Where are you come from?',
    type: 'LONGTEXT'
  },
  {
    id: '3',
    question: 'Do you love Angular',
    type: 'CHOICE',
    choices: ['yes', 'no', 'maybe'],
    required: true
  }];

  // variables for the form
  questionForm: FormGroup;
  questions;

  constructor() {
    // create a empty FormGroup
    this.questionForm = new FormGroup({});
   }

  ngOnInit() {
    // create the form from the json-data
    this.questions = this.myJSONData;
    for (const question of this.questions) {
      const formControl = this.createControl(question);
      this.questionForm.addControl(question.id, formControl);
    }
  }

  // function for create FormControl
  private createControl(question): FormControl{
    const validators = [];
    if (question.required) {
      validators.push(Validators.required);
    }
    return new FormControl('', validators);
  }

  // save and work with the data
  saveForm(question) {
    console.log(question);
  }
}
