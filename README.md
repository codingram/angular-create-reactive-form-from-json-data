# Step by Step Example Angular create ReactiveForm from JsonData

of the  
[Angular-Framework](https://angular.io/)

![Screenshot](src/assets/angular_create_reactive_form_from_json_data.png)

## Table of Contents

- [Getting Started](#getting-started)
- [Step by Step Example Angular create reactive form from json data](#step-by-step)

## Getting Started

1. [Download the installer](https://nodejs.org/) for Node.js
   - check it with: `node --version`
2. Install the angular CLI globally: `npm install -g @angular/cli`
   - check it with: `ng --version`
3. Create Angular Template blank: `ng new YourProjectName`
   - creates a new Folder with the Name: YourProjectName and with blank template
4. Go to your newly created project: `cd .\YourProjectName`
5. Run `ng serve` within the app directory to see your app
   - you see it in: [localhost:4200](http://localhost:4200)


## Step by Step

1. Create new component:
run `ng g component FormFromJsonData`

2. Use the new component, change src/app/app.component.html

```html
<app-form-from-json-data></app-form-from-json-data>

<router-outlet></router-outlet>
```

3. Change src/app/app.module.ts

```typescript

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// add the FormsModule, ReactiveFormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// add the component
import { FormFromJsonDataComponent } from './form-from-json-data/form-from-json-data.component';

@NgModule({
  declarations: [
    AppComponent,
    // add the component
    FormFromJsonDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // add FormsModule, ReactiveFormsModule
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


```

4. Change src/app/form-from-json-data/form-from-json-data.component.ts

```typescript
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

```

5. Change src/app/form-from-json-data/form-from-json-data.component.html

```html
<form novalidate [formGroup]="questionForm" (ngSubmit)="saveForm(questionForm.value)">

<!--iterate over the questions-->
<div *ngFor="let question of questions">
<!-- switch for the type-->
<div [ngSwitch]="question.type">

  <label>{{question.question}}
    <span *ngIf="question.required"> *</span>
  </label>

  <div *ngSwitchCase="'TEXT'">
    <input type="text" [formControlName]="question.id">
  </div>

  <div *ngSwitchCase="'LONGTEXT'">
      <textarea [formControlName]="question.id"></textarea>
  </div>

  <div *ngSwitchCase="'CHOICE'">
      <select [formControlName]="question.id">
        <option>Please select</option>
        <option *ngFor="let choice of question.choices">
          {{choice}}
        </option>

      </select>
  </div>
</div>
</div>
<br><button type="submit" class="btn" [disabled]="!questionForm.valid">Send</button>
</form>

```

ready



