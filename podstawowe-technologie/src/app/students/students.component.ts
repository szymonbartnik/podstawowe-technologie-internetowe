import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];
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
    const student = new Student(
      this.studentForm.get('name').value,
      this.studentForm.get('surname').value,
      this.studentForm.get('id').value
    );

    this.students.push(student);
  }

  showStudentFullNameAlert($event: string): void {
    alert($event);
  }
}

export class Student {
  constructor(public name: string,
              public surname: string,
              public id: number) {
  }
}
