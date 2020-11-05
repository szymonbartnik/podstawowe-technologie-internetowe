import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  student: Student;
  studentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    id: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  assignStudent(): void {
    this.student = new Student(
      this.studentForm.get('name').value,
      this.studentForm.get('surname').value,
      this.studentForm.get('id').value
    );
  }

}

export class Student {
  constructor(public name: string,
              public surname: string,
              public id: number) {
  }
}
