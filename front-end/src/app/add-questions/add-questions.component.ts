import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
  addQuesForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }
  category: HTMLInputElement;
  technology: HTMLElement;
  optionTwo: HTMLElement;
  optionThree: HTMLElement;
  optionFour: HTMLElement;
  options = 1;
  categories = [
    {
      id: 1,
      value: 'Logos'
    },
    {
      id: 2,
      value: 'Quotes'
    },
    {
      id: 3,
      value: 'Puzzles'
    },
    {
      id: 4,
      value: 'Technology'
    },
  ];

  technologies = [
    {
      id: 1,
      value: '.NET'
    },
    {
      id: 2,
      value: 'Python'
    },
    {
      id: 3,
      value: 'Node.js'
    },
    {
      id: 4,
      value: 'Angular 4'
    },
  ];
  changeCat(e) {
    if (e.value === 'Technology') {
      this.technology.hidden = false;
    } else {
      this.technology.hidden = true;
    }
  }
  addOption() {
    switch (this.options) {
      case 1:
        this.optionTwo.hidden = false;
        break;
      case 2:
        this.optionThree.hidden = false;
        break;
      case 3:
        this.optionFour.hidden = false;
        break;
      default:
        alert('No More Options can be added');
    }
    this.options++;
  }
  submit(f) {
    if (!this.addQuesForm.controls['optionTwo'].value) {
      this.addQuesForm.removeControl('optionTwo');
    }
    if (!this.addQuesForm.controls['optionThree'].value) {
      this.addQuesForm.removeControl('optionThree');
    }
    if (!this.addQuesForm.controls['optionFour'].value) {
      this.addQuesForm.removeControl('optionFour');
    }
    if (!this.addQuesForm.controls['tech'].value) {
      this.addQuesForm.removeControl('tech');
    }
    console.log(f.value);
    debugger;
  }

  ngOnInit() {
    this.category = <HTMLInputElement>document.getElementById('category');
    this.technology = document.getElementById('tech');
    this.optionTwo = document.getElementById('optionTwo');
    this.optionThree = document.getElementById('optionThree');
    this.optionFour = document.getElementById('optionFour');
    this.addQuesForm = this._formBuilder.group({
      category: ['',  Validators.required],
      tech: ['', ],
      desc: ['',  Validators.required],
      optionOne: ['',  Validators.required],
      optionTwo: ['', ],
      optionThree: ['', ],
      optionFour: ['', ],
      answer: ['',  Validators.required]
    });
  }

}
